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
router.get( '/corps', (req, res) =>{
    res.render('corps')
})

router.get( '/cream', (req, res) =>{
    res.render('cream.ejs')
})

router.get( '/bean', (req, res) =>{
    res.render('beans')
})

//router.get( '/butter', (req, res) =>{
  //  res.render('butters')
//})





module.exports = router;