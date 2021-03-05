import React from 'react';
import ReactDOM from 'react-dom';
import App from './COMPONENTS/App';
import store from "./REDUX/store.js";
import { Provider } from 'react-redux';


ReactDOM.render(
  
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>,
   
  document.getElementById('root')
);
