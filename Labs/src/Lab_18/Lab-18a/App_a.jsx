import { useState } from 'react'
import A from "./A"

function App_a() {
    const [name,setName]=useState("");
  return (
    <>
      <A name={name} setName={setName}/>
    
    </>
  )
}

export default App_a
