import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'; // Importing the uuid library

const MainPage = () => {
  const navigate = useNavigate();

  const handleCreateStack = () => {
    // Perform logic to create stack
    const newStackId = uuidv4(); // Generate a unique ID for the new stack
    // After creating the stack, navigate to the stack detail page
    navigate(`/stack-detail/${newStackId}`);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Welcome to OpenAGI-assist</h1>
        <p style={styles.subtitle}>Build and run your own AI-powered chatbots</p>
      </div>
      <div style={styles.content}>
        <button onClick={handleCreateStack} style={styles.button}>Create New Stack</button>
        <Link to="/stacks" style={styles.link}>Show Previous Stacks</Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
    paddingTop: '100px',
    paddingBottom: '100px',
  },
  header: {
    marginBottom: '40px',
  },
  title: {
    fontSize: '3em',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.5em',
    color: '#666',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    padding: '15px 30px',
    fontSize: '1.2em',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '20px',
  },
  link: {
    textDecoration: 'none',
    color: '#007bff',
    fontSize: '1.2em',
  },
};

export default MainPage;

