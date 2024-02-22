import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/student/getAll')
            .then(response => {
                setStudents(response.data);
            })
            .catch(error => {
                console.error('Error fetching students: ', error);
            });
    }, []);

    return (
        <div>
            <h1>All Students</h1>
            <ul>
                {students.map(student => (
                    <li key={student.id}>
                        {student.firstName} {student.lastName}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;
