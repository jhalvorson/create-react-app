// TODO:
// Import react-router, have this pre-bundled

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../views/home';

export default function Routes() {
  return (
    <Router>
      <div>
        <div>
            {/* Navigation */}
        </div>
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}