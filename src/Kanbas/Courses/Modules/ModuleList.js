import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";

function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;

    return (
        <div id="module-list">
            <div className="container-frow">
                <a className="b-tr" role="button">
                    <i className="ellipsis-vert"></i>
                </a>
                <a className="b-tr" role="button">
                    View Progress
                </a>
                <a className="b-tr" role="button">
                    Collapse All
                </a>
                <a className="b-tr red" role="button">
                    + Module
                </a>
                <div className="button-container">
                    <button className="btn-dropdown-tog" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown button
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>

            <hr />

            {modules
                .filter((module) => module.course === courseId)
                .map((module, index) => (
                    <div id="module" className="accordion" key={index}>
                        <div className="card">
                            <div className="card-header" id={`heading${index}`}>
                                <button
                                    className="btn btn-link"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target={`#collapse${index}`}
                                    aria-expanded="true"
                                    aria-controls={`collapse${index}`}
                                >
                                    {module.name}
                                </button>
                            </div>

                            <div
                                id={`collapse${index}`}
                                className="collapse"
                                aria-labelledby={`heading${index}`}
                                data-parent="#module-list"
                            >
                                <div className="card-body">{module.description}</div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default ModuleList;



