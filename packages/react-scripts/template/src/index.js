import React from 'react';
import ReactDOM from 'react-dom';
import './app/vendor/styles.scss';
import Routes from './app/routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routes />, document.getElementById('app'));
registerServiceWorker();