const express = require('express')

const app = express()


app.get('/', (req, res) => {
    res.send('hello it is the get request')
})

app.get('/docker', (req, res) => {
    res.send('docker get req')
})

app.get('/docker/:id', (req, res) => {
    res.send(`get req id: ${req.params.id}`)
})


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening to ${port}`)
})