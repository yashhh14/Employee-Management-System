const express = require('express')
const auth = express.Router()
const Emp = require('../models/empModel.js')

auth.get('/api/employees', async (req, res) => {
    const dbRes = await Emp.find()
    res.json(dbRes)
})
auth.get('/api/employee/:id', async(req, res)=>{
    let id = req.params.id
    try{
        const empData = await Emp.findById({ _id: id });
        res.status(201).json({
            data : empData
        })
    }catch(err){
        console.log(err.message);
        res.status(409).json({
            err : err.message
        })
    }
})
auth.get('/api/filters/:id', async(req, res)=>{
    let id = req.params.id
    try{
        if(id=="All"){
            const empData = await Emp.find();
            res.status(201).json(empData)
        }
        else{
            const empData = await Emp.find({ department:id });
            res.status(201).json(empData)
        }
    }catch(err){
        console.log(err.message);
        res.status(409).json({
            err : err.message
        })
    }
})
auth.post('/api/add', async (req, res) => {
    try {
        await Emp.create(req.body)
        res.status(201).json({
            message: "employee created successfully",
            emp: req.body
        })
    } catch (err) {
        res.json({
            error: err.message
        })
    }
})


auth.put('/api/edit/:id', async(req, res) => {
    let id = req.params.id
    try {
        await Emp.findByIdAndUpdate(id,req.body)
        res.status(201).json({
            message: "employee updated successfully",
            emp: req.body
        })
    }catch(err){
        res.json({
            err:err.message
        })
    }
})
auth.delete('/api/employee/:id', async(req, res) => {
    let id = req.params.id
    try {
        await Emp.findByIdAndDelete(id)
        res.status(201).json({
            message: "employee updated successfully",
            emp: req.body
        })
    }catch(err){
        res.json({
            err:err.message
        })
    }
})
module.exports = auth