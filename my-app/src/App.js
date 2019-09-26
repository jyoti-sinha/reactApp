import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Client from './components/client'
import Admin from './components/admin'

const notFound = () => <h2>404, page not found :(</h2>




function App() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Redirect exact from='/' to='/home'/>
            <Route path="/home" component={Client} />
            <Route path="/admin" component={Admin} />            
            <Route component={notFound} />
          </Switch>
        </Router>
      </div>
    );
}

export default App;
