const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  "SG.sB45otCDRgWLlSRwmyRY2Q.zwuat9GUwQA7F927Y8IY9S-G-nB-N"
);

let BUILD_QUEUEDBY='' + process.env.BUILD_QUEUEDBY + ''
let AGENT_JOBNAME='' + process.env.AGENT_JOBNAME + ''
let AGENT_ID='' + process.env.AGENT_ID + ''
let AGENT_JOBSTATUS='' + process.env.AGENT_JOBSTATUS + ''

const msg = {
  to: "jinojoe@gmail.com", // Change to your recipient
  from: "jinojoe@gmail.com", // Change to your verified sender
  templateId: "d-d5a30658ae6e4ba7b60527d45a9a72a0",
  dynamicTemplateData: {
    subject: "PIPELINES RESULTS",
    BUILD_QUEUEDBY: BUILD_QUEUEDBY,
    AGENT_JOBNAME: AGENT_JOBNAME,
    AGENT_ID: AGENT_ID,
    AGENT_JOBSTATUS: AGENT_JOBSTATUS,
  },
};

sgMail
  .send(msg)
  .then(() => {
    console.log("Email sent");
  })
  .catch((error) => {
    console.error(error);
  });
