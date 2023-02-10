import React from 'react';

function DisplayName({ updateData }) {
  return (
    <div className='ticket'>
      <h1>From DisplayName Component:</h1>
      <h4>Your name is: {updateData.name}</h4>
    </div>
  );
}

export default DisplayName;
