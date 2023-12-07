import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";

const Dropzone = () => {
  const [file, setFile] = useState(null);

  const onDrop = (item) => {
    setFile(item.file);
  };

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "FILE",
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const [{ isDragging }, drag] = useDrag({
    type: "FILE",
    item: { type: "FILE", file },
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        setFile(null);
      }
    },
  });

    const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const combinedDragAndDropRef = (node) => {
    drag(drop(node));
  };

  return (
    <label
      htmlFor="dropzone-file"
      className={`flex flex-col items-center justify-center w-full h-64 border-2 ${
        canDrop && isOver
          ? "border-dashed border-green-500 bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-500"
          : "border-dashed border-gray-300 bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 dark:hover:border-gray-500"
      } rounded-lg cursor-pointer`}
    >
      <div
        ref={combinedDragAndDropRef}
        className="flex flex-col items-center justify-center pt-5 pb-6"
      >
        <svg
          className={`w-8 h-8 mb-4 text-gray-500 dark:text-gray-400 ${
            isDragging ? "text-green-500" : ""
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 16"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
          />
        </svg>
        {file && (
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">{file.name}</span>
          </p>
        )}
        {!file && (
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">
              {isDragging ? "Drag to move" : "Click to upload"}
            </span>{" "}
          </p>
        )}
        <p className="text-xs text-gray-500 dark:text-gray-400">
          SVG, PNG, JPG or GIF (MAX. 800x400px)
        </p>
      </div>
      <input
        id="dropzone-file"
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />
    </label>
  );
};

export default Dropzone;
