// ParallaxEffect.js
import React, { useState, useEffect } from 'react';

const ParallaxEffect = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = e => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: -0, y: -0 });
  };

  useEffect(() => {
    const container = document.getElementById('parallax-container');
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return React.cloneElement(children, {
    style: {
      ...children.props.style,
      transform: `perspective(1000px) rotateX(${
        (mousePosition.y / window.innerHeight) * -20
      }deg) rotateY(${(mousePosition.x / window.innerWidth) * -20}deg)`,
    },
  });
};

export default ParallaxEffect;
