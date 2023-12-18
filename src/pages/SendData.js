import React, { createContext, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Footer from "../components/Footer";
import Dropzone from "../components/Dropzone";
import axios from "axios";

function SendData() {
  const [formData, setFormData] = useState({
    image_file: null,
    text: "",
    text_style: "",
    duration: 0,
  });

  console.log(formData);

  const handleWidget = async () => {
    const formDataToSend = new FormData();
    formDataToSend.append("image_file", formData.image_file);
    formDataToSend.append("text", formData.text);
    formDataToSend.append("text_style", formData.text_style);
    formDataToSend.append("duration", formData.duration);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/widgets/donations/",
        formDataToSend,
        {
          withCredentials: true,
        }
      );
      console.log(response);
    } catch (error) {
      console.error("Axios error:", error);
    }
  };

  const handleFileChange = (file) => {
    setFormData({
      ...formData,
      image_file: file,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <>
        <div>
          <div className="w-full pb-10 pt-5 px-4 sm:px-6 md:px-8 lg:ps-72">
            <form>
              <Dropzone onFileChange={handleFileChange} />
              <label
                htmlFor="text"
                className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your message
              </label>
              <textarea
                id="text"
                name="text"
                rows="4"
                value={formData.text}
                onChange={handleInputChange}
                className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
              ></textarea>
              <label
                htmlFor="text_style"
                className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your style
              </label>
              <textarea
                id="text_style"
                name="text_style"
                rows="4"
                value={formData.text_style}
                onChange={handleInputChange}
                className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
              ></textarea>

              <div className="max-w-sm mt-4">
                <label
                  htmlFor="duration"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select a number:
                </label>
                <input
                  type="number"
                  id="duration"
                  name="duration"
                  aria-describedby="helper-text-explanation"
                  value={formData.duration}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="50"
                  required
                />
              </div>
              <button
                type="button"
                onClick={handleWidget}
                className="mt-10 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Send
              </button>
            </form>
            <Footer />
          </div>
        </div>
      </>
    </DndProvider>
  );
}

export default SendData;
