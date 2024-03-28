const router = require("express").Router();
const User = require("../database/schemas/User");
const { sendSMS } = require("../utils/sms");

router.post("/registPay", async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    res.status(400).send("User not found");
  } else {
    if (user.active) {
      res.status(200).send("User is active");
    }
    else {
      user.active = true;
      await user.save();
      await sendSMS("Your registration Payment of KSH 10,000 was successful and has been processed", user.phoneNumber);
      res.status(200).send("Payment successful");
    }
  }
});



module.exports = router;
