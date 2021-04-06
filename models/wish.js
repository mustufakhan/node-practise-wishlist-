const mongoose = require('mongoose')
const Schema = mongoose.Schema

const WishSchema = Schema({
    wish: String
})

// module.exports = mongoose.model("wished",WishSchema)
mongoose.model("wishes",WishSchema)