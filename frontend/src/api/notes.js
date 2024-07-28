const BASE_URL = import.meta.env.VITE_BASE_URL; // Replace with your backend URL

export const fetchNotes = async () => {
  try {
    const response = await fetch(`${BASE_URL}/notes`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Example of using JWT token for authorization
      },
    });
    return await response.json();
  } catch (error) {
    console.error('Error fetching notes:', error);
    throw error;
  }
};

export const createNote = async (noteData) => {
  try {
    const response = await fetch(`${BASE_URL}/notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(noteData),
    });
    return await response.json();
  } catch (error) {
    console.error('Error creating note:', error);
    throw error;
  }
};

export const updateNote = async (noteId, noteData) => {
  try {
    const response = await fetch(`${BASE_URL}/notes/${noteId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(noteData),
    });
    return await response.json();
  } catch (error) {
    console.error(`Error updating note with ID ${noteId}:`, error);
    throw error;
  }
};

export const deleteNote = async (noteId) => {
  try {
    const response = await fetch(`${BASE_URL}/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return await response.json();
  } catch (error) {
    console.error(`Error deleting note with ID ${noteId}:`, error);
    throw error;
  }
};

// Other CRUD operations for notes can be added as needed

