import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import getProjects from "../actions/getProjects";
import axios from "axios";

function ProjectsList(props) {
  return (
    <div>
      <div className="project-list">
        <h1>Project List</h1>
        {props.projects.map(item => (
          <div className="project-card" key={item.id}>
            <br />
            <p>
              <strong>Project:</strong> {item.name}
            </p>
            <br />
            <p>
              <strong>Description:</strong> {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// const mapStateToProps = ({ getProjectsReducer }) => {
//   return {
//     projects: getProjectsReducer.projects
//   };
// };

export default ProjectsList;
// export default connect(mapStateToProps, { getProjects })(ProjectsList);
