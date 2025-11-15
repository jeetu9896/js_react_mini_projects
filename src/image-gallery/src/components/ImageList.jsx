import axios from "axios";
import React from "react";
import ImageCard from "./ImageCard";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import Loading from "./Loading";

//https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=${limit}

const ImageList = () => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [limit, setLimit] = React.useState(20);
  const [offset, setOffset] = React.useState(0);
  const [openModal, setOpenModal] = React.useState(false);

  const handleModal = () => {
    setOpenModal((prev) => !prev);
  };

  const handleOffsetChange = (newOffset) => {
    setOffset((prev) => prev + newOffset);
  };
  React.useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=${limit}`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch(() => {
        alert("Failed to fetch images");
      })
      .finally(() => setLoading(false));
  }, [offset, limit]);
  return (
    <div>
      {loading ? (
        <Loading /> 
      ) : (
        <>
          <div className="grid grid-cols-4 gap-4">
            {data.photos &&
              data.photos.map((img) => (
                <div key={img.id} className="p-4 border rounded shadow">
                  <ImageCard
                    imageUrl={img.url}
                    imgData={img}
                    openModal={openModal}
                    handleModal={handleModal}
                  />
                </div>
              ))}
          </div>
          <div className="flex justify-center gap-12 mt-12">
            <button
              className={`${
                offset <= 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={() => handleOffsetChange(-1)}
              disabled={offset <= 0 || openModal}
            >
              <BiLeftArrow />
            </button>
            <button onClick={() => handleOffsetChange(1)} disabled={openModal}>
              <BiRightArrow />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ImageList;
