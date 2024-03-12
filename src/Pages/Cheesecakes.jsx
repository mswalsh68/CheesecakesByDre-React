import Card from '../Components/Card'
import storeItems from '../Data/Data.json'

import '../App.css'



export default function Cheesecakes() {

    const cardElements = storeItems.map(item => {
        return <Card key={item.id} {...item}/>
      })

  return (

    <div style={{minHeight: "100vh"}}>

    <div className="headline">
            <h1><b>Cheesecake Menu</b></h1>
    </div>

    <div className='cheesecakeWrapper'>
          {cardElements}
      </div>

    </div>
  )
}

