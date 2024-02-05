import '../App.css'
import ContactForm from '../Components/ContactForm'
import behindScenes from '../images/behind-the-scenes.jpeg'



export default function Order() {

  
  return (

    <div>
        <div className="headline">
            <h1><b>Order Online</b></h1>
        </div>

    
        <div className="orderContainer">

                <ContactForm />

        <div className="orderImageContainer">
            <img className="orderImage" src={behindScenes}/>
        </div>
     

        </div>
        
    </div>
  )
}
