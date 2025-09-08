const mongoose = require("mongoose");
const {Schema} = mongoose;
const Ticket = require("./tickets.js");

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    contact: {
        type:Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    bio: {
        type: String,
    },
    tickets: [
        {
            _id : false,
            type: Schema.Types.ObjectId,
            ref: "Ticket", //collection name   
        }
    ]
});

const User = mongoose.model("User",userSchema);
module.exports = User;





















// For initializing first data
// const user = async()=>{
//     let user1 = new User({
//     name: "Bharat",
//     email: "bharat.vips2023@gmail.com",
//     password: "abc@123",
//     contact: 9315000641,
//     address: "abc colony",
//     city: "delhi",
//     state: "New Delhi",
//     zip: 10016,
//     bio: "Hey there i am using this app",
//     })

//     let res = await user1.save();
//     console.log(res);
// }

// user();

