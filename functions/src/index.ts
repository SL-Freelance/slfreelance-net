import * as functions from "firebase-functions";
import {IMailMessage, IMailResponse} from "../../shared/mail";


export const helloWorld = functions
    .https
    .onRequest(async (request, response) => {
      const mail: IMailMessage = request.body;
      if (mail.message) {
        const sgMail = require("@sendgrid/mail");
        const sendgrid = functions.config().sendgrid;
        sgMail.setApiKey(sendgrid.key);

        const msg = {
          to: sendgrid.to_mail, // Change to your recipient
          from: sendgrid.from_mail, // Change to your verified sender
          subject: "Message from " + mail.email,
          text: mail.name + "\n" + mail.message + "\n" + mail.phone,
          // html: "<strong>and easy to do anywhere, even with Node.js</strong>",
        };

        try {
          await sgMail.send(msg);
          console.log("Email sent, thanks");
          const result: IMailResponse = {status: "Email sent"};
          response.json(result);
        } catch (error) {
          console.error(error);
          const result: IMailResponse = {status: (error.message || error)};
          response.json(result);
        }
      } else {
        const result: IMailResponse = {status: "No message"};
        response.json(result);
      }
    });

