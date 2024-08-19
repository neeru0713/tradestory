import React from "react";

const ConfirmationModal = ({ isOpen, onConfirm, onCancel, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-md shadow-lg text-left w-[340px]">
        <h1 className="text-left font-semibold text-2xl mb-4 text-gray-700">Delete Trade</h1>
        <p className="mb-4 text-md text-gray-700">{message}</p>
        <div className="flex justify-between ">
          <button
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
            onClick={onConfirm}
          >
            Confirm
          </button>
          <button
            className="bg-gray-200 py-2 px-4 rounded-md hover:bg-gray-300"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
