import React, { useState, useEffect } from "react";
import axios from "axios";
function WorkingWithArrays() {
  const [todo, setTodo] = useState({
    title: "NewTodo",
    completed: false,
    id: 123,
  });

  const API = "https://kanbas-node-server-app-az4u.onrender.com/a5/todos";

  const removeTodo = async (todo) => {
    const response = await axios.get(`${API}/${todo.id}/delete`);
    setTodos(response.data);
  };

  const updateTodo = async () => {
    const response = await axios.put(`${API}/${todo.id}`, todo);
    setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
    setTodo({});
  };

  const updateTitle = async () => {
    const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
    setTodos(response.data);
  };

  const createTodo = async () => {
    // const response = await axios.get("http://localhost:4000/a5/todos/create");
    const response = await axios.post(`${API}`, todo);
    setTodos([...todos, response.data]);
  };

  //   const deleteTodo = async (id) => {
  //     // const response = await axios.get(
  //     //   `http://localhost:4000/a5/todos/${id}/delete`
  //     // );
  //     const response = await axios.delete(`http://localhost:4000/a5/todos/${id}`);
  //     setTodos(
  //       todos.filter((todo) => {
  //         return todo.id !== id;
  //       })
  //     );
  //   };

  const deleteTodo = async (todo) => {
    const response = await axios.delete(`${API}/${todo.id}`);
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  const fetchTodoById = async (id) => {
    const response = await axios.get(`${API}/${id}`);
    setTodo(response.data);
  };

  const postTodo = async () => {
    const response = await axios.post(API, todo);
    setTodos([...todos, response.data]);
  };

  useEffect(() => {
    fetchTodos();
  }, []);
  const [todos, setTodos] = useState([]);
  const fetchTodos = async () => {
    const response = await axios.get(API);
    setTodos(response.data);
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h2 className="App-header">
        <h1>Working with Arrays</h1>
        <h3>Updating an Item in an Array</h3>
        <input
          value={todo.title}
          onChange={(e) =>
            setTodo({
              ...todo,
              title: e.target.value,
            })
          }
          className="form-control mb-2"
          type="text"
        />
        <a
          href={`${API}/${todo.id}/title/${todo.title}`}
          className="btn btn-primary me-2"
        >
          Update Title to {todo.title}
        </a>
        <h3>Filtering Array Items</h3>
        <a href={`${API}/?completed=true`} className="btn btn-primary me-2">
          Get Completed Todos
        </a>
        <h4>Retrieving an Item from an Array by ID</h4>
        <input
          className="form-control"
          value={todo.id}
          onChange={(e) => setTodo({ ...todo, id: e.target.value })}
        />
        <a href={`${API}/${todo.id}`} className="btn btn-primary me-2">
          Get Todo by ID
        </a>
        <h4>Creating new Items in an Array</h4>
      </h2>
      <button onClick={createTodo} className="btn btn-primary mb-2 w-100">
        Create Todo
      </button>
      <button onClick={updateTitle} className="btn btn-success mb-2 w-100">
        Update Title
      </button>
      <textarea
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        value={todo.description}
        type="text"
      />
      <textarea
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        value={todo.description}
        type="text"
      />
      <input
        onChange={(e) =>
          setTodo({
            ...todo,
            due: e.target.value,
          })
        }
        value={todo.due}
        type="date"
      />
      <label>
        <input
          onChange={(e) =>
            setTodo({
              ...todo,
              completed: e.target.checked,
            })
          }
          value={todo.completed}
          type="checkbox"
        />
        Completed
      </label>
      <button onClick={postTodo}>Post Todo</button>
      <input
        onChange={(e) =>
          setTodo({
            ...todo,
            due: e.target.value,
          })
        }
        value={todo.due}
        type="date"
      />
      <label>
        <input
          onChange={(e) =>
            setTodo({
              ...todo,
              completed: e.target.checked,
            })
          }
          value={todo.completed}
          type="checkbox"
        />
        Completed
      </label>
      <button onClick={postTodo}>Post Todo</button>
      <button onClick={updateTodo}>Update Todo</button>
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <button
              onClick={() => fetchTodoById(todo.id)}
              className="btn btn-warning me-2 float-end"
            >
              Edit
            </button>
            <button
              onClick={() => removeTodo(todo)}
              className="btn btn-danger float-end"
            >
              Remove
            </button>
            <input checked={todo.completed} type="checkbox" readOnly />
            {todo.title}
            <p>{todo.description}</p>
            <p>{todo.due}</p>
          </li>
        ))}
      </ul>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </div>
  );
}

export default WorkingWithArrays;
