
const router = require('express').Router();

 

router.post('/login',(req, resp)=>{
    resp.send('Login Successfully')
})

router.post('/signup',(req, resp)=>{
    resp.send('Signup Successfully')
})

module.exports= router;