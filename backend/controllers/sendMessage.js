
require('dotenv').config();
const twilio = require('twilio');


const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

exports.sendMessage = async (req, res) => {
  const { name, email, subject, message } = req.body;

  const text = `New Hotel Enquiry:
  Email: ${email}
  Name: ${name}
  Subject: ${subject}
  Message: ${message}`;

  try {
    const result = await client.messages.create({
      body: text,
      from: process.env.TWILIO_PHONE_NUMBER, // Your verified Twilio number
      to: process.env.MY_PERSONAL_PHONE      // Your personal number (now hidden)
    });

    res.status(200).json({ success: true, sid: result.sid });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
