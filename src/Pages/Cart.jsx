import { Stack } from 'react-bootstrap'
import { useShoppingCart } from '../Context/ShoppingCartContext'
import { FormatCurrency } from '../Utilities/FormatCurrenty'
import storeItems from "../Data/Data.json"
import featuredItems from "../Data/Features.json"
import CartItem from '../Components/CartItem'
import FeaturedCartItem from '../Components/FeaturedCartItem'


export default function Cart() {

  const {cartItems} = useShoppingCart()

  return (
    <div>
        <div className="headline">
            <h1><b>Cart</b></h1>
        </div>

        <div className="shopping-cart" >

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

        </div>

    </div>
  )
}
