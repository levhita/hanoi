const express = require('express')
const cors = require('cors')
const {solve} = require('./routes/solve')

const app = express()
const port = process.env.PORT || 3000

//Enable cors}
app.use(cors({
    origin: '*'
}))

// Route for React App
app.use(express.static('./frontend/build/'))

// Accept raw json
app.use(express.json())

// Route for API
app.post('/api/solve', (req, res) => solve(req, res))

app.get('/api/solve-custom', (req, res) => res.json({
    time: '32443',
    steps: [],
}))

app.listen(port, () => console.log(`Hanoi app listening on port ${port}!`))

