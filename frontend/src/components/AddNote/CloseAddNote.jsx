import React from 'react';

const CloseAddNote = (props) => {
  const handleClick = () => {
      props.CloseAddForm();
     console.log("Button clicked");
  };

  return (
    <div
      onClick={handleClick} // Use handleClick function to handle onClick event
      className="fixed top-10 right-20  mx-auto w-[80px] h-[80px] border z-50 border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:rounded-3xl flex items-center justify-center cursor-pointer ">
      <span className='text-6xl text-center text-rose-500'>&#215;</span>
    </div>
  );
}

export default CloseAddNote;
