import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

const Form = (props) => {
    const id = props.data 
    
    let [employee, setEmployee] = useState({})

    async function getData() {
        try {
            const apiRes = await axios.get(`http://localhost:8080/api/employee/${id}`);
            setEmployee(apiRes.data.data)
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getData();
    }, []);

    if(id=="yash"){
        employee = {
        name: "",
        designation: "",
        department: "",
        email: "",
        phone: "",
        salary: ""
        }
    }

    let [details, setDetails] = useState({
        name: "",
        designation: "",
        department: "",
        email: "",
        phone: "",
        salary: ""
    })
    async function postData() {
        try {
            if(id=="yash"){
                const apiRes = await axios.post('http://localhost:8080/api/add',details)

            }else{
                const apiRes = await axios.put(`http://localhost:8080/api/edit/${id}`, employee)
            }
        } catch (err) {
            console.log(err);
        }
    }
    function handleInput(e) {
        if(id == "yash"){
            setDetails({ ...details, [e.target.name]: e.target.value })
        }else{
            setEmployee({ ...employee, [e.target.name]: e.target.value })
        }
    }
    return (
        <div className="container mt-5">
            <div className="card shadow p-4 mx-auto" style={{ maxWidth: "700px" }}>
                <h2 className="text-center mb-4">{id=="yash"?"Add":"Edit"} Employee</h2>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input type="text" name='name' className="form-control" value={ id=="yash"? details.name: employee.name }  placeholder="Enter employee name" onChange={(e)=> handleInput(e)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" name='email' className="form-control" value={ id=="yash"? details.email: employee.email} placeholder="Enter email" onChange={(e)=> handleInput(e)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Phone Number</label>
                        <input type="tel" name='phone' className="form-control" value={ id=="yash"? details.phone:employee.phone} placeholder="Enter phone number" onChange={(e)=> handleInput(e)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Department</label>
                        <select name="department" className="form-select" value={id=="yash"? details.department:employee.department} onChange={(e)=> handleInput(e)}>
                            <option >Select Department</option>
                            <option>IT</option>
                            <option>HR</option>
                            <option>Finance</option>
                            <option>Marketing</option>
                            <option>Sales</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Designation</label>
                        <input name='designation' type="text" className="form-control" value={id=="yash"? details.designation:employee.designation} placeholder="Enter designation" onChange={(e) => handleInput(e)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Salary</label>
                        <input name='salary' type="number" className="form-control" value={id=="yash"? details.salary:employee.salary} placeholder="Enter salary" onChange={(e) => handleInput(e)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Address</label>
                        <textarea name='address' className="form-control" rows="3" value={id=="yash"? details.address:employee.address} placeholder="Enter address" onChange={(e) => handleInput(e)} ></textarea>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Joining Date</label>
                        <input name='joiningDate' type="date" value={id=="yash"? details.joiningDate:employee.joiningDate} className="form-control" onChange={(e) => handleInput(e)} />
                    </div>
                    <NavLink className="btn btn-primary w-100" onClick={postData} type="submit" to='/'>
                        {id=="yash"?"Add Employee":"Save"} 
                    </NavLink>
                </form>
            </div>
        </div>
    );
}

export default Form