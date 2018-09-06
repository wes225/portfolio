import React from 'react'

import PageTransition from 'gatsby-plugin-page-transitions';
import styled from 'react-emotion'


const Div = styled('div')`

&{
    margin-right:5%;
    margin-left:5%;
    width:100%; 
    
}
`
const IndexPage = () => (
  <PageTransition>
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
  </PageTransition>
)

export default IndexPage
