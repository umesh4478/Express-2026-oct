const express= require('express');

const app = express();
const bodyparser = require('body-parser')
const cors= require('cors');
require('dotenv').config();
require('./Models/db')
const AuthRouter= require('./Routes/AuthRouter')

app.get("/",(req, resp)=>{
    resp.send("Hello bro");
})
app.use(bodyparser.json());
app.use(cors())
app.use('/Auth',AuthRouter)


const PORT= process.env.PORT || 5000; 

app.listen(PORT,()=>{
    console.log(`server running on {PORT}`);
    
})
