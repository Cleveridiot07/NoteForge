import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import AddNote from './components/AddNote/AddNote';
import AddNoteForm from './components/AddNote/AddNoteForm';
import CloseAddNote from './components/AddNote/CloseAddNote';
import EditNoteForm from './components/EditNote/EditNoteForm';

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
