// NotFound.js
import React from 'react';

const Notfound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404 - Страница не найдена</h1>
      <p style={styles.message}>К сожалению, запрашиваемая вами страница не существует.</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f2f2f2',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '3rem',
    color: '#333',
    marginBottom: '20px',
  },
  message: {
    fontSize: '1.2rem',
    color: '#666',
  },
};

export default Notfound;
