import React from 'react'

const ProjectSummary = ({ project }) => {
    return (
      <div className="card z-depth-2 project-summary center">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{project.title}</span>
          <p>Posted by Abhijeet</p>
          <p className="grey-text">18th June, 8am</p>
        </div>
      </div>
    );
}

export default ProjectSummary;
