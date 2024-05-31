const express = require('express')

const app = express()


app.get('/', (req, res) => {
    res.send('hello it is the get request')
})


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening to ${port}`)
})