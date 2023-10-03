import React, { useState, useEffect } from "react";
import {useParams, Link} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'
import './Profile.scss'




function Profile() {
  const {userId} = useParams()
  //const {bookId} = useParams()
  console.log("the user id is "+userId)
 // console.log("the book id is "+bookId)

  const [booksData,setBooksData] = useState("")
  const [thumbnailImages, setThumbnailImages] = useState("")

  // async function handleSubmit(event){
  //   event.preventDefault()
  //   const bookObject ={
  //       name:bookName,
  //       description:bookDesc
  //   } 

  useEffect(() => {
axios.get(`http://localhost:3001/user/${userId}/books`).then((data)=>{
      
        setBooksData(data.data)
      // console.log(JSON.stringify(data.data[0].id))

    //  navigate('/warehouses');
      console.log(booksData)
    }).catch(err =>{
      console.error(err)
    })
  },[])

  // Get Images for a book

  // useEffect(() => {
  //   axios.get(`http://localhost:3001/user/${userId}/books/fb373a21-92d9-4869-9d28-2fa303c44155/images`).then((data)=>{
          
  //       setThumbnailImages(data.data)
  //         // console.log(JSON.stringify(data.data[0].id))
  //       //  navigate('/warehouses');
  //         console.log(thumbnailImages)
  //       }).catch(err =>{
  //         console.error(err)
  //       })
  //     },[])



  return (
    <div>
      <h1>Profile Page</h1>
      <p>Welcome User</p>
      <Link to={"book/"+uuidv4()}>
      <p>Click Here to create your own Book</p>
      </Link>

      <p>Profile for blah here are your books</p>

      <p>Old Books</p>
      {/* {inventoryList && (
				<div className="inventory-list">
					{inventoryList.map((inventoryItem) => (
						<InventoryItem key={"InventoryItem__" + inventoryItem.id} inventoryItem={inventoryItem} page={page} refreshInventoryListFunction={refreshInventoryListFunction} />
					))}
				</div>
			)} */}

{/* http://localhost:3000/user/fb373a21-92d9-4869-9d28-2fa303c44154/viewbook/fb373a21-92d9-4869-9d28-2fa303c44155 */}

      {booksData && (
        <div>
          {booksData.map((book)=>(
           <><Link to={`viewbook/${book.id}`}>
              <div>{book.name} {book.description} <img src={"https://placehold.co/120x120?text=Book"} className="profile__image"/></div>
           </Link>
           
           </>
          ))}
          </div>
      )}



    </div>
  );
}

export default Profile;