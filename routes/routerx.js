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