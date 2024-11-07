import React, { useState } from 'react';

const App = () => {
  let [add, setAdd] = useState(1);  

  let x = 1


  const handleadd = () => {
    setAdd((curentvalue) => {
      return curentvalue + 1;
    })
  }


  return (
    <div>
      <h1>{add}</h1>
      <button onClick={handleadd}>Add</button>
    </div>
  )
}


export default App;