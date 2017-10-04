const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const generalSchema = new Schema({
  os: { type: String, default: null },
  browser: { type: String, default: null },
  ip: { type: String, default: null },
});

const geoSchema = new Schema({
  city: { type: String, default: null },
  country: { type: String, default: null },
  region: { type: Number, default: null },
  geometry: {
    coordinates: { type: [Number], index: '2dsphere' },
  },
});

const messageSchema = new Schema({
  textType: { type: String, enum: ['USER', 'BOT'], required: true },
  text: { type: String, required: true },
  date: { type: Date, required: true },
});

const conversationSchema = new Schema({
  clientId: { type: Schema.Types.ObjectId, ref: 'Client' },
  chatbotId: { type: Schema.Types.ObjectId, ref: 'Chatbot' },
  watsonConversationId: { type: String, default: null },
  email: { type: String, default: null },
  name: { type: String, default: null },
  startDate: { type: Date, default: null },
  endDate: { type: Date, default: null },
  pageUrl: { type: String, default: null },
  rating: { type: Number, default: 0 },
  feedback: { type: String, default: null },
  general: generalSchema,
  geo: geoSchema,
  conversations: [messageSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Conversation', conversationSchema);
