import Card from '../Components/Card'
import Data from '../Data/ValentinesDay'
import '../App.css'
import ValentinesDay from '../images/ValentinesDay-Strawberry-WCRasberry-MexicanHC2.jpg'
import Strawberries from '../images/ValentinesDay-Strawberries.jpg'



export default function Cheesecakes() {


    const cardElements = Data.map(item => {
      return <Card  
      key={item.id}
      item={item}
      />
    })

        return (

          <div>


          <div className="headline">
                  <h1><b>Valentines Day Featured Cakes</b></h1>
          </div>

            <div className='V-DayContainer'>
              <img className="V-Dayimg" src={ValentinesDay}/>
              <img className="V-Dayimg" src={Strawberries}/>
            </div>

          <div className='cheesecakeWrapper'>
                {cardElements}
            </div>

          </div>
        )

}

