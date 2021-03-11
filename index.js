require('dotenv').config()
const path = require('path')
const express = require('express')

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, 'client/build')))
if(process.env.NODE_ENV === "development"){
    const cors = require('cors')
    server.use(cors())
}
server.use('/api/hello', (req,res) => {
    res.json({message:"hello"})
})
server.get('/*', (req,res) => {
    res.send("<h1>404 request URL not found</h1>")

})

server.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'client/build', "index.html"))

})

const PORT = process.env.PORT || 4000
server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})