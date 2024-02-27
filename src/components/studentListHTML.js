// src/components/StudentListHTML.js
import React from 'react';
import './studentListHTML.css'; // Import CSS file for styling

const StudentListHTML = ({ students }) => {
    return (
        <div>
            <h1>All Students</h1>
            <ul>
                {students.map(student => (
                    <li key={student.id}>{student.firstName} {student.lastName}</li>
                ))}
            </ul>
        </div>
    );
};

export default StudentListHTML;
