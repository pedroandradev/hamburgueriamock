import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import StyledProductList from './StyledProductList'

const ProductList = ({productList, addProductToCart, searchCategory, setSearchCategory , fetchProductList}) => {
  return (
    <StyledProductList>
      {searchCategory.length > 0 && 
        <div className='searchContainer'>
          <p className='paragSearchResult'>Resultado para: <span>{searchCategory}</span></p>
          <button onClick={() => {fetchProductList(), setSearchCategory('')} }>Limpar Busca</button>
        </div>
        }
      <ul>
        {productList.map((product) => (
          <ProductCard key={product.id} addProductToCart={addProductToCart} product={product} />
        ))}
      </ul>
    </StyledProductList>
  )
}

export default ProductList