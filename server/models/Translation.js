const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const translationSchema = new Schema({
  language: { type: String, enum: ['en', 'dl'], default: 'en' },
  text: {
    titleBar: String,
    startButton: String,
    welcomeText: String,
    badge: String,
    firstMessage: String,
  },
  label: {
    name: String,
    nameError: String,
    email: String,
    emailError: String,
    footer: String,
    replyAreaPlaceholder: String,
    endChat: String,
    minimize: String,
    turnOffSound: String,
    turnOnSound: String,
    endChatPrompt: String,
    continueChat: String,
    chatEndedNotification: String,
    chatAgain: String,
    rateYourConversation: String,
    submitRating: String,
    thankYouForRating: String,
    ratingError: String,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Translation', translationSchema);
