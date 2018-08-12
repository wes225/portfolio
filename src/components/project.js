import React from 'react'

export default Project = (props) => {
  return (
    <a href={props.link} target="_blank">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      </a>
    
  )
}
