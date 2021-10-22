const express=require('express');
const app=express();
const port=3000;
app.get('/',(req,res)=>{
    res.send('Hello my first node')
})

app.listen(port,()=>{
    console.log('listening to the port',port);
})
/*
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log('listenin to node',port)
})*/