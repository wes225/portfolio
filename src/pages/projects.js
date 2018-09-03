import React from 'react'
import Link from 'gatsby-link'
import Project from '../components/Project'
import PageTransition from 'gatsby-plugin-page-transitions';
import styled from 'react-emotion'

const ProjectWrapper = styled('div')`
& {
  display:flex;
 flex-flow:row;
flex-wrap: wrap;
justify-content:space-between;
align-items:flex-start;
padding:5px;
margin:5px;
  }
`

const Projects = ({data}) => (
  <PageTransition>
    <h2>These are the projects I worked on.</h2>
    <h3>Sorted by newest</h3>
    <ProjectWrapper>{data.dataJson.projects.map((data,index) =>(<Project key={index} {...data}></Project>))}</ProjectWrapper>
    
  </PageTransition>
)

export default Projects

export const ProjectQuery = graphql `
  query ProjectQuery {
    dataJson{
      projects {
        name
        description
        tech
        liveURL
        gitURL
      }
    }
  }
`;