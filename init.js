// For inserting Multiple users for testing Purpose
const mongoose = require("mongoose");
const User = require("./models/user.js");


// main()
//     .then(()=>{
//         console.log("Database Connected");
//     })
//     .catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/solar');
// }

const users = async()=>{
    let multiUser = await User.insertMany([
        {
        "name": "Aarav Sharma",
        "email": "aarav.sharma@gmail.com",
        "password": "pass@123",
        "contact": 9876543210,
        "address": "45 Green Park",
        "city": "Delhi",
        "state": "Delhi",
        "zip": 110016,
        "bio": "Tech enthusiast and coffee lover"
    },
    {
        "name": "Priya Singh",
        "email": "priya.singh@yahoo.com",
        "password": "priya@456",
        "contact": 9811122233,
        "address": "12 Rose Garden",
        "city": "Mumbai",
        "state": "Maharashtra",
        "zip": 400001,
        "bio": "Loves painting and traveling"
    },
    {
        "name": "Rohit Kumar",
        "email": "rohit.kumar@outlook.com",
        "password": "Frohit@789",
        "contact": 9912345678,
        "address": "88 Nehru Nagar",
        "city": "Lucknow",
        "state": "Uttar Pradesh",
        "zip": 226001,
        "bio": "Fitness freak and foodie"
    },
    {
        "name": "Sneha Gupta",
        "email": "sneha.gupta@gmail.com",
        "password": "sneha@321",
        "contact": 9876001234,
        "address": "77 Lake View",
        "city": "Bangalore",
        "state": "Karnataka",
        "zip": 560001,
        "bio": "Dreamer, coder, traveler"
    },
    {
        "name": "Karan Mehta",
        "email": "karan.mehta@gmail.com",
        "password": "karan@654",
        "contact": 9812345671,
        "address": "23 Sector 18",
        "city": "Noida",
        "state": "Uttar Pradesh",
        "zip": 201301,
        "bio": "Always learning something new"
    },
    {
        "name": "Ananya Verma",
        "email": "ananya.verma@gmail.com",
        "password": "ananya@987",
        "contact": 9875009876,
        "address": "12 Gandhi Road",
        "city": "Chennai",
        "state": "Tamil Nadu",
        "zip": 600001,
        "bio": "Bookworm and aspiring writer"
    },
    {
        "name": "Vikram Chauhan",
        "email": "vikram.chauhan@hotmail.com",
        "password": "vikram@111",
        "contact": 9123456780,
        "address": "67 Civil Lines",
        "city": "Jaipur",
        "state": "Rajasthan",
        "zip": 302001,
        "bio": "History buff and photographer"
    },
    {
        "name": "Meera Nair",
        "email": "meera.nair@gmail.com",
        "password": "meera@222",
        "contact": 9876541000,
        "address": "56 MG Road",
        "city": "Kochi",
        "state": "Kerala",
        "zip": 682001,
        "bio": "Nature lover and foodie"
    },
    {
        "name": "Arjun Reddy",
        "email": "arjun.reddy@gmail.com",
        "password": "arjun@333",
        "contact": 9988776655,
        "address": "34 Jubilee Hills",
        "city": "Hyderabad",
        "state": "Telangana",
        "zip": 500033,
        "bio": "Gamer and movie buff"
    },
    {
        "name": "Simran Kaur",
        "email": "simran.kaur@gmail.com",
        "password": "simran@444",
        "contact": 9876123456,
        "address": "89 Model Town",
        "city": "Amritsar",
        "state": "Punjab",
        "zip": 143001,
        "bio": "Love music and dance"
    }
    ])

    console.log(multiUser);
}

users(); 