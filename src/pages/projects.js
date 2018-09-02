import React from 'react'
import Link from 'gatsby-link'
import Project from '../components/Project'
import PageTransition from 'gatsby-plugin-page-transitions';


const Projects = ({data}) => (
  <PageTransition>
    <h2>These are the projects I worked on.</h2>
    <h3>Sorted by newest</h3>
    <div>{data.dataJson.projects.map((data,index) =>(<Project key={index} {...data}></Project>))}</div>
    
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