import React from 'react'
import { useShoppingCart } from '../Context/ShoppingCartContext'
import storeItems from "../Data/Data.json"
import { Stack, Button } from 'react-bootstrap'
import { FormatCurrency } from '../Utilities/FormatCurrenty'

type CartItemProps = {
    id: number
    quantity: number
}

export default function CartItem({id, quantity}:CartItemProps) {

    const {removeAll} = useShoppingCart()
    const item = storeItems.find(i => i.id == id)
    if (item == null) return null


  return (
    <Stack direction='horizontal' gap={4} className='d-flex align-items-center'>
        <img src={item.coverImg}
            style={{width: "125px" , height: "75px" , objectFit: "cover"}} 
        />
        <div className="me-auto">
        <div>
          {item.title}{" "}
          {quantity > 1 && (
            <span  style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div  style={{ fontSize: ".75rem" }}>
          {FormatCurrency(item.smallprice)}
        </div>
      </div>
      <div> {FormatCurrency(item.smallprice * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeAll(item.id)}
      >
        &times;
      </Button>
    </Stack>
  )
}
