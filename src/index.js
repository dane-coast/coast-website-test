import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App2 from './App2';
import { Provider } from 'react-redux'
import store from './redux/createStore';


// import '/css/styles.css'



import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider store={store}>
      <App2 />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
