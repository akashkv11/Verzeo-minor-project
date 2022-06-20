const express = require("express")
const app = express()
const fs = require("fs")
const path = require("path")



fs.readFile(__dirname+"/index.html","utf-8",(err,data) => {
    if(err){
        throw err
    }
    // console.log(data)
})
app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname+"/index.html"))
})

app.use(express.static('public'))





app.listen(3000,()=>console.log("Server started..."))    
