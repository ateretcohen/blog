import React, { Component } from "react";
import './projects-style.scss'
import AllProjects from "./AllProjects.jsx";

class Projects extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
          projectsList:this.props.projectsList,
          allProjects:true,
          openProject:{Id:0}
     }
 }

 openProject=(Id)=>{
     this.props.openProject(Id)
     this.props.history.push("/pComputer")
 }
 
  render() {
    return (
      <div className="projects">
         {
             this.state.projectsList.map((project,i)=>{
                 return <AllProjects key={i} openProject={this.openProject} Id={project.Id} Name={project.Name} Img={project.Img} Tec={project.Tec} Link={project.Link} lan={this.props.lan}/>
             })
         }  
         <button className="viewCode" onClick={()=>window.open("https://github.com/ateretcohen/")}>{this.props.lan==="hebrow"?"כל הפרויקטים":"view all"}</button>      
      </div>
    );
  }
}

export default Projects;
