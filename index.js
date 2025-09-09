const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const mongoose = require("mongoose");
const User = require("./models/user.js");
const Ticket = require("./models/tickets.js");
const methodOverride = require("method-override");

main()
    .then(()=>console.log("Database Connected"))
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/solar');
}



app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public/assets")));
app.use(methodOverride("_method"));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));



// Landing Page
app.get("/",(req,res)=>{
    res.render("index.ejs");
})

// Login Page 
app.get("/login",(req,res)=>{
    res.render("login.ejs");
})


// SignUp Page
app.get("/signup",(req,res)=>{
    res.render("signup.ejs");
})

// Adding Data from SignUp Page
app.post("/signup", async(req,res)=>{
    let {name,email,password,contact,address,city,state,zip,bio} = req.body;
    let user = await new User({name,email,password,contact,address,city,state,zip,bio});
    user.save();
    // console.log(req.body);
    // console.log(user);
    res.redirect("/login");
})


// Login in Dashboard
app.post("/user",async(req,res)=>{
    let {email:newEmail ,password:newPassword} = req.body;
    let user = await User.findOne({email:newEmail}).populate("tickets");
    if(newEmail === user.email && newPassword === user.password){
        console.log("inside if");
        console.log(user);
        res.render("userDashboard.ejs",{user}); 
    }
    else{
        res.send("Not Found");
    }
    // console.log(user);
    // console.log(req.body);
    
})

// Dashboard Page
app.get("/dashboard/:id", async(req,res)=>{
    let {id} = req.params;
    let user = await User.findById(id).populate("tickets");
    res.render("userDashboard.ejs",{user}); 
})


// Profile Page
app.get("/user/:id/profile",async(req,res)=>{
    let {id} = req.params;
    let user = await User.findById(id);
    // console.log(user);
    res.render("userProfile.ejs",{user});
})


// Edit Page
app.get("/user/:id/edit",async(req,res)=>{
    let {id} = req.params;
    let user = await User.findById(id);
    // console.log(user);
    res.render("userEdit.ejs",{user});
})

// Updating user Profile
app.put("/user/:id",async(req,res)=>{
    let {id} = req.params;
    let {name,email,password,contact,address,city,state,zip,bio} = req.body;
    let updatedUser = await User.findByIdAndUpdate(id,{name,email,password,contact,address,city,state,zip,bio},{new:true});
    // console.log(updatedUser);
    res.redirect(`/user/${id}/profile`);
})

// Tickets Page
app.get("/user/:id/tickets",async(req,res)=>{
    let{id} = req.params;
    let user = await User.findById(id).populate("tickets"); // Using populate so that data can be retrieved from the ticket model
    // console.log(user);
    res.render("userTickets.ejs",{user});
})

// Create ticket page
app.get("/user/:id/createTicket",async(req,res)=>{
    let{id} = req.params;
    let user = await User.findById(id);
    // console.log("Create ticket page");
    // console.log(user);
    res.render("userCreateTicket.ejs",{user});
})

// Adding Create ticket page Data into Database
app.post("/user/:id" ,async(req,res)=>{
    let {id} = req.params; // Extracting data from the url (user data)
    let{title: newTitle,issue_type,priority,description} = req.body;
    let ticket = await new Ticket({title: newTitle ,issue_type,priority,description,created_at: new Date()});
    let saveTicket = await ticket.save(); // saving the ticket data in the ticket database
    let user = await User.findById(id);
    user.tickets.push(saveTicket); // pushing the whole object in user (tickets array)
    await user.save();
    res.redirect(`/user/${id}/tickets`);
})

// Notification Page
app.get("/user/:id/notification",async(req,res)=>{
    let {id} = req.params; 
    let user = await User.findById(id);
    res.render("userNotification.ejs",{user});
})

// Live Chat Page
app.get("/user/:id/livechat",async(req,res)=>{
    let {id} = req.params; 
    let user = await User.findById(id);
    res.render("userLiveChat.ejs",{user});
})

// Knowledge Page
app.get("/user/:id/knowledge",async(req,res)=>{
    let {id} = req.params; 
    let user = await User.findById(id);
    res.render("userKnowledgeBase.ejs",{user});
})

// Payment Page
app.get("/user/:id/payment",async(req,res)=>{
    let {id} = req.params; 
    let user = await User.findById(id);
    res.render("userPayment.ejs",{user});
})

// Settings Page
app.get("/user/:id/settings",async(req,res)=>{
    let {id} = req.params; 
    let user = await User.findById(id);
    res.render("userSetting.ejs",{user});
})


app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})