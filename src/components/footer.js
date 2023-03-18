import React from 'react';

const Footer = () => {
  const styles = {
    container: {
      backgroundColor: '#f8f8f8',
      padding: '10px',
      textAlign: 'center',
      fontSize: '12px',
      color: '#333',
    },
  };

  return (
    <div style={styles.container}>
       2023 My Website . All Rights Reserved.
    </div>
  );
};

export default Footer;
