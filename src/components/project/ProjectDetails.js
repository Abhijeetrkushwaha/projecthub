import React from 'react'

const ProjectDetails = (props) => {
    console.log(props);
    
    return (
        <div className="container section project-details">
            <div className="card z-depth-2">
                <div className="card-content">
                    <span className="card-title">Project Title - {props.match.params.id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi totam voluptate animi optio ut sit consectetur maiores est qui quidem recusandae iusto dolores iste eligendi deleniti nesciunt nisi, tempore fuga!</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div className="">Posted By Abhijeet</div>
                    <div>18 of June</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
