import React, { useState, useEffect } from "react";
import {useParams, Link} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'
import './Profile.scss'
import Tile from '../../components/Tile/Tile'
import AgeTile from '../../components/AgeTile/AgeTile'




function Profile() {
  const {userId} = useParams()
  console.log("the user id is "+userId)

  const [booksData,setBooksData] = useState("")
  const [thumbnailImages, setThumbnailImages] = useState("")


  useEffect(() => {
axios.get(`${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/user/${userId}/books`).then((data)=>{
      
        setBooksData(data.data)

      console.log(booksData)
    }).catch(err =>{
      console.error(err)
    })
  },[])


  return (
    <div className="mainApp__container">
      <h1>Profile Page</h1>
      <p>Welcome User</p>
      <div className="profile__container">

     
      <Tile header="Baby Name" componentToRender={<AgeTile birthday="Jan 04 2023" age="9 Months"/>}/>
      <Tile header="Create Book" componentToRender={ <Link to={"book/"+uuidv4()}>
      <p>Click Here to create your own Book</p>
      </Link>}/>

      <Tile header="Book List" componentToRender={booksData && (
        <div>
          {booksData.map((book)=>(
           <><Link to={`viewbook/${book.id}`}>
              <div>{book.name} {book.description} <img src={"https://placehold.co/120x120?text=Book"} className="profile__image"/></div>
           </Link>
           
           </>
          ))}
          </div>
      )}/>
      <Tile header="Milestones"/>
      </div>
    </div>
  );
}

export default Profile;