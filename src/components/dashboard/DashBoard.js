import React, { Component } from 'react';
import Notifications from './Notification'
import ProjectList from '../project/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class DashBoard extends Component{
    render(){
        // console.log(this.props.projects);
        const { projects, auth, notifications } = this.props;
        // console.log(projects);
        
        if(!auth.uid) return <Redirect to="/projecthub/signin" />;
        
         return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6"><ProjectList projects={projects}/></div>
                    <div className="col s12 m5 offset-m1"><Notifications notifications={notifications} /></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    
    return {
        projects: state.firestore.ordered.project,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
        // projects: state.firestore.ordered.project
    }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "project", orderBy: ["createAt", "desc"] },
    { collection: "notifications", limit: 3, orderBy: ["time", "desc"] },
  ])
)(DashBoard);