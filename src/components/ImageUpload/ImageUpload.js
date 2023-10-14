import {  useState } from 'react';
import axios from "axios"
import './ImageUpload.scss'
import { Link, useNavigate, useParams,useHistory ,useLocation } from "react-router-dom";


function ImageUpload({bookDetailsData,onBookDetailsClickNext }){
  const [previewImages, setPreviewImages] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const navigate = useNavigate();

    const handleFileChange = (e) => {
      setSelectedFile(e.target.files);
      const fileList = e.target.files;
      const imageList = [];
  
      for (let i = 0; i < fileList.length; i++) {
        const file = fileList[i];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            imageList.push(reader.result);
            if (imageList.length === fileList.length) {
              setPreviewImages(imageList);
            }
          };
          reader.readAsDataURL(file);
        }
      }
    };
    

   
  
    const handleUpload = () => {
        if(!selectedFile){
            return
        }

      if (selectedFile) {
        const formData = new FormData();
        files.forEach((files,i)=>{
            formData.append(`file`,files, files.name);
            formData.append('book_id',bookDetailsData.id)
        })
        const config = {     
          headers: { 'content-type': 'multipart/form-data' }
      }
        
        axios.post(`${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/upload`,formData,config)
          .then((data) => {
            // Handle the response from the server
            
            console.log('Server response:', data);
            const newData = {
              files:data.data.files,
              bookDetails:bookDetailsData
            }
            navigate(`../user/${bookDetailsData.user_id}/viewbook/${bookDetailsData.id}`);
            // onBookDetailsClickNext('PreviewBook',newData)
          })
          .catch((error) => {
            console.error('Error uploading image:', error);
          });
      }
    };
  
    const files = selectedFile ? [...selectedFile] :[]
    return (
        <>
        
      <div>
        <div className="imageUpload__header">Upload Your Images Here:</div>
        <div className="imageUpload__actionButtons">
        <div><input type="file"  onChange={handleFileChange} multiple /></div>
        <div><button onClick={handleUpload} className="rounded-button">Upload</button></div>
        </div>
      
      
      {/* <ul>
        {files.map((file, i) => (
          <li key={i}>
            {file.name} - {file.type}
            {<img key={i} src={previewImages} />}
          </li>
        ))}
      </ul> */}

    
{previewImages &&(
        <div className="imageUpload__previewContainer">
        {previewImages.map((image, index) => (
          <img key={index} src={image} alt={`Preview ${index}`} className="imageUpload__previewImage" />
        ))}
      </div>

)}
        
      </div>
      </>
    );
  }

export default ImageUpload;
