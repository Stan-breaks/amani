const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  idNumber: {
    type: String,
    required: true,
    unique: true,
  },
  shareAccount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ShareAccount",
  },
  savingsAccount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SavingsAccount",
  },
  loans: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Loan",
    },
  ],
  active: {
    type: Boolean,
    default: false,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
