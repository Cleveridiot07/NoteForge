import React from 'react'
import { useLocation } from 'react-router-dom'

const AddNote = ({ onClick }) => {
  const location = useLocation();
    const currentUrl = location.pathname;
    let AddButtonEnale = false;
    if(currentUrl==='/home'){
        AddButtonEnale=true;
    }
  return (
    <>
      {AddButtonEnale && <div
        onClick={onClick}
        className="fixed bottom-0  cursor-pointer right-20 z-30 mx-auto w-[80px] h-[80px] border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:bottom-6 md:rounded-3xl flex items-center justify-center">
        <span className='text-6xl text-center text-emerald-500'>&#43;</span>
      </div>}
    </>
  )
}

export default AddNote
