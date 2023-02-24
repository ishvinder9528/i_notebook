const connectToMongo= require('./db')
const express = require('express')
connectToMongo();

const app = express()
const port = 3000

// Available route
app.use('/api/auth', require('./routes/auth'))

app.listen(port, () => {
  console.log(`Connect on port http://localhost:${port}/api/auth`)
})