// auth.js
const BASE_URL = import.meta.env.VITE_BASE_URL + "/auth";
const u = import.meta.env.VITE_BASE_URL;

console.log('VITE_BASE_URL:', u);
console.log('BASE_URL:', BASE_URL); 

export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    return await response.json();
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const signupUser = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    return await response.json();
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    const response = await fetch(`${BASE_URL}/logout`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Example of using JWT token for authorization
      },
    });
    return await response.json();
  } catch (error) {
    console.error('Error logging out:', error);
    throw error;
  }
};
