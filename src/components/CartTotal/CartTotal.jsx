import React from 'react'
import { useState, useEffect } from 'react'
import StyledCartTotal from './StyledCartTotal'

const CartTotal = ({ setProductToCart, productToCart }) => {

  const [priceTotal, setPriceTotal] = useState(0)

  useEffect(() => {


    const priceTotalNow = productToCart.map(price => Number(price.price))

    const addPrice = priceTotalNow.reduce((count, price) => count + price, 0)

    setPriceTotal(addPrice)



  }, [productToCart])

  return (
    <StyledCartTotal>
      <div className='containerTotalPrice'>
        <p className='paragTotalPrice'>Total</p>
        <p className='priceTotal'>{`R$ ${priceTotal.toFixed(2)}`}</p>
      </div>
      <button onClick={() => setProductToCart([])}>Remover Todos</button>
    </StyledCartTotal>
  )
}

export default CartTotal