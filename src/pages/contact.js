import React from 'react'
import Link from 'gatsby-link'
import ContactLink from '../components/ContactLink'
const Contact = ({data}) => (
  <div>{data.dataJson.contacts.map((data,index) =>(<ContactLink key={index} {...data}></ContactLink>))}</div>
    

  
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