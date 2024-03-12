import { Offcanvas, Stack, Button } from 'react-bootstrap'
import React from 'react'
import { useShoppingCart } from '../Context/ShoppingCartContext'
import { FormatCurrency } from '../Utilities/FormatCurrenty'
import CartItem from './CartItem'
import FeaturedCartItem from './FeaturedCartItem'
import storeItems from "../Data/Data.json"
import featuredItems from "../Data/Features.json"
import { Link } from 'react-router-dom'

type ShoppingCartProps = {
  isOpen: boolean
}

export default function ShoppingCart({isOpen}:ShoppingCartProps) {

  const {closeCart, cartItems} = useShoppingCart()

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement='end'>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
      <Stack gap={3}>

          {cartItems.map(item => (
            <FeaturedCartItem key={item.id} {...item} />
          ))}

          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}

<div className="ms-auto fw-bold fs-5">
            Total{" "}
            {FormatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find(i => i.id === cartItem.id)

                const featuredItem = featuredItems.find(i => i.id == cartItem.id)

                return total + ((item?.smallprice || 0) * cartItem.quantity) + ((featuredItem?.smallprice || 0) * cartItem.quantity)
              }, 0)
            )}
          </div>


        </Stack>
        <Button href='/cart'>
          Go to Cart
        </Button>

      </Offcanvas.Body>
  </Offcanvas>
    )
}
