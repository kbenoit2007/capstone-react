import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import "./Profile.scss";
import Tile from "../../components/Tile/Tile";
import AgeTile from "../../components/AgeTile/AgeTile";
import TimeStampToDate from "../../components/TimeStampToDate/TimeStampToDate";

function Profile() {
  const { userId } = useParams();
  console.log("the user id is " + userId);
  const [booksData, setBooksData] = useState("");
  const [thumbnailImages, setThumbnailImages] = useState("");

  const [auth, setAuth] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [babyName,SetBabyName]= useState()
  const [birthDate,setBirthDate] = useState()


  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/user/${userId}/books`
      )
      .then((data) => {
        setBooksData(data.data);

        console.log(booksData);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/user/verify`
      )
      .then((res) => {
        console.log(res);
        if (res.data.Status === "Success") {
          setAuth(true);
          setName(res.data.name);
        } else {
          setAuth(false);
          setMessage(res.data.Message);
        }
      });
  }, []);

  axios.defaults.withCredentials = true;
  useEffect(() => {
    const userProfile={
      "user_id":userId
    }
    axios
      .post(
        `${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/user/profile`,userProfile)
      .then((res) => {
        console.log(res);
        SetBabyName(res.data.babyname)
        setBirthDate(res.data.birthdate)
        if (res.data.Status === "Success") {
          console.log("we're good")
          // setAuth(true);
          // setName(res.data.name);
        } else {
          // setAuth(false);
          // setMessage(res.data.Message);
        }
      });
  });
  // const [newDate,setNewDate] = useState('')
  // const timeStamConverter = (birthDate) => {
  //   const date = new Date("1696132800000");
  //   console.log("the date is "+date)      
  //   return  date.toLocaleString('en-US', {  dateStyle: 'long'})  
  // };


  // useEffect(()=>{

  //   console.log("just a a test "+birthDate)

  //   timeStamConverter(birthDate)

  //   // console.log("just a a test after"+newDate)

   

//   // },[birthDate])
//   const timestamp = 1635183361000; // Replace this with your timestamp in milliseconds

// // Create a Date object from the timestamp
// const date = new Date(timestamp);




  return (
    <div className="mainApp__container">
      {/* <TimeStampToDate timeStamp={newBornData.birthdate} /> */}
      {auth ? (
        <>
          <h1>Welcome {name}</h1>
          <div className="profile__container">
            <Tile
              header={babyName}
              componentToRender={
                <AgeTile name={babyName.split(' ')[0]} birthday={birthDate}  />
                
              }
            />
            
            
            <Tile
              header="Create Book"
              componentToRender={
                <Link to={"bookbuilder/"}>
                  <p>Click Here to create your own Book</p>
                </Link>
              }
            />

            <Tile
              header="Book List"
              componentToRender={
                booksData && (
                  <div>
                    {booksData.map((book) => (
                      <>
                        <Link to={`viewbook/${book.id}`}>
                          <div>
                            {book.name} {book.description}{" "}
                            <img
                              src={"https://placehold.co/120x120?text=Book"}
                              className="profile__image"
                            />
                          </div>
                        </Link>
                      </>
                    ))}
                  </div>
                )
              }
            />
            <Tile header="Milestones" />
          </div>
        </>
      ) : (
        <>
          <>Login Now</>
        </>
      )}
    </div>
  );
}

export default Profile;
