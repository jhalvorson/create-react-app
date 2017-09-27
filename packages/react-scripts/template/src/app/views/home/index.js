import React, { Component } from 'react';
import Container from '../../layout/container';
import Hero from '../../components/hero';
import Title from '../../components/title';
import Text from '../../components/text';
import Button from '../../components/button';

export default class Home extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  // eslint-disable-next-line
  handleClick() {
    // eslint-disable-next-line
    alert('Such wow. So much React. Much greatness.');
  }

  render() {
    return (
      <Container>
        <Hero>
          <Title>Welcome to Signal's version of create-react-app</Title>
        </Hero>
        <Text>Use signal-react-scripts to boot up a fresh project, whether that's internal or for a client.</Text>
        <Text>In here you'll find our linting, testing configs and project layout as per the standards.</Text>
        <Button onClick={this.handleClick}>Press me!</Button>
      </Container>
    );
  }
}