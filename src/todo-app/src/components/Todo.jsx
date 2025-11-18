import React, { useEffect } from "react";
import TodoList from "./TodoList";

const Todo = () => {
  const [allTasks, setAllTasks] = React.useState([]);
  const [displayTasks, setDisplayTasks] = React.useState([]);
  const [task, setTask] = React.useState({
    id: null,
    title: "",
    isCompleted: false,
  });

  const handleNewTask = (e) => {
    const value = e.target.value.trim();

    if (!value) {
      setTask({ id: null, title: "", isCompleted: false });
      return;
    }

    setTask({ id: Date.now(), title: value, isCompleted: false });
  };

  const handleAddTask = () => {
    if (!task.title.trim()) return;

    const updated = [...allTasks, task];
    localStorage.setItem("task", JSON.stringify(updated));

    setAllTasks(updated);
    setDisplayTasks(updated); // update UI

    setTask({ id: null, title: "", isCompleted: false });
  };

  const handleFilterChange = (e) => {
    const filter = e.target.value;

    if (filter === "") {
      setDisplayTasks(allTasks);
    } else if (filter === "completed") {
      setDisplayTasks(allTasks.filter((t) => t.isCompleted));
    } else if (filter === "incomplete") {
      setDisplayTasks(allTasks.filter((t) => !t.isCompleted));
    }
  };

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("task")) || [];
    setAllTasks(saved);
    setDisplayTasks(saved); // initial UI render
  }, []);

  return (
    <div>
      <h1>Todo</h1>

      <div className="m-4 p-4 flex gap-4">
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

      <select
        onChange={handleFilterChange}
        className="p-2 border-2 border-gray-300 text-black rounded bg-white m-4"
      >
        <option value="">All</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>

      <TodoList tasks={displayTasks} setTask={setTask} />
    </div>
  );
};

export default Todo;
