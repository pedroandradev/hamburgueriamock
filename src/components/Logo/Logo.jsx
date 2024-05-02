import React from 'react'
import StyledLogo from './StyledLogo'
import LogoImg from '../../assets/logo.svg'

const Logo = () => {
  return (
    <StyledLogo>
      <img src={LogoImg} alt="logo" />
    </StyledLogo>
  )
}

export default Logo