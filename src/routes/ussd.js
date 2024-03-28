const router = require("express").Router();
const User = require("../database/schemas/User");
const { sendSMS } = require("../utils/sms");

router.get("/checkBalance/contribution", async (req, res) => {
  const { phoneNumber } = req.body;
  const user = await User.findOne({ phoneNumber });
  if (!user) {
    res.status(400).send("User not found");
  } else {
    if (user.active) {
      res.status(200).send({ balance: user.shareAccount.balance });
    } else {
      res.status(400).send("User not active");
    }
  }
}
);
