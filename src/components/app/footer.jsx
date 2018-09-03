import React from 'react';

const Footer = () => {
  let currentDate = new Date().getFullYear();

  return (
    <footer className="pt-5">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <p className="text-muted pt-2" style={{ padding: '0px 0px 250px 0px' }}>
          {currentDate} - Record Bin Inc. All rights Reserved
        </p>
      </nav>
    </footer>
  );
};

export default Footer;
