import React, { useState } from 'react';
import './../Modal.css';

const NewStackModal = ({ onClose }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleCreateClick = () => {
    // Handle stack creation logic here
    onClose(); // Close the modal
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Create New Stack</h2>
        <form>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Description:
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
          </label>
          <button type="button" onClick={handleCreateClick} disabled={!name || !description}>Create</button>
        </form>
      </div>
    </div>
  );
};

export default NewStackModal;
