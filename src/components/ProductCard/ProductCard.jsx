import React from 'react'
import StyledProductCard from './StyledProductCard'

function ProductCard({product, addProductToCart}) {
  return (
    <StyledProductCard StyledProductCard>
        <div className='productImg'>
          <img src={product.img} alt="Foto do Produto" />
        </div>
        <div className='productInformation'>
          <h3>{product.name}</h3>
          <p className='category'>{product.category}</p>
          <p className='price'>{`R$ ${product.price.toFixed(2)}`}</p>
          <button onClick={() => addProductToCart(product)}>Adicionar</button>
        </div>
    </StyledProductCard>
  )
}

export default ProductCard