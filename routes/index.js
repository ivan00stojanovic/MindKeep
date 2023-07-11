const express = require('express')
const router = express.Router()

//Description:  login/landing page
//Route: GET 
router.get('/', (req,res) => {
    res.send('Login')
})

//Description:            Dashboard
//Route: GET /dashboard
router.get('/dashboard', (req,res) => {
    res.send('Dashboard')
})

module.exports = router