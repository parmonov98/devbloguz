import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';


if (document.getElementById('app')) {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('app')
    );
    // ReactDOM.render(<Example />, document.getElementById('app'));
}

