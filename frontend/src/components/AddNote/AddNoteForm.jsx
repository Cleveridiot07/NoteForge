import React, { useState } from 'react';
import { createNote } from '../../api';
import { useNavigate } from 'react-router-dom';
import { colors } from '../../utils/NotesThemes.utils';

const AddNoteForm = ({ CloseAddForm }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleAdd = async (e) => {
    e.preventDefault();
    setError(null);
    if (!title) {
      setError("Title is required");
      return;
    }
    if (!content) {
      setError("Content is required");
      return;
    }
    try {
      await createNote({
        title,
        content,
        color:selectedColor,
      });
      CloseAddForm();
      navigate("/home");
    } catch (error) {
      console.error("Failed to create note", error);
      setError("Failed to create note. Please try again.");
    }
  };

  const textAreaStyle = {
    minHeight: '4rem',
    maxHeight: '10rem'
  };

  // Colors to choose from


  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-30">
      <div className="w-full h-[75vh] max-w-screen-md py-3 rounded-3xl lg:max-w-screen-lg">
        
        <div className="w-full mb-5">
          <div className="bg-white/70 backdrop-blur-lg p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2 flex justify-center items-center">
            {colors.map((color, index) => (
              <button
                key={index}
                className={`w-10 h-10 rounded-full mx-2 transition-transform duration-300 transform ${selectedColor === color ? 'scale-150' : ''} ${color === 'sky' ? 'bg-blue-500' : color === 'emerald' ? 'bg-green-500' : color === 'rose' ? 'bg-rose-500' : color === 'yellow' ? 'bg-yellow-500' : color === 'pink' ? 'bg-pink-500' : color === 'purple' ? 'bg-purple-500' : ''}`}
                onClick={() => handleColorSelect(color)}
              />
            ))}
          </div>
        </div>

        <div className="w-full">
          <div className="bg-white/70 backdrop-blur-lg p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
            <form onSubmit={handleAdd}>
              <div className="mb-5">
                <label htmlFor="title" className="block mb-2 font-bold text-gray-600">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Title"
                  className="border border-gray-300 shadow p-3 w-full rounded mb-4"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
              </div>

              <div className="mb-5">
                <label htmlFor="content" className="block mb-2 font-bold text-gray-600">Content</label>
                <textarea
                  id="content"
                  name="content"
                  placeholder="Content"
                  className="border border-gray-300 shadow p-3 w-full rounded mb-4 resize-y"
                  style={textAreaStyle}
                  onChange={(e) => setContent(e.target.value)}
                  value={content}
                ></textarea>
              </div>

              {error && (<p className="text-sm text-red-400 mt-2 mb-2">{error}</p>)}

              <button type="submit" className="block w-full bg-emerald-500 text-white font-bold p-4 rounded-lg">Add</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNoteForm;
