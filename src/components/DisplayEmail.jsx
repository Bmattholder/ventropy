import React from 'react';

function DisplayEmail({ updateData }) {
  return (
    <div className='ticket'>
      <h1>From DisplayEmail Component:</h1>
      <h4>Your email is: {updateData.email}</h4>
    </div>
  );
}

export default DisplayEmail;
