import React from 'react'
import HTMLFlipBook from 'react-pageflip';
import { Link, useNavigate, useParams,useHistory ,useLocation } from "react-router-dom";





function PreviewBook({imageUploadData}){
    const navigate = useNavigate();

    const handleClick =()=>{
        navigate(`../user/${imageUploadData.bookDetails.user_id}`);
    }
    console.log("data from image is "+JSON.stringify(imageUploadData.files.length))
    return (
        <>
      <HTMLFlipBook width={600} height={500} usePortrait="true" showCover="true" autoSize="false">
        <div className="demoPage">
          <img src={imageUploadData.bookDetails.cover_pic} width="300px" height="500px" />
          Page 1
        </div>
        {imageUploadData.files.map((pics) => (
          <div className="demoPage">
            <img src={pics.url} width="300px" height="500px" />
          </div>
        ))}
      </HTMLFlipBook>
      <button type="Submit" onClick={handleClick}>Save</button>
      </>
    );

    // {bookData.data && (
    //     <div>
    //         {bookData.data.map((book) => (
    //           <div>
    //             {book.name}
    //           </div>
    //         ))}
    //         </div>
    //         )}
}

export default PreviewBook