import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Task from "./Task";

const ToDo = () => {
  const [tasks, setTasks] = useState({
    id: "",
    title: "",
    description: "",
    status: "open",
    operations: [],
  });
  const [allTasks, setAllTasks] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTasks((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const API_URL = "http://localhost:3000";

  const submit = () => {
    fetch(`${API_URL}/tasks`, {
      method: "POST",
      body: JSON.stringify(tasks),
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

  const getAllTasks = () => {
    fetch(`${API_URL}/tasks`)
      .then((response) => response.json())
      .then((tasksFromDB) => {
        setAllTasks(tasksFromDB);
      })
      .catch((e) => {
        console.log("error");
      });
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <>
      <div className="jumbotron">
        <h1 className="display-4">Add new task</h1>
        <form onSubmit={submit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="title"
              placeholder="Title"
              value={tasks.title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="description"
              placeholder="Description"
              value={tasks.description}
              onChange={handleChange}
            />
          </div>
          <input type="submit" className="btn btn-primary" />
        </form>
      </div>
      {allTasks.map((el) => (
        <Task
          id={el.id}
          key={el.id}
          title={el.title}
          taskDescription={el.description}
          prevOperations={el.operations}
          prevStatus={el.status}
          allTasks={getAllTasks}
        />
      ))}
    </>
  );
};

export default ToDo;
