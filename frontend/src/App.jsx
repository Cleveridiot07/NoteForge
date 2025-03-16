import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './pages/SignUp/SignUp.jsx';
import Login from './pages/Login/Login.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './pages/Home/Home.jsx';
import AddNote from './components/AddNote/AddNote.jsx';
import AddNoteForm from './components/AddNote/AddNoteForm.jsx';
import CloseAddNote from './components/AddNote/CloseAddNote.jsx';

const App = () => {
  const [addNoteOpen, setAddNoteOpen] = useState(false);

  const handleAddNoteClick = () => {
    setAddNoteOpen(true);
  };

  const handleCloseAddNote = () => {
    
    setAddNoteOpen(false);
    window.location.reload();
  };

  return (
    <Router>
      <Navbar />
      <div className='h-[10vh] bg-gray-900'></div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Navigate to="/home" />} /> {/* Redirect to /home for all other URLs */}
      </Routes>

      {addNoteOpen && <CloseAddNote CloseAddForm={handleCloseAddNote} />}
      {!addNoteOpen && <AddNote onClick={handleAddNoteClick} />}
      {addNoteOpen && <AddNoteForm CloseAddForm={handleCloseAddNote} />}
    </Router>
  );
}

export default App;
