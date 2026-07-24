import React from 'react'
import Card from '../components/Card';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


const Home = () => {
    const [data, setData] = useState([]);

    async function getData() {
        try {
            const apiRes = await axios.get("https://employee-management-system-cfk8.onrender.com/api/employees");
            setData(apiRes.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getData();
    }, [data]);

    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    {data.map((emp) => (
                        <div className="col-md-4 mb-3" key={emp._id}>
                            <Card data={emp} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home