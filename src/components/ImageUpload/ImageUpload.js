import {  useState } from 'react';
import axios from "axios"


function ImageUpload({bookDetailsData,onBookDetailsClickNext }){
  const [previewImages, setPreviewImages] = useState(null);
    // const [fileList, setFileList] = useState(null)
  //  console.log("The data passed from above"+ JSON.stringify(props.bookDetailsData.id))
    const [selectedFile, setSelectedFile] = useState(null);

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
      // You can implement your image upload logic here, e.g., sending the file to a server.
      if (selectedFile) {
        const formData = new FormData();
        files.forEach((files,i)=>{
            formData.append(`files`,files, files.name);
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
            onBookDetailsClickNext('PreviewBook',newData)
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
      <input type="file" onChange={handleFileChange} multiple />
      {/* <ul>
        {files.map((file, i) => (
          <li key={i}>
            {file.name} - {file.type}
            {<img key={i} src={previewImages} />}
          </li>
        ))}
      </ul> */}

    
{previewImages &&(
        <div className="image-preview-container">
        {previewImages.map((image, index) => (
          <img key={index} src={image} alt={`Preview ${index}`} width="200" />
        ))}
      </div>

)}
        <button onClick={handleUpload}>Upload</button>
      </div>
      </>
    );
  }

export default ImageUpload;
