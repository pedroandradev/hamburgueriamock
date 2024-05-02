import React from 'react'
import StyledCartProduct from './StyledCartProduct'

const CartProduct = ({product, removeProductToCart}) => {
  return (
    <StyledCartProduct>
        <div className='productImgCart'>
          <img src={product.img} alt="Imagem do Produto" />
        </div>
        <div className='prodcutInformationCart'>
          <h4>{product.name}</h4>
          <p>{product.category}</p>
        </div>
        <div className='productButtonRemove'>
          <button onClick={() => removeProductToCart(product.id)}>Remover</button>
        </div>
    </StyledCartProduct>
  )
}

export default CartProduct