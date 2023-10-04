import React from 'react'
import Card from './Card'
import Data from './Data'
import Footer from './Footer'


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
            <h1><b>Featured </b></h1>
        </div>

    <div className='cheesecakeWrapper'>
          {cardElements}
      </div>

    <Footer />

    </div>
  )
}

