import React from 'react'
import Layout from '../components/layout';

import PageTransition from 'gatsby-plugin-page-transitions';
import styled from '@emotion/styled'


const Div = styled('div')`

&{
    margin-right:5%;
    margin-left:5%;
    width:100%; 
    
}
`
const IndexPage = () => (
  <PageTransition>
    <Layout>
    <Div>
    <h1>Hi, I'm Ouissem</h1>
    <p>I like coding web things.</p>
    <p>Especially in Javascript. I am mostly doing front-end at the moment</p>
    <br/>
    <del>{"Try to find some of the interactions on the page :)"}
    </del>
    <p>I haven't actually implemented them yet. Not much CSS either actually. But
      it's getting there!</p>
</Div>
</Layout>
  </PageTransition>
)

export default IndexPage
