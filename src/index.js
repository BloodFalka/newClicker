import React from 'react';
import ReactDOM from 'react-dom';

import Favicon from 'react-favicon';
import favicon from './img/favicon.ico'

import fixVh from './modules/fixVh.js'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/app';

fixVh();

ReactDOM.render(
  <React.StrictMode>
    <Favicon url={favicon}/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



// import React from 'react';
// import ReactDOM from 'react-dom';
// import {createStore} from 'redux';
// import {Provider} from 'react-redux';
// import reducer from './store/reducers/reducer';
// import App from './componentsRedux/app';

// const store = createStore(reducer);

// ReactDOM.render(
//   <Provider store={store}>
//     <App/>
//   </Provider>
//   , document.querySelector('#root'));
