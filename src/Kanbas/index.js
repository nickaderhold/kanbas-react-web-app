// import Nav from "../Nav";
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Home from "./Courses/Home";
import "./KanbasNavigation/index.css";
import store from "./store";
import { Provider } from "react-redux";
import db from "./Database";
import { useState, useEffect } from "react";
import axios from "axios";

function Kanbas() {
  // const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });
  const [courses, setCourses] = useState([]);

  // const URL = "http://localhost:4000/api/courses";
  const URL = "https://kanbas-node-server-app-az4u.onrender.com/api/courses";

  const addNewCourse = async () => {
    try {
      const response = await axios.post(URL, course);

      // Assuming the response.data is an object with the new course, not an array
      setCourses([...courses, response.data]);
      setCourse({ name: "" });
    } catch (error) {
      console.error("Error adding new course:", error.message);
    }
  };

  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };

  useEffect(() => {
    findAllCourses();
  }, []);

  // OLD
  // const addNewCourse = () => {
  //   setCourses([
  //     ...courses,
  //     { ...course, _id: new Date().getTime().toString() },
  //   ]);
  // };
  const deleteCourse = async (courseId) => {
    try {
      await axios.delete(`${URL}/${courseId}`);
      setCourses(courses.filter((course) => course._id !== courseId));
    } catch (error) {
      console.error(
        `Error deleting course with ID ${courseId}:`,
        error.message
      );
    }
  };

  // OLD
  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       } else {
  //         return c;
  //       }
  //     })
  //   );
  // };

  const updateCourse = async (course) => {
    const response = await axios.put(`${URL}/${course._id}`, course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        }
        return c;
      })
    );
    setCourse({ name: "" });
  };

  // const updateCourse = async (updatedCourse) => {
  //   console.log("Updating Course");
  //   try {
  //     const response = await axios.put(
  //       `${URL}/${updatedCourse._id}`,
  //       updatedCourse
  //     );
  //     const updatedCourseData = response.data;

  //     setCourses((prevCourses) =>
  //       prevCourses.map((course) =>
  //         course._id === updatedCourseData._id ? updatedCourseData : course
  //       )
  //     );
  //     // Optionally, you can clear the current course state after updating
  //     setCourse({ name: "" });
  //   } catch (error) {
  //     console.error(
  //       `Error updating course with ID ${updatedCourse._id}:`,
  //       error.message
  //     );
  //   }
  // };

  return (
    // Renders the navigation, and then whatever content is necessary for
    // whatever page we are on by default, we start at the Dashboard
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route
              path="Dashboard"
              element={
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              }
            />
            <Route
              path="Courses/:courseId/*"
              element={<Courses courses={courses} />}
            />
            <Route path="Courses/:courseId/*" element={<Courses />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;