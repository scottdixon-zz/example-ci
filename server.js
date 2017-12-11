const express = require('express')
const app = express()

const dogs = ['Doggo', 'Pupper', 'Woofer']
const owners = ['John', 'Sam', '']

app.get('/api/dogs', (req, res) => res.send(dogs))

app.get('/api/owners', (req, res) => res.send(owners))


app.listen(3001, () => console.log('Example app listening on port 3000!'))