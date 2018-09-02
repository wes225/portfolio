import React from 'react'
import Link from 'gatsby-link'
import ContactLink from '../components/ContactLink'
import PageTransition from 'gatsby-plugin-page-transitions';


const Contact = ({data}) => (
  <PageTransition>{data.dataJson.contacts.map((data,index) =>(<ContactLink key={index} {...data}></ContactLink>))}</PageTransition>
    

  
)

export default Contact



export const ContactQuery = graphql `
  query ContactQuery {
    dataJson{
      contacts{
        name
        link
      }
    }
  }
`;