import React from 'react'
import PageTransition from 'gatsby-plugin-page-transitions';
import Layout from '../components/layout';

const NotFoundPage = () => (
  <PageTransition>
    <Layout>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  </PageTransition>
)

export default NotFoundPage
