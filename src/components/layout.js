import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {graphql, StaticQuery} from 'gatsby'
import Header from './Header'
import Footer from './Footer'

import styled from '@emotion/styled';

// injectGlobal `
//   body {
//     background: blue;
//     display:grid;
//     justify-items:stretch;
//   }
// `

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

const Layout = ({children}) => (

    <StaticQuery query={graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`} render={data =>(

  <Body>
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

      {children}

    </Div>
    <Footer/>
     </Body>
)}>

    
</StaticQuery>
 
)


export default Layout


