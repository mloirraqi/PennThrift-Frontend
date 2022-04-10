const mongoose = require('mongoose');
require('dotenv').config();

const url = "mongodb+srv://alexscott:" + 
process.env.MONGO_ATLAS_PW + 
"@pennthriftbackend.stiff.mongodb.net/PennThriftBackend?retryWrites=true&w=majority"

const conn = mongoose.connect(url, () => console.log('DB connected!'), {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// const conn = mongoose.connection;

// connection.once('open', () => {
//     console.log("DB connected.");
// });

module.exports = conn;