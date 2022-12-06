import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import ClientList from './ClientsList';


class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/clients' exact={true} component={ClientList}/>
            
          </Switch>
        </Router>
    )
  }
}

export default  App;