import React from 'react'
import CartProduct from '../CartProduct/CartProduct'
import CartTotal from '../CartTotal/CartTotal'
import StyledCart from './StyledCart'

function Cart({productToCart, removeProductToCart, setProductToCart}) {

  return (
    <StyledCart>
      <div className='containerDivShopCart'>
        <h1>Carrinho de Compras</h1>
      </div>
      <ul className='cartProductContainer'>
        {productToCart.length > 0 ? ( 
          productToCart.map((product) => (
          <CartProduct key={product.id} product={product} removeProductToCart={removeProductToCart} />
        ))
        ) : (
          <li className='emptyList'>
              <div>
                <h3>Sua sacola está vazia</h3>
                <p>Adicione itens</p>
              </div>
          </li>
        )}
      </ul>
      <div>
        {productToCart.length > 0 ? (
          <CartTotal productToCart={productToCart} setProductToCart={setProductToCart}/>
        ):(
          <></>
        )}
      </div>
    </StyledCart>
  )
}

export default Cart