import React, { useState } from "react";
function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const addNextElement = () => {
    setArray([...array, array[array.length - 1] + 1]);
  };
  const deleteElement = (index) => {
    setArray(array.filter((item, i) => i !== index));
  };
  const clearArray = () => {
    setArray([]);
  };
  return (
    <div>
      <h2>Array State Variable</h2>
      <button onClick={addElement}>Add Element</button>
      <button onClick={addNextElement}>Add Element inc. by 1</button>
      <button onClick={clearArray}>Clear Array</button>
      <ul>
        {array.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteElement(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ArrayStateVariable;
