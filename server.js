const express= require('express')
const cors=require('cors')

const app=express()

app.use(cors('*'))
app.use(express.json())



const movieRouter=require('./books')
app.use('/',movieRouter);
app.listen(17000, '0.0.0.0', () => {
    console.log('server started on port 17000')
  })