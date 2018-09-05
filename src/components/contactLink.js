import React from 'react'
import styled from 'react-emotion'

const Link = styled('a')`

&{
min-width:100px;
min-height:100px;
width:150px;
height:150px;
 
 svg 
 { width:100%;
   height:100%;
  
 path{
   fill:rgb(44, 41, 42);
 }
  }

  :hover{
    transition: all 0.3s 0.2s ease;
    box-shadow:10px 10px 8px rgba(0, 0, 0, 0.8);
    background-color:rgba(0, 0, 0, 0.9);
    svg{
    transition: all 0.3s 0.2s ease;
    path{
    transition: all 0.3s 0.2s ease;
    fill:rgb(247, 247, 247);
    }
    }
  }
}
`

const ContactLink = ({
  ...props
}) => {
  return (
    <Link href={props.link} target="_blank">

      <svg viewBox="0 0 500 500">
        <path d={props.svg}></path>
      </svg>
    </Link>

  )
}
export default ContactLink;