import twilio from "twilio";

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export const sendMessage = async (req, res) => {
  const { name, email, subject, message } = req.body;

  const text = `New Hotel Enquiry:
  Email: ${email}
  Name: ${name}
  Subject: ${subject}
  Message: ${message}`;

  try {
    const result = await client.messages.create({
      body: text,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: process.env.MY_PERSONAL_PHONE
    });

    res.status(200).json({ success: true, sid: result.sid });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
