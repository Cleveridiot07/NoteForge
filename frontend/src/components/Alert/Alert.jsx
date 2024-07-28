import React from 'react';

const Alert = ({ message, type, onClose }) => {
  let alertClasses = 'fixed top-10 z-100 right-10 p-4 rounded-md shadow-md';
  let textColor = '';
  let bgColor = '';

  switch (type) {
    case 'success':
      bgColor = 'bg-green-500';
      textColor = 'text-white';
      break;
    case 'error':
      bgColor = 'bg-red-500';
      textColor = 'text-white';
      break;
    default:
      bgColor = 'bg-gray-500';
      textColor = 'text-white';
  }

  alertClasses += ` ${bgColor} ${textColor}`;

  return (
    <div className={alertClasses}>
      <div className="flex items-center justify-between">
        <span>{message}</span>
        <button className="ml-2" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default Alert;
