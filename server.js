require('dotenv').config()
const express = require('express');
const cors = require('cors');
const path = require('path');
const axios = require('axios');

const PORT = process.env.PORT || 5000;

const app = express();
//parse requests with JSON payloads
app.use(express.json())
//enables cors for all reqs by cors middleware
app.use(cors())

app.get("/", (req, res)=> {
    console.log("here!!")
    res.sendFile(path.join(__dirname+'/public/index.html'))
})

//Note: SPOTIFY_URL is hardcoded to hit the "Get Artist" endpoint on Spotify for "Radiohead"
app.get("/api/spotify", async (req, res)=> {
    console.log("hit spotify route")
    try{
        const url = process.env.SPOTIFY_URL
        const token = process.env.SPOTIFY_ACCESS_TOKEN
      
        const {data} = await axios.get(url, {
          headers: {
              "Authorization": `Bearer ${token}`
          }
        })

        res.send(data)
    } catch(error){
        console.log("Error getting Spotify response:", error)
        res.end()
    }
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})