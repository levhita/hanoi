const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// Route for React App
app.use(express.static('./frontend/build/'))

// Route for API
app.get('/api/', (req, res) => res.send('you are viewing the api'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
