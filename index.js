import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import Routes from './Routes';
import { store } from "./src/store";
import { Provider } from "react-redux";


ReactDOM.render( <Provider store={ store } >
     <Routes />
   </Provider>,
    document.getElementById('app'));