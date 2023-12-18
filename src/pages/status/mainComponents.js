import React, { useState } from 'react';
import './popUp.css';
import { useNavigate } from 'react-router-dom';

const PopupMessage = ({ status }) => {
  const [isOpen, setIsOpen] = useState(true);

  const navigate = useNavigate();
  const handleClose = () => {
    navigate('/profile/:id');;
  };

  return (
    <>
      {isOpen && (
        <div className={`popup-message ${status}`}>
          <p>{status === 'booked' ? 'Booked!' : 'Pending confirmation from landlord.'}</p>
          <button onClick={handleClose}>Close</button>
        </div>
      )}
    </>
  );
};

export default PopupMessage;
