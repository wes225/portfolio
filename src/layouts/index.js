import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'

import styled from 'react-emotion'


const Bod = styled('div')`
display:flex;
flex-direction:column;
height:100vh;

`

const Layout = ({ children, data }) => (
  <Bod>
    <script src={"https://cdn.polyfill.io/v2/polyfill.min.js"}></script>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
        flex: '1 0 auto'
      }}
    >
      {children()}
    </div>
    <Footer/>
  </Bod>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
