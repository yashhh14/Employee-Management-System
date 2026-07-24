import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({data}) => {
    async function deleteEmp(e){
        const id = e.target.name
        try {
            await axios.delete(`http://localhost:8080/api/employee/${id}`);
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="card shadow-sm border-0 h-100 bg-secondary">
            <div className="card-body text-center">
                <h5 className="card-title">{data.name}</h5>
                <p className="text-muted mb-1">{data.designation}</p>
                <hr />
                <p className="mb-2">
                    <strong>Department:</strong> {data.department}
                </p>
                <p className="mb-2">
                    <strong>Email:</strong> {data.email}
                </p>
                <p className="mb-2">
                    <strong>Phone:</strong> {data.phone}
                </p>
                <p className="mb-3">
                    <strong>Salary:</strong> ₹{data.salary}
                </p>
                <div className="d-flex justify-content-center gap-2">
                    <NavLink to={`/edit/${data._id}`} className="btn btn-warning btn-sm w-50" >
                        Edit
                    </NavLink>
                    <button className="btn btn-danger btn-sm w-50" name={data._id} onClick={(e)=>deleteEmp(e)}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card