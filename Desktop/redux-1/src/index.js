import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {store,persistor}  from './store';
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> {/* 스토어를 app 전달  */}
  <PersistGate persistor={persistor}>
    <App />
  </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
