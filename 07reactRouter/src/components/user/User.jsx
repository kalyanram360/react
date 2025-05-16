import React from 'react';
import { useParams } from 'react-router-dom';


function User() {
    const userId = useParams().userId;
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>
      <p className="text-lg text-gray-700">
        Welcome to the User Profile page. Here you can view and edit your profile information.
        {userId}
      </p>
    </div>
  );
}


export default User;