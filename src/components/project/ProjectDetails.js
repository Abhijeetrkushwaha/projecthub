import React from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from "react-router-dom";

const ProjectDetails = (props) => {
    // const { projects } = props
    // const id = props.match.params.id;
    const { project, auth } = props
    // console.log(project);
    // const project = projects ? projects[id] : null;
    if (!auth.uid) return <Redirect to="/signin" />;
    if(project) {
      return (
        <div className="container section project-details">
          <div className="card z-depth-2">
            <div className="card-content">
              <span className="card-title">Project Title -{project.title}</span>
              <p>
                 {project.content}
              </p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
              <div className="">Posted By {project.authorFirstName} {project.authorLastName}</div>
              <div>18 of June</div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container center">
          <p>Loading project</p>
        </div>
      )
    }
}

const mapStateToProps = (state, ownProps) => {
    // console.log(ownProps.match.params.id);
    // console.log(state);
    
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.project;
    const project = projects ? projects[id] : null
    return {
         project: project,
         auth: state.firebase.auth
      //   projects: state.firestore.data.projects,
      // projects: state.firestore.data.project,
    };
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'project' }
    ])
)(ProjectDetails)
