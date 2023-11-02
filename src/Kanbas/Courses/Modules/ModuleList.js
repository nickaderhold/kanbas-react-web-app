import React from "react";
import { useParams } from "react-router-dom";

import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <a className="top-right-button btn btn-light float-end" role="button">
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </a>

        <div className="top-right-button dropdown float-end">
          <button
            className="btn btn-light dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
        <a className="top-right-button btn btn-light float-end" role="button">
          View Progress
        </a>
        <a className="top-right-button btn btn-light float-end" role="button">
          Collapse All
        </a>

        <br />
      </div>
      <hr />
      <ul className="list-group">
        <li className="list-group-item">
          <div className="float-end">
            <button
              className="btn btn-success"
              onClick={() =>
                dispatch(addModule({ ...module, course: courseId }))
              }
            >
              Add
            </button>
            <button
              className="btn btn-success float-end"
              onClick={() => dispatch(updateModule(module))}
            >
              Update
            </button>
          </div>

          <input
            className="form-control"
            value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
          />
          <textarea
            className="form-control"
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
          />
        </li>
        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li
              key={index}
              className="list-group-item"
              id="module-list-item"
            >
              <div className="float-end">
                <button
                  className="btn btn-light"
                  onClick={() => dispatch(setModule(module))}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(deleteModule(module._id))}
                >
                  Delete
                </button>
              </div>
              <h3>{module.name}</h3>
              <p>{module.description}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ModuleList;




