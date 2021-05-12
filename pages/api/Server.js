/*export default function (req, res) {
  require('dotenv').config();

  let nodemailer = require('nodemailer')

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'startos.tech@gmail.com',
      pass: process.env.password,
    },
    secure: true,
  });
  
  const mailData = {
    from: 'startos.tech@gmail.com',
    to: 'startos.tech@gmail.com',
    subject: `Mensagem de ${req.body.name} ${req.body.surname}`,
    text: req.body.message + " | Enviado de: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
}

transporter.sendMail (mailData, function (err, info) { 
  if (err) 
    console.log (err) 
  else 
    console.log (info) 
})

  console.log(req.body)
    res.send('success')
}


//Se você estiver compartilhando este código com o github, lembre-se de incluir o .env em seu gitignore. E se você estiver implantando o aplicativo em um site ativo, lembre-se de incluir sua senha como uma variável de ambiente!
*/