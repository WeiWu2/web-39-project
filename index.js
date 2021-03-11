require('dotenv').config()
const express = require('express')

const server = express()
server.use(express.json())

if(process.env.NODE_ENV === "devlopment"){
    const cors = require('cors')
    server.use(cors())
}

server.use('*', (req,res) => {
    res.send('<h2>somethingsomething</h2>')

})

const PORT = process.env.PORT || 4000
server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})