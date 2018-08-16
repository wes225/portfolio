import React from 'react'

const ContactLink = ({...props}) => { 
  return (
    <a href={props.link} target="_blank">
      <h2>{props.name}</h2>
      
      </a>
    
  )
}
export default ContactLink;