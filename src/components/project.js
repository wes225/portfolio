import React from 'react'
import styled from 'react-emotion'

const Box = styled('a')`
& {
  transition: all 0.3s 0.2s ease;
  align-self: flex-start;
  margin:10px;
  text-decoration:none;
  width:280px;
  height:300px;
  padding:15px 10px 10px 10px;
  box-shadow:0 0 5px rgba(0, 0, 0, 0.5);

  :hover{
    transition: all 0.3s 0.2s ease;
    box-shadow:14px 14px 8px rgba(0, 0, 0, 0.8);
    background-color:rgba(0, 0, 0, 0.9);
    h2{
    transition: all 0.3s 0.2s ease;
    color:rgb(247, 247, 247);
    }
    p{
    transition: all 0.3s 0.2s ease;
    color:rgb(247, 247, 247);}
    }
  }


  h2{
    transition: all 0.3s 0.2s ease;
    font-size: "18px";
    line-height: 1.45;
    color:rgb(44, 42, 42);
  }
  p{
    transition: all 0.3s 0.2s ease;
    font-size: "18px";
    line-height: 1.45;
    color:rgb(44, 42, 42);}
  }
`

const Project = ({
  ...props
}) => {
  return (
    
      <Box href={props.liveURL} target="_blank">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </Box>
    
  )
}

export default Project;