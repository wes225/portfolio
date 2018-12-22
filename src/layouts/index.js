import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'

import styled, {injectGlobal} from 'react-emotion'

injectGlobal `
  body {
    background: blue;
    display:grid;
    justify-items:stretch;
  }
`

const Body = styled('div')`
display:grid;
height:100%;
width:100%;
background-color:orange;
align-items:center;
justify-items:center;

`
const Div = styled('div')`

justify-self:stretch;
align-self:stretch;
background-color:green;
grid-row:2/4;
`

const Layout = ({children, data}) => (
  <Body>
    <script src={"https://cdn.polyfill.io/v2/polyfill.min.js"}></script>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
      {
        name: 'description',
        content: 'Sample'
      }, {
        name: 'keywords',
        content: 'sample, something'
      }
    ]}/>
    <Header siteTitle={data.site.siteMetadata.title}/>
    <Div>

      {children()}

    </Div>
    <Footer/>

  </Body>
)

Layout.propTypes = {
  children: PropTypes.func
}

export default Layout

export const query = graphql `
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
