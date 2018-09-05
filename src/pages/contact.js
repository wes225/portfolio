import React from 'react'
import Link from 'gatsby-link'
import ContactLink from '../components/ContactLink'
import PageTransition from 'gatsby-plugin-page-transitions';
import styled from 'react-emotion'

const ContactBox = styled('div')`
&{
  display:flex;
  flex-flow:row;
  flex-wrap:wrap;
  justify-content:center;
}

`

const Contact = ({data}) => (
  <PageTransition>
    <ContactBox>{data
        .dataJson
        .contacts
        .map((data, index) => (
          <ContactLink key={index} {...data}></ContactLink>
        ))}</ContactBox>

  </PageTransition>

)

export default Contact

export const ContactQuery = graphql `
  query ContactQuery {
    dataJson{
      contacts{
        name
        link
        svg
      }
    }
  }
`;