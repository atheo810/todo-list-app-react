import Tag from "./Tag";
import "./TaskForm.css";

import { useState } from "react";

export default function TaskForm() {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
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

  function selectTag(tag) {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  }

  console.log(taskData.tags);
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
            <Tag tagName="HTML" selectTag={selectTag} />
            <Tag tagName="CSS" selectTag={selectTag} />
            <Tag tagName="JavaScript" selectTag={selectTag} />
            <Tag tagName="React" selectTag={selectTag} />
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
