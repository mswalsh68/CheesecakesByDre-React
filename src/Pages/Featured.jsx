import Card from '../Components/Card'
import Features from '../Data/Features.json'
import '../App.css'
import ValentinesDayCakes from '/images/ValentinesDay-Strawberry-WCRasberry-MexicanHC2.jpg'
import Strawberries from '/images/ValentinesDay-Strawberries.jpg'



export default function Cheesecakes() {


  const cardElements = Features.map(item => {
    return <Card key={item.id} {...item}/>
    })

        return (

          <div>


          <div className="headline">
                  <h1><b>Valentines Day Featured Cakes</b></h1>
          </div>

            <div className='V-DayContainer'>
              <img className="V-Dayimg" src={ValentinesDayCakes}/>
              <img className="V-Dayimg" src={Strawberries}/>
            </div>

          <div className='cheesecakeWrapper'>
                {cardElements}
            </div>

          </div>
        )

}

