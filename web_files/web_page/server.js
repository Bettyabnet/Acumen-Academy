const nodemailer = require('nodemailer');
// Create a transport object
const transporter = nodemailer.createTransport({
    // Configure the email transport settings (e.g., SMTP server, credentials)
    // Refer to the Nodemailer documentation for the specific configuration options
  });
  
  // Define the email options
  const mailOptions = {
    from: 'sender@example.com',
    to: 'recipient@example.com',
    subject: 'Hello from Nodemailer',
    text: 'This is a test email from Nodemailer.',
  };
  
  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });