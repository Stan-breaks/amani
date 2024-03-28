const mongoose = require("mongoose");

const loanSchema = new mongoose.Schema({
  member: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Member",
    required: true,
  },
  amount: { type: Number, required: true },
  interest: { type: Number, required: true },
  term: { type: Number, required: true }, // term in months
  status: {
    type: String,
    enum: ["pending", "approved", "disbursed", "defaulted"],
    default: "pending",
  },
  repayments: [
    {
      amount: { type: Number, required: true },
      date: { type: Date, default: Date.now },
    },
  ],
});

module.exports = mongoose.model("Loan", loanSchema);

