const express = require('express')
const app = express()

const dogs = ['Doggo', 'Pupper', 'Woofer']

app.get('/api/dogs', (req, res) => {
  // Send the dogs back to the user
  res.send(dogs)
})

app.listen(3001, () => console.log('Example app listening on port 3000!'))