import axios from "axios";
import { useParams } from "react-router";
const API_BASE = "https://kanbas-node-server-app-az4u.onrender.com/api";
const COURSES_URL = `${API_BASE}/courses`;

// get all the assignments for this course
export const findAssignmentsForCourse = async (courseId) => {
  const response = await axios.get(`${COURSES_URL}/${courseId}/assignments`);
  return response.data;
};

// get a single assignment by id
export const findAssignment = async (assignmentId) => {
  const response = await axios.get(`${API_BASE}/assignments/${assignmentId}`);
  return response.data;
};

// delete a single assignment by id
export const deleteAssignment = async (assignmentId) => {
  const response = await axios.delete(
    `${API_BASE}/assignments/${assignmentId}`
  );
  return response.data;
};

// update a single assignment by id
export const updateAssignment = async (assignment) => {
  const response = await axios.put(
    `${API_BASE}/assignments/${assignment._id}`,
    assignment
  );
  return response.data;
};

// create a new assignment
export const createAssignment = async (courseId, assignment) => {
  const response = await axios.post(
    `${COURSES_URL}/${courseId}/assignments`,
    assignment
  );
  return response.data;
};