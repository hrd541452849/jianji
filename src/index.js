import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
<<<<<<< HEAD
import Boundary from './pages/common/boundary/Boundary';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Boundary>
        <Router>
            <App />
        </Router>
=======
import store from './store';
import { Provider } from 'react-redux';
import Boundary from './pages/common/boundary/Boundary';

import * as serviceWorker from './serviceWorker';



ReactDOM.render(
    <Boundary>
        <Provider store = {store}>    
            <Router>
                <App />
            </Router>
        </Provider>
>>>>>>> 5c3b711f0f5a0c888b22b75a3b790f2dce52b968
    </Boundary>
, 
document.getElementById('root')
);
<<<<<<< HEAD
=======

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
>>>>>>> 5c3b711f0f5a0c888b22b75a3b790f2dce52b968
serviceWorker.unregister();