import { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, subject, message } = req.body;

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    from: process.env.EMAIL_FROM,
    to: `faisal.sayed502@gmail.com`,
    subject: subject,
    text: `Email: ${email} (${name}) \n Message: ${message}`,
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).json({ message: error.message });
    });
  return res.status(200).json({ message: "Email sent!" });
};
