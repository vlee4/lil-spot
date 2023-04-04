import React, {useEffect, useState} from 'react'
import axios from 'axios'

function App() {

  const [info, setInfo] = useState("")

  useEffect(()=>{
   async function fetchSpotifyData() {
    console.log('here??')
     const {data} = await axios.get("http://localhost:3000/api/spotify")
     setInfo(JSON.stringify(data))
     console.log("response", JSON.stringify(data))
   }
   fetchSpotifyData()

  }, [])

  return (
    <div>Hello React App!
      <div>Artist data</div>
      <div>{info? info: "Loading..." }</div>
    </div>
  )
}

export default App