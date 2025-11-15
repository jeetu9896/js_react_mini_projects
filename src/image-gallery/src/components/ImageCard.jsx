import React from "react";
import Modal from "./Modal";

const ImageCard = ({ imageUrl, imgData }) => {
  const [openModal, setOpenModal] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const onClose = () => {
    setOpenModal(false);
    setSelectedImage(null);
  };
  return (
    <div className="flex flex-col items-center space-y-4">
      <img
        src={imageUrl}
        alt="Image"
        width="400"
        height="400"
        loading="lazy"
        className="border rounded"
      />
      <button
        className="bg-blue-500"
        onClick={() => {
          setSelectedImage(imgData.id);
          setOpenModal(true);
        }}
      >
        View
      </button>

      {openModal && (
        <Modal onClose={onClose} selectedImage={selectedImage} />
      )}
    </div>
  );
};

export default ImageCard;
