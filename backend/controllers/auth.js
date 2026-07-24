const express = require('express')
const auth = express.Router()
const Emp = require('../models/empModel.js')

auth.get('/api/employees', async (req, res) => {
    const dbRes = await Emp.find()
    res.json(dbRes)
})
auth.post('/api/add', async (req, res) => {
    console.log(req.body);
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

auth.get('/api/employee/:id', async(req, res)=>{
    let id = req.params.id
    try{
        const empData = await Emp.findById({ _id:id})
        console.log(empData);
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