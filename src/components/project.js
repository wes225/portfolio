import React from 'react'

const Project = ({...props}) => {
  return console.log(props)||(
    <a href={props.URL} target="_blank">
      <h2>{props.Name}</h2>
      
      </a>
    
  )
}


export default Project;