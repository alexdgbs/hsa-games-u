import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import paypal from 'paypal-rest-sdk';
import User from '../models/User.js';
import cors from 'cors';
import helmet from 'helmet';
import fetch from 'node-fetch';
import consola from 'consola';
import { Nuxt, Builder } from 'nuxt';

dotenv.config();
console.log('MONGO_URI:', process.env.MONGO_URI); 
console.log('PAYPAL_CLIENT_ID:', process.env.PAYPAL_CLIENT_ID);
console.log('PAYPAL_CLIENT_SECRET:', process.env.PAYPAL_CLIENT_SECRET);

const app = express();

app.use(cors({
  origin: '*',
  credentials: true
}));

app.use(express.json());

app.use(helmet({
  contentSecurityPolicy: false
}));


import config from '../nuxt.config.js';
config.dev = process.env.NODE_ENV !== 'production';

async function startNuxt() {
  const nuxt = new Nuxt(config);
  const { host, port } = nuxt.options.server;

 
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  } else {
    await nuxt.ready();
  }

  
  app.use(nuxt.render);
  
  return { host, port };
}


async function getAccessToken() {
  const response = await fetch('https://api.sandbox.paypal.com/v1/oauth2/token', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${Buffer.from(`${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials'
  });

  const data = await response.json();
  return data.access_token;
}


app.post('/api/cancel-subscription', async (req, res) => {
  const { subscriptionId } = req.body;

  if (!subscriptionId) {
    return res.status(400).json({ message: 'El ID de la suscripción es requerido.' });
  }

  try {
    const accessToken = await getAccessToken();
    const response = await fetch(`https://api.sandbox.paypal.com/v1/billing/subscriptions/${subscriptionId}/cancel`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      },
      body: JSON.stringify({ reason: 'Cancelación de la suscripción' })
    });

    if (!response.ok) {
      throw new Error('Error al cancelar la suscripción');
    }

    res.status(200).json({ message: 'Suscripción cancelada con éxito' });
  } catch (error) {
    console.error('Error cancelando la suscripción:', error);
    res.status(500).json({ message: 'Error al cancelar la suscripción' });
  }
});


app.get('/api/user', async (req, res) => {
  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ message: 'El correo electrónico es requerido.' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    
    res.status(200).json(user);
  } catch (error) {
    console.error('Error al obtener el usuario:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
});


paypal.configure({
  mode: 'sandbox',
  client_id: process.env.PAYPAL_CLIENT_ID,
  client_secret: process.env.PAYPAL_CLIENT_SECRET
});


app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'El correo electrónico es requerido.' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    if (user.isSubscribed) {
      return res.status(400).json({ message: 'El usuario ya está suscrito.' });
    }

    user.isSubscribed = true;
    await user.save();

    res.status(200).json({ message: 'Usuario suscrito exitosamente' });
  } catch (error) {
    console.error('Error al suscribir al usuario:', error);
    res.status(500).json({ message: 'Error al suscribir al usuario' });
  }
});


app.post('/api/update-subscription', async (req, res) => {
  const { email, isSubscribed } = req.body;

  try {
    const user = await User.findOneAndUpdate(
      { email },
      { isSubscribed }, 
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.status(200).json({ message: 'Estado de suscripción actualizado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar la suscripción' });
  }
});


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch((err) => console.error('Error conectando a MongoDB:', err));


app.get('/api/test', (req, res) => {
  console.log('Se ha recibido una solicitud en /api/test');
  res.json({ message: 'API funcionando' });
});


app.post('/api/register', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Por favor, proporciona un correo electrónico y una contraseña.' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'Usuario creado con éxito' });
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    res.status(500).json({ message: 'Error al registrar el usuario' });
  }
});


app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  console.log('Datos de inicio de sesión:', { email, password });

  if (!email || !password) {
    return res.status(400).json({ message: 'Por favor, proporciona un correo electrónico y una contraseña.' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Credenciales inválidas' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log('isMatch:', isMatch); 

    if (!isMatch) {
      return res.status(400).json({ message: 'Credenciales inválidas' });
    } 

    res.cookie('user', { 
      email: user.email, 
      isSubscribed: user.isSubscribed 
    }, { 
      httpOnly: true, 
      secure: true, 
      sameSite: 'None' 
    });

    res.status(200).json({ message: 'Inicio de sesión exitoso', email: user.email, isSubscribed: user.isSubscribed });
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
});


app.post('/api/create-payment', (req, res) => {
  const { amount } = req.body;

  if (!amount) {
    return res.status(400).json({ message: 'El monto es requerido.' });
  }

  const paymentJson = {
    intent: 'sale',
    payer: { payment_method: 'paypal' },
    transactions: [{ 
      amount: { total: amount, currency: 'MXN' }, 
      description: 'Pago de suscripción' 
    }],
    redirect_urls: {
      return: 'https://hsa-games.com/success',
      cancel: 'https://hsa-games.com/cancel'
    }
  };

  paypal.payment.create(paymentJson, (error, payment) => {
    if (error) {
      console.error('Error al crear el pago:', error);
      return res.status(500).json({ message: 'Error al crear el pago.' });
    }

    res.json({ payment });
  });
});


startNuxt().then(({ host }) => {
  const port = process.env.PORT || 3000; 
  app.listen(port, host, () => {
    consola.ready({
      message: `Server listening on http://${host}:${port}`,
      badge: true
    });
  });
}).catch(error => {
  consola.error('Error al iniciar el servidor:', error);
});

