import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Por favor, ingresa un correo electrónico válido.'],
  },
  password: {
    type: String,
    required: true,
    minlength: [6, 'La contraseña debe tener al menos 6 caracteres.'],
  },
  isSubscribed: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

// Usa el modelo solo si no está ya definido
const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;
