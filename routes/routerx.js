const express = require('express');
//const path    = require('path');
const router  = express.Router();


const packDB = require('../database/dbform');
const Cocoa = require('../modelz/models');
const packModel = require('../modelz/models');


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


//post request here too
router.post('/contact', (req, res) =>{
    // database fusion with router; workable
    //let data = {
       // description: 'This is cocoa page',
        //purchase: 'purchase with Ghanaian cedis'
    //}
    let { name, companyName, contact_email, message} = req.body;

    Cocoa.insertMany({
        name, 
        companyName, 
        contact_email, 
        message
    })
    .then( cocoas => {
        console.log(cocoas)
        //maybe counld replace GET request rendering here AND 

        // Re-rendering of which PART.
        res.redirect('/')
    })
    .catch( (err) => {console.log(err)})

})

router.post('/api', (request, response) => {
    console.log(request.body);
    const data = request.body;
    const timeStamp = Date.now()
    

    //Here is inserting into the database and Adding
    Cocoa.insertMany( {
        data,
        timeStamp
    })
    .then(cocoas => {
        console.log(cocoas)
    })
    .catch( (err) => {console.log(err)})
})

///


module.exports = router;