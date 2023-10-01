import React from 'react';
import {useParams, Link} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';



function Profile() {

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Welcome User</p>
      <Link to={"book/"+uuidv4()}>
      <p>Click Here to create your own Book</p>
      </Link>

      <p>Profile for blah here are your books</p>
    </div>
  );
}

export default Profile;