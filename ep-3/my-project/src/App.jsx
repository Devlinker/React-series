import User from "./User.jsx";

function App(){

  const userdata = {
    name: " Kavin",
    age: " 21",
    email: "kavin@gmail.com",
    phone: "9876543210",
  }

  return (
  
 <>
  <h1>Hello world</h1>
  <User
  // name={userdata.name}
  // age={userdata.age}
  // phoneno={userdata.phone}
  // email={userdata.email} 

  {...userdata}

  />
 </>
 );
}

export default App;
