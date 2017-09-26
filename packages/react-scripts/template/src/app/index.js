import React from 'react';
import ReactDOM from 'react-dom';
import '/vendor/index.scss';
import Routes from '/routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routes />, document.getElementById('app'));
registerServiceWorker();