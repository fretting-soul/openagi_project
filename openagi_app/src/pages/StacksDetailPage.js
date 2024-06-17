import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const StackDetailPage = ({ stacks }) => {
  const { id } = useParams();
  const stack = stacks[id];
  const history = useNavigate();

  const handleBuildClick = () => {
    history.push(`/build/${id}`);
  };

  return (
    <div style={styles.page}>
      <h1>{stack.name}</h1>
      <p>{stack.description}</p>
      <button onClick={handleBuildClick} style={styles.buildButton}>Build Stack</button>
    </div>
  );
};

const styles = {
  page: {
    padding: '20px'
  },
  buildButton: {
    padding: '10px 20px',
    fontSize: '1em',
    cursor: 'pointer'
  }
};

export default StackDetailPage;



