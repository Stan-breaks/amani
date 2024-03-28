const { Router } = require("express");
const router = Router();
const User = require("../database/schemas/User");
const { hashPassword, comparePassword } = require("../utils/helper");
const { sendSMS } = require("../utils/sms");

router.post("/register", async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    idNumber,
    password,
    confirmPassword,
  } = req.body;
  if (
    firstName &&
    lastName &&
    email &&
    phoneNumber &&
    idNumber &&
    password &&
    confirmPassword
  ) {
    const user = await User.findOne({ email });
    if (user) {
      res.status(400).send("User already exists");
    }
    if (password === confirmPassword) {
      const newUser = new User({
        firstName,
        lastName,
        email,
        phoneNumber,
        idNumber,
        password: hashPassword(password),
      });
      await newUser.save();
      res.status(201).send("User created");
      sendSMS(
        `Hello ${firstName} to Amani sacco we will fill you in on more details of your account.\nThank you for choosing Amani sacco`,
        phoneNumber,
      );
    } else {
      res.status(400).send("Bad Request");
    }
  } else {
    res.status(400).send("Bad Request");
  }
});

router.post("/checkStatus", async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    res.status(400).send("User not found");
  } else {
    if (user.active) {
      res.status(200).send({status:true});
    } else {
    res.status(200).send({status:false});
    }
  }
});

module.exports = router;
