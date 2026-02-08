import express from 'express'
import ENV from './lib/env.js';

const app = express();

app.get('/',(req,res)=>{
    res.status(200).json({msg:"Success from the api"})
})

app.listen(ENV.PORT, ()=>{
    console.log("Server is runnning on a port",ENV.PORT)
})