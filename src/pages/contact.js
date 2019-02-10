import React from 'react'
import Link from 'gatsby-link'
import ContactLink from '../components/ContactLink'
import PageTransition from 'gatsby-plugin-page-transitions';
import styled from '@emotion/styled'
import Layout from '../components/layout';


const ContactBox = styled('div')`
&{
  display:flex;
  flex-flow:row;
  flex-wrap:wrap;
  align-content:center;
  justify-content:center;
}

`

const Contact = ({data}) => (
  <PageTransition>
    <Layout>
    <ContactBox>{data
        .dataJson
        .contacts
        .map((data, index) => (
          <ContactLink key={index} {...data}></ContactLink>
        ))}</ContactBox>
</Layout>
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