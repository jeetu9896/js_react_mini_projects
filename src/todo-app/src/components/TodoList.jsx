import React from "react";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import Modal from "./Modal";

const TodoList = ({ tasks, setTask }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [taskToEdit, setTaskToEdit] = React.useState(null);
  const [editedTitle, setEditedTitle] = React.useState("");
  const [active, setIsActive] = React.useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
    setTaskToEdit(null);
  };

  const handleEdit = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    if (taskToEdit) {
      setTaskToEdit(taskToEdit);
      setIsModalOpen(true);
    }
  };

  const handleSaveEdit = (editedTitle) => {
    editedTitle = editedTitle.trim();
    if (editedTitle === "" || editedTitle.length === taskToEdit.title.length) {
      alert("Task title cannot be same or empty.");
      return;
    }
    const updatedTasks = tasks.map((task) =>
      task.id === taskToEdit.id ? { ...task, title: editedTitle } : task
    );
    localStorage.setItem("task", JSON.stringify(updatedTasks));
    setTask(updatedTasks);
    handleModalClose();
  };

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    localStorage.setItem("task", JSON.stringify(updatedTasks));
    setTask(updatedTasks);
  };

  const handleTaskStatus = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    localStorage.setItem("task", JSON.stringify(updatedTasks));
    setTask(updatedTasks);
  };

  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div
            className="m-4 p-2 border-b flex justify-between items-center"
            key={task.id}
          >
            <div>
              <p className="capitalize">{task.title}</p>
            </div>
            <div className=" flex justify-between items-center">
              <button
                className="mr-4 text-blue-500 hover:text-blue-600"
                onClick={() => handleTaskStatus(task.id)}
              >
                {task.isCompleted ? "Mark Incomplete" : "Mark Complete"}
              </button>
              <button
                className="mr-4 hover:text-blue-600"
                onClick={() => handleEdit(task.id)}
              >
                <MdEdit color="blue" size={20} />
              </button>
              <button
                className="hover:text-red-600"
                onClick={() => handleDelete(task.id)}
              >
                <MdDeleteOutline color="red" size={20} />
              </button>
            </div>
            <Modal isOpen={isModalOpen} onClose={handleModalClose}>
              <div className="flex flex-col gap-4 bg-white p-4 rounded">
                <h2 className="text-black text-2xl">Edit Task</h2>
                <input
                  type="text"
                  defaultValue={taskToEdit?.title}
                  className="border rounded p-2 border-black bg-white text-black"
                  onChange={(e) => setEditedTitle(e.target.value)}
                />
                <button
                  onClick={() => handleSaveEdit(editedTitle)}
                  className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
                >
                  Save
                </button>
              </div>
            </Modal>
          </div>
        ))
      ) : (
        <p className="text-center mt-10">
          No tasks available. Please add a task.
        </p>
      )}
    </div>
  );
};
export default TodoList;
