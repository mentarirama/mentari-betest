const mongoose = require('mongoose')

const validateEmail = (email) => {
var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const testSchema = mongoose.Schema({
    id:{
        type: Number,
        require: true
    },
    userName: {
        type: String,
        require: true,
        minlength: 3,
        trim: true
    },
    accountNumber: {
        type: Number,
        require: true
    },
    emailAddress: {
        type: String,
        require: true,
        validate: [validateEmail, 'Please fill a valid email address'],
        trim: true
    },
    identityNumber: {
        type: Number,
        require: true
    }
})

module.exports = mongoose.model('user', testSchema)

