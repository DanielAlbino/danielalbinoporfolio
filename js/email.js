const sendMail = () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;
  if (
    name.trim() !== "" &&
    email.trim !== "" &&
    subject.trim() !== "" &&
    message.trim() !== ""
  ) {
    Email.send({
      SecureToken: "d6d8ce60-5bd7-498c-bf4e-8e10b4cd302e",
      To: "daniel18albino@gmail.com",
      From: "daniel18albino@gmail.com",
      Subject: subject,
      Body: `${name} with the email ${email}, send the following message: \n ${message}`,
    }).then(() => alert("message Sent!"));
  } else {
    alert("Fill all the blank spaces!");
  }
};
