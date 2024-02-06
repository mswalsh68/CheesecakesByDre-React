import {useRef} from 'react'
import '../App.css'
import emailjs from '@emailjs/browser'
import {useNavigate} from 'react-router-dom'


export default function ContactForm() {
  
  const form = useRef();
  const navigate = useNavigate();


  function handleSubmit(e){
    navigate('/ThankYou')
      e.preventDefault();

  emailjs.sendForm('service_s8b4vep', 'template_e2fglfg', form.current, '-5EntjEEuC2PrJWO4')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });e.target.reset()
  }
  
  
  
  return (
       
        <form ref={form} className='form' onSubmit={handleSubmit}>  
            <div className="inputs1">
                <input className='inputs' 
                    type="text"
                    placeholder="Name"
                    name="name"
                />
                <input className='inputs'
                    type="email"
                    placeholder="Email"
                    name="email"
                />
                <input className='inputs'
                    type="text"
                    placeholder="Phone Number"
                    name="phone"
                />
             </div>
             <div className='inputs2'>
                    <textarea className='inputs' 
                        cols="30" 
                        rows="10"
                        placeholder="What would you like to order?"
                        name = "comments"
                    />

            </div>

            <button type="submit" value="Send" className='send'>Submit
            </button>       
        </form>
      
  )
}
