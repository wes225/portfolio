import React from 'react'

export default ContactLink = (props) => { 
  return (
    <a href={props.link} target="_blank">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      </a>
    
  )
}
