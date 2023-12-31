import React from "react";
import HTMLFlipBook from "react-pageflip";
import {
  useNavigate,
} from "react-router-dom";

//Not using this Library right now, switched to Slideshows

function PreviewBook({ imageUploadData }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`../user/${imageUploadData.bookDetails.user_id}`);
  };
  console.log("data from image is " + JSON.stringify(imageUploadData));
  return (
    <>
      <HTMLFlipBook
        width={600}
        height={500}
        usePortrait="true"
        showCover="true"
        autoSize="false"
      >
        <div className="demoPage">
          <img
            src={imageUploadData.bookDetails.cover_pic}
            width="300px"
            height="500px"
            alt="preview"
          />
          Page 1
        </div>
        {imageUploadData.files.map((pics) => (
          <div className="demoPage">
            <img src={pics.url} width="300px" height="500px" alt="cover" />
          </div>
        ))}
      </HTMLFlipBook>
      <button type="Submit" onClick={handleClick}>
        Save
      </button>
    </>
  );
}

export default PreviewBook;
