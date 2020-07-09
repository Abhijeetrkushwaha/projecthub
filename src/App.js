import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar'
import DashBoard from './components/dashboard/DashBoard';
import ProjectDetails from './components/project/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignOut'
import CreateProject from './components/project/CreateProject'
import './App.css';
import { Link } from "react-router-dom";


class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Link to="/projecthub" className="container">
            <h4 className="center black-text">ProjectHub</h4>
          </Link>
          <Switch>
            <Route exact path="/projecthub" component={DashBoard} />
            <Route path="/projecthub/project/:id" component={ProjectDetails} />
            <Route path="/projecthub/signin" component={SignIn} />
            <Route path="/projecthub/signup" component={SignUp} />
            <Route path="/projecthub/create" component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
// abhijeet@gmail.com
// abhijeet12345;
