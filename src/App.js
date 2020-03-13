import React, { useState, useEffect } from "react";

import "./App.css";

import { Route, Switch } from "react-router-dom";
import ProjectsList from "./components/projectsList";
import axios from "axios";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("https://node-sprint-challenge.herokuapp.com/api/projects")
      .then(res => {
        console.log(res.data.project);
        setProjects(res.data.project);
      })
      .catch(error => console.log(error));
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/projects")
  //     .then(res => setProjects(res.data.project))
  //     .catch(error => console.log(error));
  // }, []);

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={props => (
            <ProjectsList
              {...props}
              projects={projects}
              setProjects={setProjects}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
