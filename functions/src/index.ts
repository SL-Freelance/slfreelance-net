import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  if (request.body.message) {
    const sgMail = require("@sendgrid/mail");
    const sendgrid = functions.config().sendgrid;
    sgMail.setApiKey(sendgrid.key);

    const msg = {
      to: sendgrid.to_mail, // Change to your recipient
      from: sendgrid.from_mail, // Change to your verified sender
      subject: "Sending with SendGrid is Fun",
      text: "and easy to do anywhere, even with Node.js",
      html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    };
    sgMail
        .send(msg)
        .then(() => {
          console.log("Email sent");
          response.json({"data": "Thanks"});
        })
        .catch((error: Error) => {
          console.error(error);
          response.json({"data": error});
        });
  } else {
    response.json({"data": "No message"});
  }
});

