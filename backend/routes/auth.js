const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    let obj={
        name:'ishu',
        number:43,
    }
    res.json(obj)
})

module.exports = router;