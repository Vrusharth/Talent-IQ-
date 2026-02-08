import express from 'express'
import ENV from './lib/env.js';
import path from 'path'
const app = express();

const __dirname=path.resolve()

app.get('/health',(req,res)=>{
    res.status(200).json({msg:"Success from the api"})
})

app.get('/books',(req,res)=>{
    res.status(200).json({msg:"Success from the api Books"})
})

if(ENV.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, "../Client/dist")))

    app.get("/{any}", (req,res)=>{
        res.sendFile(path.join(__dirname, "../Client","dist","index.html"))
    })
}

app.listen(ENV.PORT, ()=>{
    console.log("Server is runnning on a port",ENV.PORT)
})