import React from "react"
import StyleInputSearch from "./StyledInputSearch"

const InputSearch = ({handleChange, searchHandle, inputValue}) => {


  return (
    <StyleInputSearch onSubmit={searchHandle}>
      <input placeholder="Digite sua pesquisa..." type="text" value={inputValue} onChange={handleChange} />
      <button type='submit'>Pesquisar</button>
    </StyleInputSearch>
  )
}

export default InputSearch