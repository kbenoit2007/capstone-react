import {  useState } from 'react';
import axios from "axios"


function ImageUpload(props){
    // const [fileList, setFileList] = useState(null)
    console.log("The data passed from above"+ JSON.stringify(props.bookDetailsData))
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
      setSelectedFile(e.target.files);
    };
    

   
  
    const handleUpload = () => {
        if(!selectedFile){
            return
        }


      // You can implement your image upload logic here, e.g., sending the file to a server.
      if (selectedFile) {
        const formData = new FormData();
        // console.log("the selected files "+JSON.stringify(selectedFile))
        files.forEach((files,i)=>{
          // console.log(`files`,files, files.name)
            formData.append(`files`,files, files.name);
            // formData.append('userId',props.userId)
            formData.append('book_id',props.bookId)
        })

        // console.log("the formdata is "+JSON.stringify(files[0].size))

        const config = {     
          headers: { 'content-type': 'multipart/form-data' }
      }
        
  
       
  
        axios.post(`${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/upload`,formData,config)
        
          //  .then((response) => response.json())
          .then((data) => {
            // Handle the response from the server
            
            console.log('Server response:', data);
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
      <ul>
        {files.map((file, i) => (
          <li key={i}>
            {file.name} - {file.type}
          </li>
        ))}
      </ul>
        <button onClick={handleUpload}>Upload</button>
      </div>
      </>
    );
  }

export default ImageUpload;
