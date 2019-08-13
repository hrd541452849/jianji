import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import Boundary from './pages/common/boundary/Boundary';

ReactDOM.render(
    <Boundary>
        <Router>
            <App />
        </Router>
    </Boundary>
, 
document.getElementById('root')
);
