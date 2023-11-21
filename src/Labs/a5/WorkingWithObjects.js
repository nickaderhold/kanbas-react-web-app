import React, { useState, useEffect } from 'react';
import axios from 'axios';

function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const lab5URL = "http://localhost:4000";

  useEffect(() => {
    const fetchAssignment = async () => {
      const response = await axios.get(`${lab5URL}/assignment`);
      setAssignment(response.data);
    };
    fetchAssignment();
  }, []);

  const updateTitle = async () => {
    const response = await axios.get(`${lab5URL}/assignment/title/${assignment.title}`);
    setAssignment(response.data);
  };

  return (
    <div>
      <h3>Working With Objects</h3>
      {/* ... rest of the UI elements ... */}
    </div>
  );
}

export default WorkingWithObjects;






