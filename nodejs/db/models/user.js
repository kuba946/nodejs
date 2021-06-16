const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        validate(value) {
            if (value === 'Steve'){
                throw new Error('This is my name!')
            }
        },
        unique: true,
        lowercase: true
    },
    age: {
        type: Number,
        default: 18,
        min: 18
    }
})

userSchema.pre('save', function(next) {
    this.name += ' is the best!'
    ////
    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User 