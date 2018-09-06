import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'

const Label = styled('label')`

& {
  padding: 10px 25px;
  background: transparent;
  outline: none !important;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  width:120px;
  line-height: 50px;
  padding: 0;
  border: none;
  
}
& span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  text-align:center;
  color: rgb(44, 41, 42);
  font-size: 24px;
}
&::before, &::after {
  position: absolute;
  content: "";
  height: 0%;
  width: 2px;
  background: #000;
}
&::before {
  right: 0;
  top: 0;
  transition: all 0.1s ease;
}
&::after {
  left: 0;
  bottom: 0;
  transition: all 0.1s 0.2s ease;
}
&:hover:before {
  transition: all 0.1s 0.2s ease;
  height: 100%;
}
&:hover:after {
  transition: all 0.1s ease;
  height: 100%;
}
& span:before,
& span:after {
  position: absolute;
  content: "";
  background: #000;
}
& span:before {
  left: 0;
  top: 0;
  width: 0%;
  height: 2px;
  transition: all 0.1s 0.1s ease;
}
& span:after {
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
}
& span:hover:before {
  width: 100%;
}

`
const Navbar = styled('div')`
padding:2% 0% 5% 0%;
margin-bottom:10px;
width:70%;
display:flex;
flex-flow:row;
flex-wrap: wrap;
justify-content:space-between;
align-self: center;



`

const Header = ({siteTitle}) => (
  
    <Navbar>

      <Link to="/" style={{
        textDecoration: 'none',
        flex: '0 1 100px'
      }}>
        <Label>
          <span>Home</span>
        </Label>
      </Link>
      <Link
        to="/about"
        style={{
        textDecoration: 'none',
        flex: '0 1 100px'
      }}>
        <Label>
          <span>About</span>
        </Label>
      </Link>
      <Link
        to="/projects"
        style={{
        textDecoration: 'none',
        flex: '0 1 100px'
      }}>
        <Label>
          <span>Projects</span>
        </Label>
      </Link>
      <Link
        to="/contact"
        style={{
        textDecoration: 'none',
        flex: '0 1 100px'
      }}>
        <Label>
          <span>Contact</span>
        </Label>
      </Link>

    </Navbar>

  
)

export default Header
