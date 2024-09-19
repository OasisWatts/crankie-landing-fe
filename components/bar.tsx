'use client';
import React, { useEffect, useState } from 'react';


interface BarHeaderProps {
  data: {
    title1: string;
    menus: string[];
  };
}

const BarHeader: React.FC<BarHeaderProps> = ({ data }) => {
  const [isBar, setIsBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsBar(true);
      } else {
        setIsBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="bar-header" className={`header ${isBar ? 'bar' : ''} text-center w-full p-4 bg-white`}>
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold flex-">{data.title1}</h1>
      <nav className="menu flex justify-center space-x-4 mt-2">
        {data.menus.map((menu, index) => (
          <span key={index} className="text-sm sm:text-base lg:text-lg">
            {menu}
          </span>
        ))}
      </nav>
    </div>
  );
};

export default BarHeader;

// "소개 기능 서비스 flex 이용해서 정렬하기"ç