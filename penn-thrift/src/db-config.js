const mongoose = require('mongoose');
require('dotenv').config();

const url = "mongodb+srv://alexscott:" + 
process.env.MONGO_ATLAS_PW + 
"@pennthriftbackend.stiff.mongodb.net/PennThriftBackend?retryWrites=true&w=majority"

const conn = mongoose.connect(url, () => console.log('DB connected!'), {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = conn;