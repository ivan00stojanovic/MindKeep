const express = require('express')
const router = express.Router()

//Description:  login/landing page
//Route: GET 
router.get('/', (req,res) => {
    res.render('login',{
        layout: 'login',
    })
    
})

//Description:            Dashboard
//Route: GET /dashboard
router.get('/dashboard', (req,res) => {
    res.render('dashboard')
})

module.exports = router