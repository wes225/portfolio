import React from 'react'

const style = {
  wrapper: {
    border: "1 px black`"
  },
  link: {
    textDecoration: "none"

  }

}

const Project = ({
  ...props
}) => {
  return (
    <div style={style.wrapper}>
      <a href={props.liveURL} target="_blank" style={style.link}>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </a>
    </div>
  )
}

export default Project;