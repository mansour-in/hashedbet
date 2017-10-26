const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema({
  street: { type: String, default: null },
  city: { type: String, default: null },
  state: { type: String, default: null },
  country: { type: String, default: null },
  postalCode: { type: Number, default: null },
});

const clientSchema = new Schema({
  name: { type: String, required: true },
  address: addressSchema,
  accessToken: { type: String, required: true },
  isActive: { type: Boolean, default: false },
  avatar: { type: String, default: null },
  plan: { type: String, enum: ['FREE', 'STANDARD', 'ENTERPRISE'], default: 'FREE' },
  loginCount: { type: Number, default: 0 },
  lastVisitedAt: { type: Date, default: null },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Client', clientSchema);
