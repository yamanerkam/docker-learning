const express = require('express')

const app = express()
const PORT = 3000;


app.get('/', (req, res) => {
    res.send('hello it is the get request')
})

app.listen(PORT, () => {
    console.log(`listening to ${PORT}`)
})