import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {pageFaq} from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero title={pageFaq.title} image={pageFaq.image} />
    <p>{pageFaq.content}</p>
  </Container>
);

export default Info;