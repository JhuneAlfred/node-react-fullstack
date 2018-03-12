const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send({ bye: 'bye ms american pie' })
})

const PORT = process.env.PORT || 5000
app.listen(PORT)
