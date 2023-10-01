import React from 'react';
import ImageUpload from '../../components/ImageUpload/ImageUpload';
import {useParams} from 'react-router-dom'



function Profile() {
const {userId} = useParams()
console.log("The Params "+userId)
  return (
    <div>
      <h1>Profile Page</h1>
      <p>Welcome User</p>
      <ImageUpload userId={userId}/>
      <p>Profile for blah here are your books</p>
    </div>
  );
}

export default Profile;