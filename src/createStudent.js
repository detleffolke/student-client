import React, { useState } from 'react';
import axios from 'axios';

const CreateStudent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async e => {
        e.preventDefault();

        // Client-side validation
        if (!firstName.trim() || !lastName.trim()) {
            setError('First name and last name are required.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/student/create', {
                firstName: firstName.trim(),
                lastName: lastName.trim()
            });
            console.log('Student created:', response.data);
            setFirstName('');
            setLastName('');
            setError(null);
        } catch (error) {
            console.error('Error creating student: ', error);
            setError(error.response.data.message || 'An error occurred while creating the student.');
        }
    };

    return (
        <div>
            <h1>Create Student</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
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

export default CreateStudent;
