
import React from 'react';
import './PopUp.css';

const PopUp = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'popup display-block' : 'popup display-none';

  return (
    <div className={showHideClassName}>
      <div className="popup-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default PopUp;
