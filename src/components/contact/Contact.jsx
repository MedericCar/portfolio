import React, { useState } from 'react'
import './contact.scss'


const renderSendButton = (sent) => {
  if (sent) {
    return <button style={{color: 'var(--green)', backgroundColor: 'var(--bg-green)', border: '1px var(--green) solid'}}>Sent !</button>
  } else {
    return <button type='submit'>Send</button>
  }
}

export default function Contact() {

  const [ sent, setSent ] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <div className='contact' id='contact'>
    <h1>Contact me</h1>
    <p>If you have an opportunity for me, feel free to leave a message !</p>
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Email'/>
      <textarea placeholder='Message'/>
      {renderSendButton(sent)}
    </form>
    </div>
  )
}
