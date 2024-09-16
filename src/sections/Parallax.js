import React, { useEffect, useState } from 'react';
const Parallax = ({ speed = 1, children }) => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setOffsetY(scrollY * speed);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  const parallaxStyle = {
    transform: `translateY(${offsetY}px)`
  };

  const mobileTransitionStyle = `
    @media (max-width: 768px) {
      .parallax {
        transition: transform 0.05s ease-out; /* Add transition only on mobile */
      }
    }
  `;

  return <div><style>{mobileTransitionStyle}</style><div className="parallax" style={parallaxStyle}>{children}</div></div>;
};

export default Parallax;