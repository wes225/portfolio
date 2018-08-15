import React from 'react'
import Link from 'gatsby-link'
import Project from '../components/project'
const Projects = ({data}) => (
  <div>
    <h2>These are the projects I worked on.</h2>
    <h3>Sorted by newest</h3>
    <div>{data.dataJson.projects.map(data =>(<Project {...data}></Project>))}</div>
    
  </div>
)

export default Projects

export const IndexQuery = graphql `
  query IndexQuery {
    dataJson {
      projects {
        Name
        URL
      }
    }
  }
`;