import React from 'react';
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjects";
import EncodingParametersInURLs from "./EncodingParametersInURLs";

function Assignment5() {
  return (
    <div>
      <h1>Assignment 5</h1>
      <div className="list-group">
        <a
          href="http://localhost:4000/a5/welcome"
          className="list-group-item"
        >
          Welcome
        </a>
      </div>
      <WorkingWithArrays />
      <WorkingWithObjects />
      <EncodingParametersInURLs />
      {/* <SimpleAPIExamples /> */}
    </div>
  );
}
export default Assignment5;

