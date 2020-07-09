import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Operations from "./Operation";

const Task = ({
  id,
  title,
  taskDescription,
  prevOperations,
  prevStatus,
  allTasks,
}) => {
  const [description, setDescription] = useState([]);
  const [operations, setOperations] = useState(prevOperations);
  const [status, setStatus] = useState(prevStatus);

  const API_URL = "http://localhost:3000";

  const addOperation = (e, id, { description }) => {
    e.preventDefault();
    let timeSpent = 0;
    console.log(description, timeSpent);
    let data = {
      operations: [...operations, { description, timeSpent }],
    };
    console.log(data);

    fetch(`${API_URL}/tasks/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((tasks) => {
        allTasks();
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(operations);
    console.log(prevOperations);
  };

  const addTimeSpent = (timeSpent, description) => {
    let data = {
      operations: [...operations, { description, timeSpent }],
    };
    fetch(`${API_URL}/tasks/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((tasks) => {
        console.log(tasks);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDescription(() => {
      return {
        [name]: value,
      };
    });
  };

  const finish = (id) => {
    setStatus("close");

    let data = {
      status: "close",
    };

    fetch(`${API_URL}/tasks/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((tasks) => {
        console.log(tasks);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{taskDescription}</h6>
        {status === "open" && (
          <>
            <a href="#" className="card-link" onClick={() => finish(id)}>
              Finish
            </a>
            <form className="mt-3">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  placeholder="Operation description"
                  onChange={handleChange}
                />
              </div>
              {status === "open" && (
                <input
                  type="submit"
                  value="Add operation to task"
                  className="btn btn-primary"
                  onClick={(e) => addOperation(e, id, description)}
                />
              )}
            </form>
          </>
        )}
      </div>
      <ul className="list-group list-group-flush">
        {prevOperations !== undefined &&
          prevOperations.map((el, i) => (
            <Operations
              key={i}
              description={el.description}
              addTimeSpent={addTimeSpent}
              id={id}
              lastTimeSpent={el.timeSpent}
              status={status}
            />
          ))}
      </ul>
    </section>
  );
};

export default Task;
