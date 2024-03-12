// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Button } from 'react-bootstrap';
import '../App.css'
import { useShoppingCart } from '../Context/ShoppingCartContext';
import { FormatCurrency } from '../Utilities/FormatCurrenty';

// eslint-disable-next-line react/prop-types
export default function Card({id, title, coverImg, description, smallprice}) {

const {getItemQuantity, addNumber, subtractNumber, removeAll} = useShoppingCart()

const quantity = getItemQuantity(id)
  

  return (

    
    <div className='card'>
        <p><b>{title}</b></p>
        <img className="cardImg" src={coverImg} />
        <p>{description}</p>
        <p><b>{FormatCurrency(smallprice)}</b></p>
        
        <div>
            {quantity === 0? (<Button className='Button-Card' onClick={() => addNumber(id)}> Add to Cart </Button>) : null}
        </div>
        <div>
            {quantity > 0? 
                <div>
                  <Button className='Button-Card' onClick={() => subtractNumber(id)}> - </Button> {quantity} in Cart < Button className='Button-Card' onClick={() => addNumber(id)}> + </Button>
                  <br /><br />
                  <Button className='bg-danger' onClick={() => removeAll(id)}>Remove From Cart</Button>
                </div>
            : null }
        </div>

    </div>
    
  )
}


