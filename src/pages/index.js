import React from 'react'
import Link from 'gatsby-link'
import PageTransition from 'gatsby-plugin-page-transitions';


const IndexPage = () => (
  <PageTransition>
    <h1>Hi, I'm Ouissem</h1>
    <p>I like coding web things.</p>
    <p>Especially in Javascript. But mostly front-end at the moment</p>
    <br/>
    <del>{"Try to find some of the interactions on the page :)"} </del>
    <p>I haven't actually implemented them yet. Not much CSS either actually. But it's getting there!</p>

   
  </PageTransition>
)

export default IndexPage
