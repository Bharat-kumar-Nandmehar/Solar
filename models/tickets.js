const mongoose = require("mongoose");
const {Schema} = mongoose;

const ticketsSchema =  new Schema({
    title: {
        type: String,
        required: true
    },
    issue_type: {
        type: String,
        required: true,
    },
    priority: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    attachment: {
        type: String
    },
    created_at: {
        type: Date,
        required: true,
    }
});

const Ticket = mongoose.model("Ticket",ticketsSchema);

module.exports = Ticket;

















const ticket = async()=>{
    let ticket1 = await new Ticket({
        title: "Solar Cleaning",
        issue_type: "Technical Problem",
        priority: "Medium",
        description: "This is a complaint raised for solar cleaning",
        created_at: new Date(),
    }) 
    let res = await ticket1.save();
    console.log(res);
}

// ticket();