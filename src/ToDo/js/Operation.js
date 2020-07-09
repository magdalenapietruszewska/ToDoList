import React, { useState, useEffect } from "react";

const Operations = ({ description, addTimeSpent, lastTimeSpent, status }) => {
  const [timeSpent, setTimeSpent] = useState(lastTimeSpent);
  const [startTimer, setStartTimer] = useState(false);
  const [stopTimer, setStopTimer] = useState(false);
  const [addTime, setAddTime] = useState(false);
  const [addFinish, setAddFinish] = useState(false);

  const showtimer = () => {
    setStartTimer(true);
  };

  const stop = () => {
    setStopTimer(true);
    setAddFinish(true);
    addTimeSpent(timeSpent, description);
  };
  const addtime = () => {
    setAddTime(true);
  };
  const saveTime = (e) => {
    e.preventDefault();
    setAddFinish(true);
    setStopTimer(true);
    addTimeSpent(timeSpent, description);
  };

  useEffect(() => {
    if (startTimer === true) {
      const interval = setInterval(() => {
        setTimeSpent((prev) => prev + 1);
      }, 1000);

      if (stopTimer === true) {
        clearInterval(interval);
      }

      return () => {
        clearInterval(interval);
      };
    }
  }, [startTimer, stopTimer]);

  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {description}
        {startTimer === false && addTime === false && status === "open" && (
          <div>
            <button className="btn btn-primary" onClick={addtime}>
              Add time manually
            </button>

            <button className="btn btn-primary ml-3" onClick={showtimer}>
              Start timer
            </button>
          </div>
        )}

        {startTimer === true && addFinish === false && status === "open" && (
          <div>
            <span className="btn btn-warning">Czas: {timeSpent}</span>
            <button className="btn btn-primary ml-3" onClick={stop}>
              Stop timer
            </button>
          </div>
        )}

        {addTime === true && addFinish === false && status === "open" && (
          <form className="d-flex" onSubmit={(e) => saveTime(e)}>
            <input
              type="text"
              className="form-control"
              name="time"
              placeholder="Type in spend time"
              onChange={(e) => setTimeSpent(e.target.value)}
            />
            <button className="btn btn-primary ml-3">Save</button>
          </form>
        )}
        {addFinish === true && (
          <span className="badge badge-primary badge-pill">
            Czas: {timeSpent}
          </span>
        )}
      </li>
    </>
  );
};

export default Operations;
