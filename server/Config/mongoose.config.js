const mongoose = require ("mongoose");

// this line enables validators to run on update
//mongoose.set("runValidators", true);

mongoose.connect('mongodb://localhost/authorsDB',{
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(res => console.log("Database connection established!"))
    .catch((err) => console.log("Error occurred when attempting to connect to DB: ", err))