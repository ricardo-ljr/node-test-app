import {
  FETCH_PROJECTS_START,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAIL
} from "../actions/getProjects";

const initialState = {
  projects: [],
  fetchingProjects: false,
  error: ""
};

export const getProjectsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PROJECTS_START:
      return {
        ...state,
        fetchingProjects: true,
        error: null
      };
    case FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        fetchingProjects: true,
        projects: payload
      };
    case FETCH_PROJECTS_FAIL:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};
