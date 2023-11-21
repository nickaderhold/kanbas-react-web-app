import axios from "axios";

const COURSES_URL = "http://localhost:4000/api/courses"; //<- works fine
const API_BASE = process.env.REACT_APP_API_BASE;

//comment
export const findModulesForCourse = async (courseId) => {
  const response = await axios.get(`${COURSES_URL}/${courseId}/modules`);
  return response.data;
};

export const createModule = async (courseId, module) => {
  const response = await axios.post(
    `${COURSES_URL}/${courseId}/modules`,
    module,
  );
  return response.data;
};

export const deleteModule = async (moduleId) => {
  const response = await axios.delete(`${COURSES_URL}/${moduleId}`);
  return response.data;
};

export const updateModule = async (module) => {
  const response = await axios.put(`${COURSES_URL}/${module._id}`, module);
  return response.data;
};