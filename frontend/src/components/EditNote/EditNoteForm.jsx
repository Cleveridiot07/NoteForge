import React, { useState } from 'react';
import { updateNote } from '../../api/notes.js';
import { useNavigate } from 'react-router-dom';

const EditNoteForm = (props) => {
  const [title, setTitle] = useState(props.title);
  const [content, setContent] = useState(props.content);
  const[id,setId]=useState(props.id);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const data={
        title,
        content,
      }
      const update =await updateNote(id,data);
      console.log(update);
    } catch (error) {
       console.log(error,"error in updating note")
    }
    props.CloseEditForm();
  };


  const textAreaStyle = {
    minHeight: '4rem',
    maxHeight: '10rem'
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-30">
      <div className="w-full h-[50vh] max-w-screen-md py-3 rounded-3xl lg:max-w-screen-lg">
        <div className="w-full">
          <div className="bg-white/70 backdrop-blur-lg p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
            <form onSubmit={handleEdit}>
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

              <button type="submit" onClick={handleEdit} className="block w-full bg-emerald-500 text-white font-bold p-4 rounded-lg">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditNoteForm;
