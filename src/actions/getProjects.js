import axios from "axios";

export const FETCH_PROJECTS_START = "FETCH_PROJECTS_START";
export const FETCH_PROJECTS_SUCCESS = "FETCH_PROJECTS_SUCCESS";
export const FETCH_PROJECTS_FAIL = "FETCH_PROJECTS_FAIL";

const getProjects = () => dispatch => {
  dispatch({ type: FETCH_PROJECTS_START });

  return axios
    .get(`https://localhost:5000/api/projects`)
    .then(res => {
      console.log(res.data);
      dispatch({ type: FETCH_PROJECTS_SUCCESS, payload: res.data });
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: FETCH_PROJECTS_FAIL });
    });
};

export default getProjects;
