import { dropInstance } from 'localforage';
import React from 'react';

const Footer = () => {
  return (
    <div className='pt-4'>
      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; {new Date().getFullYear()} Your Task Management App. All rights reserved.</p>
        <p>Designed and developed by <span className='fw-semibold'>Hazrat Shahjalal</span>.</p>
      </footer>
    </div>
  );
};

export default Footer;
