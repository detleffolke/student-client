import React, { useState } from 'react';
import axios from 'axios';

const CreateStudent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [error, setError] = useState(null); // State for storing error message

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/student/create', { firstName, lastName })
            .then(response => {
                console.log('Student created:', response.data);
                // Reset form after successful submission
                setFirstName('');
                setLastName('');
                // Clear any previous error messages
                setError(null);
            })
            .catch(error => {
                console.error('Error creating student: ', error);
                // Set the error state with the error message received from the server
                setError(error.message || 'An error occurred while creating the student.');
            });
    };

    return (
        <div>
            <h1>Create Student</h1>
            {/* Display error message if error state is not null */}
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
