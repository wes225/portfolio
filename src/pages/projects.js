import React from 'react'
import Link from 'gatsby-link'
import Project from '../components/Project'
const Projects = ({data}) => (
  <div>
    <h2>These are the projects I worked on.</h2>
    <h3>Sorted by newest</h3>
    <div>{data.dataJson.projects.map((data,index) =>(<Project key={index} {...data}></Project>))}</div>
    
  </div>
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