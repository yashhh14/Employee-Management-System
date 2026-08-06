import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Form = (props) => {
    const id = props.data;
    const navigate = useNavigate();

    const emptyEmployee = {
        name: "",
        designation: "",
        department: "",
        email: "",
        phone: "",
        salary: "",
        address: "",
        joiningDate: ""
    };

    const [employee, setEmployee] = useState(emptyEmployee);

    const [details, setDetails] = useState(emptyEmployee);

    async function getData() {
        try {
            const apiRes = await axios.get(`https://employee-management-system-x9fx.onrender.com/api/employee/${id}`);
            setEmployee(apiRes.data.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (id !== "yash") {
            getData();
        }
    }, [id]);

    function handleInput(e) {
        const { name, value } = e.target;
        if (id === "yash") {
            setDetails({...details,[name]: value});
        } else {
            setEmployee({...employee,[name]: value
            });
        }
    }

    async function postData() {
        try {
            if (id === "yash") {
                await axios.post("https://employee-management-system-x9fx.onrender.com/api/add",details);
            } else {
                await axios.put(`https://employee-management-system-x9fx.onrender.com/api/edit/${id}`,employee);
            }
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="container mt-5">
            <div className="card shadow p-4 mx-auto" style={{ maxWidth: "700px" }}>
                <h2 className="text-center mb-4">
                    {id === "yash" ? "Add" : "Edit"} Employee
                </h2>
                <form>
                    <div className="mb-3">
                        <label className="form-label">
                            Full Name
                        </label>
                        <input type="text" name="name" className="form-control" placeholder="Enter employee name" value={ id === "yash" ? details.name : employee.name || ""} onChange={handleInput}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">
                            Email
                        </label>
                        <input type="email" name="email" className="form-control" placeholder="Enter email" value={ id === "yash" ? details.email : employee.email || "" } onChange={handleInput} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">
                            Phone Number
                        </label>
                        <input type="tel" name="phone" className="form-control" placeholder="Enter phone number" value={ id === "yash" ? details.phone : employee.phone || "" } onChange={handleInput} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">
                            Department
                        </label>
                        <select name="department" className="form-select" value={ id === "yash" ? details.department : employee.department || "" } onChange={handleInput} >
                            <option value="">
                                Select Department
                            </option>
                            <option value="IT">IT</option>
                            <option value="HR">HR</option>
                            <option value="Finance">Finance</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Sales">Sales</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">
                            Designation
                        </label>
                        <input type="text" name="designation" className="form-control" placeholder="Enter designation" value={ id === "yash" ? details.designation : employee.designation || "" } onChange={handleInput} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">
                            Salary
                        </label>
                        <input type="number" name="salary" className="form-control" placeholder="Enter salary" value={ id === "yash" ? details.salary : employee.salary || "" } onChange={handleInput} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">
                            Address
                        </label>
                        <textarea name="address" rows="3" className="form-control" placeholder="Enter address" value={ id === "yash" ? details.address : employee.address || "" } onChange={handleInput} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">
                            Joining Date
                        </label>
                        <input type="date" name="joiningDate" className="form-control" value={ id === "yash" ? details.joiningDate : employee.joiningDate || "" } onChange={handleInput} />
                    </div>
                    <button type="button" className="btn btn-primary w-100" onClick={postData} > {id === "yash" ? "Add Employee" : "Save Changes"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;