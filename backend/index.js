const express= require('express');

const app = express();
const bodyparser = require('body-parser')
const cors= require('cors')
require('dotenv').config();
require('./Models/db')

app.get("/",(req, resp)=>{
    resp.send("Hello bro");
})
app.use(bodyparser.json());
app.use(cors())


const PORT= process.env.PORT || 5000; 

app.listen(PORT,()=>{
    console.log(`server running on {PORT}`);
    
})
