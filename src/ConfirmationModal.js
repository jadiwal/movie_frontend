import React from 'react';

const ConfirmationModal = ({ show, onClose, onConfirm, message }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 style={{marginBottom:'24px'}}>Confirmation</h2>
        <p style={{fontSize:'14px', marginBottom:'16px'}}>{message}</p>
        <div className="modal-buttons">
          <button onClick={onClose} style={{marginRight:'8px', backgroundColor:'#003d7f'}}>Cancel</button>
          <button onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
