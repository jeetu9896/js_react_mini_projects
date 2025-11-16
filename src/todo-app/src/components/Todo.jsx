import React from "react";
import TodoList from "./TodoList";

const Todo = () => {
  const [task, setTask] = React.useState({
    id: null,
    title: "",
    isCompleted: false,
  });
  const handleNewTask = (e) => {
    const value = e.target.value;
    if (value === "" || value.trim() === "") {
      setTask("");
      return;
    }
    setTask({ id: Date.now(), title: value.trim(), isCompleted: false });
  };

  const handleAddTask = () => {
    if (task.title === "" || task.title.trim() === "") {
      return;
    }
    const existingTasks = localStorage.getItem("task")
      ? JSON.parse(localStorage.getItem("task"))
      : [];
    const updatedTasks = [...existingTasks, task];
    localStorage.setItem("task", JSON.stringify(updatedTasks));
    setTask({ id: null, title: "", isCompleted: false });
  };

  const tasks = localStorage.getItem("task")
    ? JSON.parse(localStorage.getItem("task"))
    : [];
  return (
    <div>
      <h1>Todo</h1>
      <div className="m-10 p-4 flex gap-4">
        <input
          type="text"
          placeholder="Add a new task"
          className="text-black-500 border rounded h-10 p-2"
          onChange={handleNewTask}
          value={task.title}
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white rounded h-10 px-4 hover:bg-blue-600 hover:border-blue-600"
        >
          Add
        </button>
      </div>
      <TodoList tasks={tasks} setTask={setTask} />
    </div>
  );
};
export default Todo;
