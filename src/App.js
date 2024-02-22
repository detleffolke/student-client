import React from 'react';
import './App.css';
import StudentList from './studentList';
import CreateStudent from './createStudent';

function App() {
  return (
      <div className="App">
        <StudentList />
        <CreateStudent />
      </div>
  );
}

export default App;
