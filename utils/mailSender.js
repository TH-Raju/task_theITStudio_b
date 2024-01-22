export function sendEmail(booking) {
  const { email, name, Phone, hobbies } = booking;

  const auth = {
    auth: {
      api_key: process.env.EMAIL_SEND_KEY,
      domain: process.env.EMAIL_SEND_DOMAIN,
    },
  };

  const transporter = nodemailer.createTransport(mg(auth));

  // let transporter = nodemailer.createTransport({
  //     host: 'smtp.sendgrid.net',
  //     port: 587,
  //     auth: {
  //         user: "apikey",
  //         pass: process.env.SENDGRID_API_KEY
  //     }
  // });
  console.log("sending email", email);
  transporter.sendMail(
    {
      from: "rajukhan894200@gmail.com", // verified sender email
      to: email || "info@redpositive.in", // recipient email
      subject: `${name}'s Hobbies`, // Subject line
      text: "Hello world!", // plain text body
      html: `
        <h3>${name}'s Hobby </h3>
        <div>
            <p>Name: ${name}</p>
            <p>Phone:  ${Phone} </p>
            <p>Hobbies: ${hobbies}</p>
            <p>Thanks from your Time!!.</p>
        </div>
        
        `, // html body
    },
    function (error, info) {
      if (error) {
        console.log("Email send error", error);
      } else {
        console.log("Email sent: " + info);
      }
    }
  );
}
