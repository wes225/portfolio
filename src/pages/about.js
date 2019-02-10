import React from 'react'
import Link from 'gatsby-link'
import PageTransition from 'gatsby-plugin-page-transitions';
import styled from '@emotion/styled';
import Layout from '../components/layout';

const Div = styled('div')`

&{
    margin-right:5%;
    margin-left:5%;
    width:100%;
     
    
}
`

const About = () => (
  <PageTransition>
    <Layout>
    <Div>
    <h1>About</h1>
    <p>I currently work as web integrator for Desjardins. Before that, I worked a
      lot in QA.</p>
      <p>
      I graduated from a college degree in Mobile development, then taught myself
      front end development.
      </p>
      <p>
      My favorite stack at the moment is React, and I'm slowly learning about Node and
      GraphQL. I have worked with Webpack, Firebase, ReactRouter and now Gatsby (this
      portfolio is built on it!)
      </p><p>
      When I'm not working I'm trying to find a new cool restaurent, or looking at
      crazy expensive coffee machines. Sometimes taking walks or at the Gym.
      </p><p>
      Oh, I'm also creating a boardgame on the side.
      </p>
      <p>
      That should cover it. Or some of it. If you need help with your projects, get in
      touch {< Link
      to = "/contact"> here </Link>}

    </p>
</Div>
</Layout>
  </PageTransition>
)

export default About
