import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BuildStackPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleBuildClick = () => {
    // Add logic for building the stack
    console.log("Building stack...");
  };

  const handleRunClick = () => {
    navigate(`/run/${id}`);
  };

  return (
    <div style={styles.page}>
      <h1>Build Stack</h1>
      <button onClick={handleBuildClick} style={styles.button}>Build</button>
      <button onClick={handleRunClick} style={styles.button}>Run</button>
    </div>
  );
};

const styles = {
  page: {
    padding: '20px'
  },
  button: {
    padding: '10px 20px',
    fontSize: '1em',
    cursor: 'pointer',
    margin: '10px'
  }
};

export default BuildStackPage;


