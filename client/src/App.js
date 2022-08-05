import './styles/feedback.css'
import { useEffect, useState } from 'react';

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  let [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  })

  function validateForm() {
    errors = []
    if (!name || name.length < 2) {
      errors.name = 'Too short length'
    }
    if (!email || !email.includes('@') && !email.includes('.')) {
      errors.email = 'Invalid email'
    }
    if (!message) {
      errors.message = 'The field is empty'
    }

    setErrors({ ...errors })
  }

  async function sendFeedback() {
    try {
      validateForm()
      console.log(errors)
      if (errors.name || errors.email || errors.message) return

      const response = await fetch('http://localhost:8080/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
      })

      setName('')
      setEmail('')
      setMessage('')
      alert('Thanks for your feedback!')
    } catch (e) {
      alert(e)
    }

  }



  return (
    <>
        <div className='container'>
          <div className='contaner-left'>
            <img src='./images/red_cartoon 4.svg'></img>
            <div className='feedback_form'>
              <div className='feedback_block'>
                <h1 className='title'>Reach out to us!</h1>
                <div className='inputs'>
                  <div className='input_block'>
                    <input className='input' value={name} placeholder="Your name*"
                      onChange={event => setName(event.target.value)} />
                    <p className='error'>{errors.name}</p>
                  </div>
                  <div className='input_block'>
                    <input className='input' value={email} placeholder="Your e-mail*"
                      onChange={event => setEmail(event.target.value)}
                    ></input>
                    <p className='error'>{errors.email}</p>
                  </div>
                  <div className='input_block'>

                    <textarea className='input input-message' value={message} placeholder="Your message*"
                      onChange={event => setMessage(event.target.value)}
                    ></textarea>
                    <p className='error'>{errors.message}</p>
                  </div>
                </div>
                <button className='btn_send'
                  onClick={sendFeedback}
                >Send message</button>
              </div>
            </div>


          </div>
          <div className='container-right'>
            <div className='smiles'>
              <img className='smile-yellow' src='./images/goodie1.svg'></img>
              <img className='smile-red' src='./images/red_cartoon 6.svg'></img>

            </div>
            <img className='map' src='./images/Mask Group.png'></img>
          </div>
        </div>
      <footer>
        <div className='images_block'>
          <div className='images_block-left'>
            <img className='smile-footer-red' src='./images/red_cartoon 6.svg'></img>
            <div className='icons_block'>
              <img className='icon' src='./images/Frame 1.svg'></img>
              <img className='icon' src='./images/Frame 2.svg'></img>
              <img className='icon' src='./images/Frame 3.svg'></img>
              <img className='icon' src='./images/Frame 4.svg'></img>
            </div>

          </div>

          <div className='images_block-right'>
            <img className='image_green' src='./images/Group 80.svg'></img>
            <img className='smile-yellow-footer' src='./images/red_cartoon 4.svg'></img>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
