import React from 'react'
import Link from 'gatsby-link'

const Header = ({siteTitle}) => (
  <div style={{
    
    marginBottom: '1.45rem'
  }}>
    <div
      style={{
      margin: '0 auto',
      maxWidth: 960,
      padding: '1.45rem 1.0875rem'
    }}>
      <h1 style={{
        margin: 0
      }}>
        <Link
          to="/"
          style={{
          textDecoration: 'none',
          paddingRight: 20
        }}>Home</Link>
        <Link
          to="/about"
          style={{
          textDecoration: 'none',
          paddingRight: 20
        }}>About</Link>
        <Link
          to="/projects"
          style={{
          textDecoration: 'none',
          paddingRight: 20
        }}>Projects</Link>
        <Link
          to="/contact"
          style={{
          textDecoration: 'none',
          paddingRight: 20
        }}>Contact</Link>
      </h1>
    </div>

  </div>
)

export default Header
