'use strict'
const express=require('express')
const bodyParser = require('body-parser')
const cors=require('cors')
const app=express()
const host="0.0.0.0"
const port =80
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.get('/',(req,res)=>{
   res.json('bdata rocks!')
})


app.listen(port, host, function(){
    console.log(`app running @http://${host}:${port}`)
})