const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const SALT_WORK_FACTOR = 10;

const userSchema = new Schema({
  clientId: { type: Schema.Types.ObjectId, ref: 'Client' },
  fullName: { type: String, default: null },
  email: { type: String, required: true },
  password: { type: String, required: true },
  salt: { type: String, required: true },
  role: { type: String, enum: ['SUPERADMIN', 'ADMIN', 'USER'], default: 'USER' },
  gender: { type: String, enum: ['M', 'F'], default: null },
  avatar: { type: String, default: null },
  isActive: { type: Boolean, default: false },
  loginCount: { type: Number, default: 0 },
  emailVerificationToken: { type: String, default: null },
  emailVerified: { type: Boolean, default: false },
  resetPasswordToken: { type: String, default: null },
  lastVisitedAt: { type: Date, default: null },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

userSchema.pre('save', (next) => {
  const user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  return bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) return next(err);

    const hash = crypto.createHmac('sha512', salt);
    hash.update(user.password);
    const value = hash.digest('hex');

    // override the cleartext password with the hashed one
    user.salt = salt;
    user.password = value;

    return next();
  });
});

userSchema.methods.comparePassword = (password, user, cb) => {
  const hash = crypto.createHmac('sha512', user.salt);
  hash.update(password);
  const value = hash.digest('hex');

  return cb(value === user.password);
};

module.exports = mongoose.model('User', userSchema);
