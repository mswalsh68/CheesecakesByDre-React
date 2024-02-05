import Card from '../Components/Card'
import Data from '../Data/Data'
import '../App.css'



export default function Cheesecakes() {

    const cardElements = Data.map(item => {
        return <Card  
                      key={item.id}
                      item={item}
                />
      })

  return (

    <div >

    <div className="headline">
            <h1><b>Cheesecake Menu</b></h1>
    </div>

    <div className='cheesecakeWrapper'>
          {cardElements}
      </div>

    </div>
  )
}

