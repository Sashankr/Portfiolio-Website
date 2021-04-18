import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from "../components/Layout";
import Container from "../components/Container";
import Hero from "../components/Hero"
import {heroContent} from "../utils/mock"
import PropTypes from "prop-types"

const IndexPage = ({heroContent}) => {
  return (
    <Layout pageName="home">
      <Helmet>
        <title>Sashank Rampalli</title>
      </Helmet>
      <Container>
        <Hero content={heroContent}  />
      </Container>
    </Layout>
  );
};

IndexPage.defaultProps = {
  heroContent : heroContent,
}

IndexPage.propTypes = {
  heroContent : PropTypes.object,
}

export default IndexPage;
