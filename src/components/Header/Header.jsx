import React from 'react'
import Logo from '../Logo/Logo'
import InputSearch from '../InputSearch/InputSearch'
import StyledHeader from './StyledHeader'

function Header({handleChange, searchHandle, inputValue}) {

  return (
    <StyledHeader>
      <Logo/>
      <InputSearch inputValue={inputValue} handleChange={handleChange} searchHandle={searchHandle} />
    </StyledHeader>
  )
}

export default Header