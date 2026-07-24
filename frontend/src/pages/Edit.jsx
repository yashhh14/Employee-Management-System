import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Form from '../components/Form.jsx'

const Edit = () => {
    const [data, setData] = useState([]);
    let param = useParams()
    let id = param.id
        
    return (
        <>
            <Form data={id}  />
        </>
    )
}

export default Edit