import React, { useState } from 'react';

interface ButtonProps {
  label: string;
  color: string;
  onClick?: () => void;
}

/**
 * 3D Interactive Button Component
 * Features a depth-based press effect and dynamic shadows.
 */
const Button: React.FC<ButtonProps> = ({ label, color, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  // A darker version of the base color for the 3D "base"
  const darkColor = '#8b6508'; 

  const buttonStyle: React.CSSProperties = {
    position: 'relative',
    display: 'inline-block',
    padding: '12px 32px',
    backgroundColor: color,
    color: '#000000',
    fontSize: '1rem',
    fontWeight: '750',
    textTransform: 'uppercase',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    
    // 3D Depth Effect (Matching reference image)
    boxShadow: isPressed 
      ? `0 2px 0 ${darkColor}` 
      : isHovered 
        ? `0 10px 0 ${darkColor}, 0 15px 30px rgba(212, 175, 55, 0.2)` 
        : `0 8px 0 ${darkColor}, 0 5px 15px rgba(0,0,0,0.3)`,

    // Physical Movement
    transform: isPressed 
      ? 'translateY(4px)' 
      : isHovered 
        ? 'translateY(-2px)' 
        : 'translateY(0)',

    transition: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
    
    outline: 'none',
    userSelect: 'none',
    letterSpacing: '0.05em',
  };

  return (
    <button 
      style={buttonStyle}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
    >
      {label}
    </button>
  );
};

export default Button;
