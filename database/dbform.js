const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI || " mongodb+srv://cocoaUser:cocoaUser123@cluster0.k7cda.mongodb.net/cocoaDatabase " ; //No evn straight to Config

module.exports = async function () {
    try { 
        let db = await mongoose.connect( MONGODB_URI , { 
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        })
        console.log("connected to database");
        return db;
    } catch (e) {
        console.log(e);
        return;
        throw Error("Error connecting to server!")
    }
}