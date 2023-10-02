import React, { useState, useEffect } from "react";
import {useParams, Link} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'




function Profile() {
  const {userId} = useParams()
  console.log("the user id is "+userId)

  const [booksData,setBooksData] = useState("")

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
 //} 


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

      {booksData && (
        <div>
          {booksData.map((books)=>(
           <><p>{books.name} {books.description}</p></>
          ))}
          </div>
      )}
    </div>
  );
}

export default Profile;