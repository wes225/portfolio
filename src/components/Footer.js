import React from 'react'
import styled from 'react-emotion'


const FancyFooter = styled('footer')`

&{
    width:70%;
    border-top:2px solid black;
    align-self:center;
    
  
    
}
`
const Footer = () => {
  return (
    <FancyFooter>
      <p>© 2018 Ouissem.</p>
    </FancyFooter>
  )
}

export default Footer;