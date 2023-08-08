const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// Route for React App
app.use(express.static('./frontend/build/'))

// Accept raw json
app.use(express.json());

// Route for API
app.get('/api/solve', (req, res) => res.json({
    time: '32443',
    steps: [],
}))

app.get('/api/solve-custom', (req, res) => res.json({
    time: '32443',
    steps: [],
}))

app.listen(port, () => console.log(`Hanoi app listening on port ${port}!`))

