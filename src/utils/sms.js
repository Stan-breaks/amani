const Africastalking = require("africastalking");
const { AT_API_KEY, AT_USERNAME } = process.env;
const sms = Africastalking({
  apiKey: AT_API_KEY,
  username: AT_USERNAME,
});
const sendSMS = async (message, to) => {
  try {
    const response = await sms.SMS.send({
      to,
      message,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { sendSMS };
