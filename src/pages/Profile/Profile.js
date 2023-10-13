import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import "./Profile.scss";
import Tile from "../../components/Tile/Tile";
import AgeTile from "../../components/AgeTile/AgeTile";
import TimeStampToDate from "../../components/TimeStampToDate/TimeStampToDate";
import Milestones from "../../components/Milestones/Milestones";
import oneMonth from '../../assets/milestones/1.png'
import twoMonth from '../../assets/milestones/2.png'
import threeMonth from '../../assets/milestones/3.png'
import fourMonth from '../../assets/milestones/4.png'
import fiveMonth from '../../assets/milestones/5.png'
import sixMonth from '../../assets/milestones/6.png'
import sevenMonth from '../../assets/milestones/7.png'
import eightMonth from '../../assets/milestones/8.png'
import nineMonth from '../../assets/milestones/9.png'
import tenMonth from '../../assets/milestones/10.png'
import elevenMonth from '../../assets/milestones/11.png'
import twelveMonth from '../../assets/milestones/12.png'

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
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
 const profileName = capitalizeFirstLetter(name);


const containsSpace = babyName || [];

  return (
    <div className="mainApp__container">
      {/* <TimeStampToDate timeStamp={newBornData.birthdate} /> */}
      {auth ? (
        <>
          <h1>Welcome {profileName}</h1>
          <div className="profile__container">
            {containsSpace.includes(' ') ? (<Tile
              header={babyName}
              componentToRender={
                <AgeTile name={babyName.split(' ')[0]} birthday={birthDate}  />
                
              }
            />):(<Tile
              header={"Example Mr + Mrs"}
              componentToRender={
                "Married for 12 Years" }
            />)}
            {/* <Tile
              header={babyName}
              componentToRender={
                <AgeTile name={babyName.split(' ')[0]} birthday={birthDate}  />
                
              }
            /> */}
            
            
            <Tile
              header="Create Book"
              componentToRender={
                <Link to={"bookbuilder/"}>
                  <button className="rounded-button">Create your own Book</button>
                </Link>
              }
            />

            <Tile
              header="Book List"
              componentToRender={
                booksData && (
                  <div className="profile__bookListContainer">
                    {booksData.map((book) => (
                      <div className="profile__bookList">
                        <Link to={`viewbook/${book.id}`}>
                          
                           <div className="profile__book" ><img
                              src={"https://placehold.co/120x120?text=Book"}
                              className="profile__image"
                            />{book.name} {book.description}{" "}</div> 
                            
                          
                        </Link>
                      </div>
                    ))}
                  </div>
                )
              }
            />
            <Tile header="Milestones" componentToRender={
              <div className="profile__milestones">
              <Milestones text="first Month" img={oneMonth} />
              <Milestones text="first Month" img={twoMonth} />
              <Milestones text="first Month" img={threeMonth} />
              <Milestones text="first Month" img={fourMonth} />
              <Milestones text="first Month" img={fiveMonth} />
              <Milestones text="first Month" img={sixMonth} />
              <Milestones text="first Month" img={sevenMonth} />
              <Milestones text="first Month" img={eightMonth} />
              <Milestones text="first Month" img={nineMonth} />
              <Milestones text="first Month" img={tenMonth} />
              <Milestones text="first Month" img={elevenMonth} />
              <Milestones text="first Month" img={twelveMonth} />
              </div>
              
              
           
            } />
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
