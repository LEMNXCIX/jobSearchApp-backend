const express = require('express')
const PORT = 4000 // TODO esto habria que ponerlo en el .env
const app = express()

// server listening
app.listen(PORT, ()=>{
  console.log('listening on port '+PORT)
})
