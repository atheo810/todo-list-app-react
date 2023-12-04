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
          <button className="tag">HTML</button>
          <button className="tag">CSS</button>
          <button className="tag">JavaScript</button>
          <button className="tag">React</button>
          <select className="task_status">
            <option value="todo">To do</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>
          <button className="task_submit">+ Add Task</button>
        </div>
      </form>
    </header>
  );
}
