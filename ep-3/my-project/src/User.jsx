import React from 'react'

function User( { name, age, phone, email}) {
  return (
    <>
    <h1>{name}</h1>
    <h2>{age}</h2>
    <h2>{phone}</h2>
    <h2>{email}</h2>
    </>
  );
};

export default User