import React from 'react'
import { useShoppingCart } from '../Context/ShoppingCartContext'
import featuredItems from "../Data/Features.json"
import { Button, Stack } from 'react-bootstrap'
import { FormatCurrency } from '../Utilities/FormatCurrenty'

type CartItemProps = {
    id: number
    quantity: number
}

export default function FeaturedCartItem({id, quantity}:CartItemProps) {

    const {removeAll} = useShoppingCart()
    const featuredItem = featuredItems.find(i => i.id == id)


    if (featuredItem == null) return null


    return (
      <Stack direction='horizontal' gap={4} className='d-flex align-items-center'>
          <img src={featuredItem.coverImg}
              style={{width: "125px" , height: "75px" , objectFit: "cover"}} 
          />
          <div className="me-auto">
          <div>
            {featuredItem.title}{" "}
            {quantity > 1 && (
              <span className="text-muted" style={{ fontSize: ".65rem" }}>
                x{quantity}
              </span>
            )}
          </div>
          <div className="text-muted" style={{ fontSize: ".75rem" }}>
            {FormatCurrency(featuredItem.smallprice)}
          </div>
        </div>
        <div> {FormatCurrency(featuredItem.smallprice * quantity)}</div>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => removeAll(featuredItem.id)}
        >
          &times;
        </Button>
      </Stack>
    )
  }
  