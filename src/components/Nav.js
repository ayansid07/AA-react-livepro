import React from 'react';
import { Link } from 'react-router-dom';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquareText } from 'react-icons/bs';

const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className="container mx-auto">
        <div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl
        rounded-full max-w-[460px] mx-auto px-5 flex justify-between
        items-center text-2xl text-white/50'>
          <Link to='/home' className='cursor-pointer w-[60px] h-[60px] flex items-center
          justify-center'>
            <BiHomeAlt />
          </Link>
          <Link to='/plans' className='cursor-pointer w-[60px] h-[60px] flex items-center
          justify-center'>
            <BiUser />
          </Link>
          <Link to='/menu' className='cursor-pointer w-[60px] h-[60px] flex items-center
          justify-center'>
            <BsClipboardData />
          </Link>
          <Link to='/profile' className='cursor-pointer w-[60px] h-[60px] flex items-center
          justify-center'>
            <BsBriefcase />
          </Link>
          <Link to='/contact' className='cursor-pointer w-[60px] h-[60px] flex items-center
          justify-center'>
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
