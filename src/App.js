import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
// import Login from './Login';
import Register from './Register';
// import List from './List';
import Page404 from './Page404';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Register}/>
          <Route path="/register" component={Register}/>
          {/* <Route path="/list" component={List}/> */}
          <Route component={Page404} />
        </Switch>
      </BrowserRouter>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
