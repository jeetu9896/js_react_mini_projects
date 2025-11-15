import axios from "axios";
import React, { useEffect } from "react";
import Loading from "./Loading";

const Modal = ({ onClose, selectedImage }) => {
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.slingacademy.com/v1/sample-data/photos/${selectedImage}`
      )
      .then((response) => {
        setData(response.data.photo);
      })
      .catch(() => {
        alert("Failed to fetch image details");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [selectedImage]);

  return (
    <>
      <div className="top-30 left-30 bottom-30 right-30 fixed bg-white bg-opacity-75">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <Loading />
          </div>
        ) : (
          <div className="p-4 h-full flex flex-row gap-4">
            <div className="h-full w-[1/2]">
              <img
                src={data.url}
                alt="Modal Image"
                loading="lazy"
                className="max-h-[50vh] rounded-lg shadow-lg"
              />
            </div>
            <div className="h-full w-[1/2] flex flex-col gap-4 justify-center">
              <h1 className="text-black text-2xl font-bold">{data.title}</h1>
              <p className="text-black">{data.description}</p>
              <button onClick={onClose} className="max-w-[10vw] m-auto">
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Modal;
