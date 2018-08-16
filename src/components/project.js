import React from 'react'

const Project = ({...props}) => {
  return (
    <a href={props.liveURL} target="_blank">
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      </a>
    
  )
}


export default Project;