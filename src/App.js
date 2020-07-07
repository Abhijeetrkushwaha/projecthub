import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar'
import DashBoard from './components/dashboard/DashBoard';
import ProjectDetails from './components/project/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignOut'
import CreateProject from './components/project/CreateProject'
import './App.css'


class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/' component={DashBoard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
// abhijeet@gmail.com
// abhijeet12345;
