import React from 'react';
import Container from '../Container/Container';
import {pageInfo} from '../../data/dataStore';
import Hero from '../Hero/Hero';

const Info = () => (
  <Container>
    <Hero title={pageInfo.title} image={pageInfo.image} />
    <p>{pageInfo.content}</p>
  </Container>
);

export default Info;