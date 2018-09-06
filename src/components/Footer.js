import React from 'react'
import styled from 'react-emotion'


const FancyFooter = styled('footer')`

&{
    width:70%;
    border-top:2px solid black;
    align-self:center;
    justify-self:flex-end;
 
    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
     /* IE10+ CSS styles go here */
     position: absolute;
     margin-top:10%;
     bottom:20px;
     left:15%;

}
  
    
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