import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar'
import DashBoard from './components/dashboard/DashBoard';
import ProjectDetails from './components/project/ProjectDetails'


class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/' component={DashBoard} />
            <Route path='/projects/:id' component={ProjectDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
