import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import LangRouter from './LangRouter';


if (document.getElementById('app')) {
    ReactDOM.render(
        <Router>
            <LangRouter />
        </Router>,
        document.getElementById('app')
    );
    // ReactDOM.render(<Example />, document.getElementById('app'));
}

