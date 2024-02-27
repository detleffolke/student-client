import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StudentListHTML from './components/studentListHTML';
//const apiUrl = process.env.REACT_APP_API_URL
const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8080';
//const response = await axios.get(`${apiUrl}/api/data`);
const StudentList = () => {
    const [students, setStudents] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch student data when component mounts
        fetchStudents();
    }, []);
    const fetchStudents = async () => {
        try {
            const response = await axios.get(`${apiUrl}/api/student/getAll`);

            setStudents(response.data);
            setError(null);
        } catch (error) {
            console.error('Error fetching students: ', error);
            setError('An error occurred while fetching students.');
        }
    };

    return (
        <div>
            <h1>All Students</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {students.map(student => (
                    <li key={student.id}>{student.firstName} {student.lastName}</li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;
