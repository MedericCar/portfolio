import React, { useState } from 'react'
import emailjs, { init } from 'emailjs-com'
import './contact.scss'


const renderSendButton = (sent) => {
  if (sent) {
    return <button disabled style={{cursor:'default', color: 'var(--green)', backgroundColor: 'var(--bg-green)', border: '1px var(--green) solid'}}>Sent !</button>
  } else {
    return <button type='submit'>Send</button>
  }
}

const isValidEmail = email => {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};



export default function Contact() {

  const [ name, setName ] = useState('')
  const [ mail, setMail ] = useState('')
  const [ message, setMessage ] = useState('')
  const [ sent, setSent ] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (name && mail && message) {

      if (!isValidEmail(mail)) {
        alert('Please enter a valid email.')
        return
      }
      // TODO - send mail
      const serviceId = 'service_zc8fbku';
            const templateId = 'template_3bx52ox';
            const userId = 'user_9U9sUmHvHS3HJaGwi8WGv';
            const templateParams = {
                name,
                mail,
                message
            };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
          }, function(error) {
            console.log('FAILED...', error);
          })
     

      setName('');
      setMail('');
      setMessage('');
      setSent(true);
    } else {
      alert('Please fill in all fields.');
    }
  }

  return (
    <div className='contact' id='contact'>
    <h1>Contact me</h1>
    <p>If you have an opportunity for me, feel free to leave a message !</p>
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
      <input type='text' placeholder='Email' value={mail} onChange={(e) => setMail(e.target.value)}/>
      <textarea placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)}/>
      {renderSendButton(sent)}
    </form>
    </div>
  )
}
