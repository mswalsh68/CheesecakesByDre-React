import '../App.css'
import ContactForm from '../Components/ContactForm'
import behindScenes from '/images/behind-the-scenes.jpeg'
import behindScenes2 from '/images/IMG_6311.jpg'



export default function Contact() {

  
  return (

    <div>
        <div className="headline">
            <h1><b>Contact Us</b></h1>
        </div>

    
        <div className="orderContainer">

        <ContactForm />

        <div className="orderImageContainer">
            <img className="orderImage" src={behindScenes}/>
        </div>

        <div className="orderImageContainer">
            <img className="orderImage" src={behindScenes2}/>
        </div>
     

        </div>
        
    </div>
  )
}
