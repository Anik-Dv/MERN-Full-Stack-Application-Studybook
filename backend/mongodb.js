const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/studybook"

const ConnectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected mongodb successfully");
    })
}

module.exports = ConnectToMongo;