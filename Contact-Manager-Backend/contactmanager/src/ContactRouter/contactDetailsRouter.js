const Router = require('express').Router();
const bodyParser = require('body-parser');
const ContactsModel = require('../Models/ContactSchema');
contactRouter.use(bodyParser.json());

contactRouter.get("/Contacts",async(req,res)=>{
    try{
        const user = await ContactsModel.find({userId:req.user});
        if(user.length)
        res.status(200).json({
            status: "Success",
            user
        })
        else
        res.status(400).json({
            status : "Failed"
        })
    }catch(e){
        res.status(400).json({
            status : "Failed"
        })
    }
});

contactRouter.get("/Contacts/:email", async(req,res)=>{
    try{
        const user = await ContactsModel.findOne({Email:req.params.email});
        if(user.Email)
        res.status(200).json({
            status : "Success",
            user
        })
        else
        res.status(404).json({
            status : "Failed",
            message : "user does not exists"
        })
    }
    catch(e){
        res.status(400).json({
            status : "Failed",
            message : e.message
        })      
    }
})