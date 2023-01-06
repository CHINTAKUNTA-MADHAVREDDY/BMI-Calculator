const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017')
.then(()=>{
    console.log('Connected to db')
}).catch(e=>console.log(e))


const ContactSchema = new mongoose.Schema({
    Name: { type: String },
    Designation: { type: String },
    Company: { type: String },
    Industry: { type: String },
    Email: { type: String },
    PhoneNumber: { type: String },
    Country: { type: String },
    userId: { type: String, ref: "Signin model" }
});

const ContactsModel = new mongoose.model("Contacts",ContactSchema);
module.exports = ContactsModel;