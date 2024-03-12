import React, { useState } from 'react'
import {createContext, ReactNode, useContext} from 'react'
import ShoppingCart from '../Components/ShoppingCart'
import { useLocalStorage } from '../Hooks/useLocalStorage'

type ShoppingCartProviderProps = {
  children: ReactNode
}

type CartItem = {
  id: number,
  quantity: number,
}

type ShoppingCartContext = {
  openCart: () => void,
  closeCart: () => void,
  getItemQuantity: (id:number) => number,
  addNumber: (id:number) => void,
  subtractNumber: (id:number) => void,
  removeAll: (id:number) => void,
  cartQuantity: number,
  cartItems: CartItem[],
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)


export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}


export function ShoppingCartProvider( {children} : ShoppingCartProviderProps){
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("Shopping-Cart",[])

  const cartQuantity = cartItems.reduce(
      (quantity, item) => item.quantity + quantity, 
      0
    )

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  function getItemQuantity(id: number) {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }
  function addNumber(id:number){
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }]
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }
  function subtractNumber(id:number){
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id)
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }
  function removeAll(id:number){
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  }



  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        addNumber,
        subtractNumber,
        removeAll,
        cartItems,
        cartQuantity,
        openCart,
        closeCart
      }}
    >
      {children}
      <ShoppingCart isOpen = {isOpen} />
    </ShoppingCartContext.Provider>
  )
}
