const express = require("express");
const { connect } = require("mongoose");
const connectToDb = require("./src/config/db");
const app = express();

require('dotenv').config();

const db_url = process.env.DB_URL
const PORT = process.env.PORT || 80085;



app.get("/", (req, res) => {
    res.send("This is a practice assigment of the api deployement 1")
})

app.listen(PORT, async() => {
    try{

        await connectToDb(db_url)
        console.log(`Server is connected successfully`);
        console.log(`Database is connected successfully`)

    }
    catch(err){
        console.log(err)
    }
})