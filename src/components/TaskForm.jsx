import Tag from "./Tag";
import "./TaskForm.css";

import { useState } from "react";

export default function TaskForm() {
  // handle task input
  // const [task, setTask] = useState("");
  // const [status, setStatus] = useState("todo");

  // function task input
  // function handleTaskChange(e) {
  //   setTask(e.target.value);
  // }

  // function handleStatusChange(e) {
  //   setStatus(e.target.value);
  // }

  // console.log(task);

  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
  });
  function handleChange(e) {
    const { name, value } = e.target;

    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(taskData);
  }
  return (
    <header className="app_header">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={taskData.task}
          className="task_input"
          placeholder="Enter your Task"
          onChange={handleChange}
        />
        <div className="task_form_bottom_line">
          <div>
            <Tag tagName="HTML" />
            <Tag tagName="CSS" />
            <Tag tagName="JavaScript" />
            <Tag tagName="React" />
          </div>
          <div>
            <select
              className="task_status"
              name="status"
              onChange={handleChange}
            >
              <option value="todo">To do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button className="task_submit" type="submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
}
