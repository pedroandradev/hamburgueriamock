import { useEffect, useState } from 'react'
import GlobalStyle from './style/global'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'
import ProductList from './components/ProductList/ProductList'
import {StyledMain} from './style/StyledMain'

function App() {
  const [productList, setProductList] = useState([])
  const [productToCart, setProductToCart] = useState([])
  const [searchCategory, setSearchCategory] = useState('')
  const [inputValue, setInputValue] = useState('')

  const fetchProductList = () => {
    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
    .then((response) => response.json())
    .then((response) => setProductList(response))
    .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchProductList()
  }, [])

  const addProductToCart = (product) => {
    const findDuplicateProduct = productToCart.find(key => key.id === product.id)
    if(findDuplicateProduct){
      alert('Esse produto já foi adicionado')
    }else{
      setProductToCart([...productToCart, product])
    }
  }

  const removeProductToCart = (id) => {
    const productToRemove = productToCart.filter((product) => product.id !== id)
    setProductToCart(productToRemove)
  }
  
  const searchHandle = (event) => {
    event.preventDefault()

    const searchProductsByCategory = productList.filter((product) => product.category === inputValue)
  

    setSearchCategory(inputValue)
    setProductList(searchProductsByCategory)
  }


  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  

  return (
    <StyledMain>
      <div>
        <GlobalStyle/>
        <Header inputValue={inputValue} handleChange={handleChange} searchHandle={searchHandle}/>
        <div className='divContainerProductCart'>
          <ProductList searchCategory={searchCategory} setSearchCategory={setSearchCategory} productList={productList} addProductToCart={addProductToCart} fetchProductList={fetchProductList}/>
          <Cart productToCart={productToCart} setProductToCart={setProductToCart} removeProductToCart={removeProductToCart}/>
        </div>
      </div>
    </StyledMain>
  )
}

export default App
