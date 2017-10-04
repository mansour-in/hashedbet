const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appearanceSchema = new Schema({
  badgeStyle: { type: String, enum: ['FULL', 'COMPACT'], default: 'FULL' },
  showBotPicture: { type: Boolean, default: false },
  position: { type: String, enum: ['BL', 'BR'], default: 'BR' },
  primaryColor: { type: String, default: null },
  secondaryColor: { type: String, default: 'ffffff' },
});

const textSchema = new Schema({
  titleBar: String,
  startButton: String,
  welcomeText: String,
  badge: String,
  firstMessage: String,
});

const chatbotSchema = new Schema({
  clientId: { type: Schema.Types.ObjectId, ref: 'Client' },
  workspaceId: { type: String, required: true },
  name: { type: String, required: true },
  embedToken: { type: String, required: true },
  url: { type: String, default: null },
  timezone: { type: String, default: null },
  avatar: { type: String, default: null },
  general: {
    transcriptEmail: {
      active: { type: Boolean, default: false },
      email: { type: String, default: null },
    },
  },
  isInstalled: { type: Boolean, default: false },
  language: { type: String, enum: ['en', 'dl'], default: 'en' },
  isDeleted: { type: Boolean, default: false },
  removeCleverBrand: { type: Boolean, default: false },
  hideRatingForm: { type: Boolean, default: false },
  hideRegistrationForm: { type: Boolean, default: false },
  appearance: appearanceSchema,
  text: textSchema,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  createdBy: { type: String, default: null },
  updatedBy: { type: String, default: null },
});

module.exports = mongoose.model('Chatbot', chatbotSchema);
