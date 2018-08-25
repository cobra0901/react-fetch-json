import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './hello'
import './index.css';

class App extends React.Component {
  render() {
    return(
      <div className="container-fluid">
        <Hello/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
