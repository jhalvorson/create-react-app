// TODO:
// Import react-router, have this pre-bundled

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Body from '../layout/body';
import Home from '../views/home';
import Footer from '../components/footer';
import Text from '../components/text';

export default function Routes() {
  return (
    <Router>
      <Body>
        <div>
          <Route exact path="/" component={Home} />
        </div>
        <Footer>
          <Text>So, how'd you like it? Simple, eh?</Text>
        </Footer>
      </Body>
    </Router>
  );
}