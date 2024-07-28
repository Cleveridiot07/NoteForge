import React, { useState, useEffect } from 'react';
import EditNoteForm from '../../components/EditNote/EditNoteForm';
import Alert from '../../components/Alert/Alert';
import { fetchNotes } from '../../api'; // Assuming you have an API function to fetch notes
import { useNavigate } from 'react-router-dom';
import Note from '../../components/Note/Note';

const Home = () => {
  const [editNoteOpen, setEditNoteOpen] = useState(false);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentContent, setCurrentContent] = useState("");
  const [currentId, setCurrentId] = useState("");
  const [notesList, setNotesList] = useState([]);
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNotesFromApi = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setAlert({ message: 'Login required. Redirecting to login page', type: 'error' });
          return;
        }
        const notes = await fetchNotes();
        if (notes.message === 'Token is not valid') {
          localStorage.removeItem('token');
          setAlert({ message: 'Session Expired Redirecting to login page', type: 'error' });
          navigate("/login");
          return;
        }
        setNotesList(notes);
      } catch (error) {
        console.error('Error fetching notes:', error);
        if (error.response && error.response.status === 401) {
          localStorage.removeItem('token');
          navigate("/login");
        }
        setAlert({ message: 'Failed to fetch notes. Please try again later.', type: 'error' });
      }
    };

    fetchNotesFromApi();
  }, [navigate]);

  const handleNoteEdit = (id, title, content) => {
    setCurrentId(id);
    setCurrentTitle(title);
    setCurrentContent(content);
    setEditNoteOpen(true);
  }

  const handleCloseEditNote = () => {
    setEditNoteOpen(false);
    window.location.reload();
  };

  const handleAlertClose = () => {
    setAlert(null);
    navigate("/home"); // Redirect to home after closing alert
  };

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => {
        setAlert(null);
        navigate("/login"); // Automatically redirect to home after 5 seconds
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [alert, navigate]);

  return (
    <>
      <div className="mt-15 max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          {alert && (
            <div className='z-50'>
            <Alert message={alert.message} type={alert.type} onClose={handleAlertClose} />
            </div>
          )}
          {notesList.map((element, index) => (
            <Note
              key={index}
              handleNoteEdit={handleNoteEdit}
              Noteid={element._id}
              title={element.title}
              content={element.content}
              color={element.color}
            />
          ))}
          {editNoteOpen && (
            <EditNoteForm
              CloseEditForm={handleCloseEditNote}
              id={currentId}
              title={currentTitle}
              content={currentContent}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
