const express = require('express');
//const path    = require('path');
const router  = express.Router();


//get request here
router.get('/', (request, response) => {
	//
	response.render('index')
})

router.get( '/about', (req, res) =>{  
    res.render('about')
})

router.get('/contact', (req, res) =>{
    res.render('contact');
})


//SubRouters
router.get( '/corp', (req, res) =>{
    res.render('corp')
})
router.get( '/bean', (req, res) =>{
    res.render('beans')
})



module.exports = router;