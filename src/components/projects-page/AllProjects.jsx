import React, { Component } from "react";
import './projects-style.scss'


class AllProjects extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
          
     }
 }
 
  render() {
    return (
      <div className="projects">
            <div className="project">
                <p>{this.props.Name}</p>
                <img className="project-img" src={require("./imgs/"+this.props.Img)} alt="notes project"/>
            </div>
      </div>
    );
  }
}

export default AllProjects;
