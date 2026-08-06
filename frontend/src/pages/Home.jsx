import React from 'react'
import Card from '../components/Card';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


const Home = () => {
    const [data, setData] = useState([]);

    async function getData() {
        try {
            const apiRes = await axios.get("https://employee-management-system-x9fx.onrender.com/api/employees");
            setData(apiRes.data);
        } catch (err) {
            console.log(err);
        }
    }

    async function handleInput(e) {
        let id = e.target.value
        try {
            const apiRes = await axios.get(`https://employee-management-system-x9fx.onrender.com/api/filters/${id}`);
            setData(apiRes.data);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className="container mt-4">
                <div className="w-25 mb-2 d-flex">
                    <label htmlFor="select" className='w-100'>Select Department</label>
                    <select name="department" onChange={(e) => handleInput(e)} className="form-select">
                        <option>All</option>
                        <option>IT</option>
                        <option>HR</option>
                        <option>Finance</option>
                        <option>Marketing</option>
                        <option>Sales</option>
                    </select>
                </div>
                <div className="row">
                    {data.map((emp) => (
                        <div className="col-md-4 mb-3" key={emp._id}>
                            <Card data={emp} refresh={getData} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home