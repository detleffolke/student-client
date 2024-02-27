// src/components/StudentCreate.js
import React, { useState } from 'react';
import axios from 'axios';
import './studentCreateHTML.css'; // Import CSS file for styling

const StudentCreate = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        // Your form submission logic using axios
    };

    return (
        <div>
            <h1>Create Student</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default StudentCreate;
