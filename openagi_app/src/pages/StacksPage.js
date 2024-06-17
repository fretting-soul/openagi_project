import React from 'react';
import { Link } from 'react-router-dom';

const StacksPage = ({ stacks }) => {
  // Check if stacks is undefined or not an array
  if (!stacks || !Array.isArray(stacks)) {
    return <div>No stacks available</div>;
  }

  return (
    <div style={styles.page}>
      <h1>Your Stacks</h1>
      <ul style={styles.stackList}>
        {stacks.map((stack, index) => (
          <li key={index} style={styles.stackItem}>
            <Link to={`/stack/${index}`} style={styles.stackLink}>{stack.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  page: {
    padding: '20px'
  },
  stackList: {
    listStyle: 'none',
    padding: 0
  },
  stackItem: {
    marginBottom: '10px'
  },
  stackLink: {
    textDecoration: 'none',
    color: '#007bff',
    fontSize: '1.2em'
  }
};

export default StacksPage;




