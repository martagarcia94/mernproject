const mongoose = require('mongoose')
const citySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    country: {
        type: String,
        require: true
    },
    img: {
        type: String,
        require: true
    },
    population:{
        type: Number,
        require: false
    }
})


module.exports = mongoose.model('cities', citySchema)