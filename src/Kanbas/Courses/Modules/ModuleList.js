import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCircleCheck, FaEllipsisVertical, FaPlus } from "react-icons/fa6";
import Accordion from "react-bootstrap/Accordion";
import { useDispatch, useSelector } from "react-redux";
import {
  addModule,
  deleteModule,
  setModule,
  setModules,
  updateModule,
} from "./modulesReducer";
import * as client from "./client";
import { createModule, findModulesForCourse } from "./client";

function ModuleList() {
  const { courseId } = useParams();
  useEffect(() => {
    findModulesForCourse(courseId).then((modules) =>
      dispatch(setModules(modules)),
    );
  }, [courseId]);

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  //const modules = db.modules.filter((module) => module.course === courseId);
  return (
    <div>
      <div>
        <ul className="list-group">
          <li className={""}>
            <div className={"align-items-end"}>
              <button className="btn btn-light ">Collapse All</button>
              <button className="btn btn-light ">View Progress</button>
              <div className="dropdown d-inline">
                <button
                  className={"btn dropdown-toggle btn-light "}
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <FaCircleCheck className={"text-success"}></FaCircleCheck>
                  Publish All
                </button>
                <div
                  className={"dropdown-menu"}
                  aria-labelledby="dropdownMenuButton"
                >
                  {/*// <!--          <a class="dropdown-item" href="#">Action</a>-->*/}
                  {/*// <!--          <a class="dropdown-item" href="#">Another action</a>-->*/}
                  {/*// <!--          <a class="dropdown-item" href="#">Something else here</a>-->*/}
                </div>
              </div>

              <button
                onClick={() =>
                  dispatch(addModule({ ...module, course: courseId }))
                }
                className={"btn btn-danger "}
              >
                <FaPlus className={"text-white"}></FaPlus>
                Module
              </button>

              <button className={"btn btn-light "}>
                <FaEllipsisVertical
                  className={"text-secondary"}
                ></FaEllipsisVertical>
              </button>
            </div>
          </li>
          <li>
            <li className="list-group-item">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Module Settings</Accordion.Header>
                  <Accordion.Body>
                    <div className={"input-group"}>
                      <input
                        className={"form-control"}
                        value={module.name}
                        onChange={(e) =>
                          dispatch(
                            setModule({ ...module, name: e.target.value }),
                          )
                        }
                      />
                    </div>

                    <div className={"input-group"}>
                      <textarea
                        className="form-control"
                        value={module.description}
                        onChange={(e) =>
                          dispatch(
                            setModule({
                              ...module,
                              description: e.target.value,
                            }),
                          )
                        }
                      />
                    </div>

                    <button
                      className={"btn btn-success"}
                      onClick={handleAddModule}
                    >
                      Add
                    </button>
                    <button
                      className={"btn btn-secondary"}
                      onClick={() => handleUpdateModule(module)}
                    >
                      Update
                    </button>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </li>
          </li>
          {modules.map((module, index) => (
            <li key={index} className="list-group-item">
              <button
                className={"btn btn-danger float-end"}
                onClick={() => handleDeleteModule(module._id)}
              >
                Delete
              </button>
              <button
                className={"btn btn-secondary float-end"}
                onClick={() => dispatch(setModule(module))}
              >
                Edit
              </button>

              <h3>{module.name}</h3>
              <p>{module.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default ModuleList;




