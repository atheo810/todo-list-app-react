import Tag from "./Tag";
import "./TaskForm.css";
export default function TaskForm() {
  return (
    <header className="app_header">
      <form action="">
        <input
          type="text"
          className="task_input"
          placeholder="Enter your Task"
        />
        <div className="task_form_bottom_line">
          <div>
            <Tag tagName="HTML" />
            <Tag tagName="CSS" />
            <Tag tagName="JavaScript" />
            <Tag tagName="React" />
          </div>
          <div>
            <select className="task_status">
              <option value="todo">To do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button className="task_submit">+ Add Task</button>
          </div>
        </div>
      </form>
    </header>
  );
}
