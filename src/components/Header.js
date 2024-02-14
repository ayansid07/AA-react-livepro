import React, { useEffect, useState } from 'react';
import Logo from '../assets/logo.svg';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`py-8 sticky top-0 bg-white z-50 ${scrolled ? 'scrolled' : ''}`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className={`text-5xl ${scrolled ? 'text-xl text-gray-600 font-bold' : ' text-gray-600 font-bold'}`}>Hi, Ayan</h1>
          <button className="btn btn-sm">Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
