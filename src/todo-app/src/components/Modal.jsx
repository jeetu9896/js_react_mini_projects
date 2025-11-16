import React from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
const Modal = ({ isOpen, onClose, children }) => {
  return isOpen ? (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white-300 p-6 rounded shadow-lg relative">
        {children}
        <button
          className="absolute top-0 right-4 text-white-600 hover:text-white-800"
          onClick={onClose}
        >
          <IoCloseCircleSharp />
        </button>
      </div>
    </div>
  ) : null;
};

export default Modal;
