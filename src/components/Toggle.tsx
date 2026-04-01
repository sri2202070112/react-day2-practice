
import React, { useState } from 'react';


/**
 * Premium Toggle Component
 * Features a modern, sleek toggle switch with smooth animations and glow effects.
 */
const Toggle: React.FC = () => {
  const [isOn, setIsOn] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.5rem',
    cursor: 'pointer',
    userSelect: 'none',
    padding: '10px',
  };

  const toggleTrackStyle: React.CSSProperties = {
    position: 'relative',
    width: '64px',
    height: '32px',
    backgroundColor: isOn ? '#d4af37' : 'rgba(255,255,255,0.05)',
    borderRadius: '16px',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: isOn 
      ? '0 0 25px rgba(212, 175, 55, 0.5), inset 0 2px 4px rgba(0,0,0,0.2)' 
      : 'inset 0 4px 10px rgba(0,0,0,0.4)',
    border: `1px solid ${isOn ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.1)'}`,
  };

  const toggleThumbStyle: React.CSSProperties = {
    position: 'absolute',
    top: '4px',
    left: isOn ? '36px' : '4px',
    width: '22px',
    height: '22px',
    backgroundColor: '#ffffff',
    borderRadius: '50%',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform: isHovered && !isOn ? 'scale(1.1)' : 'scale(1)',
  };

  const labelStyle: React.CSSProperties = {
    fontSize: '1rem',
    fontWeight: '800',
    color: isOn ? '#f1c40f' : '#475569',
    transition: 'all 0.4s ease',
    minWidth: '50px',
    textAlign: 'left',
    letterSpacing: '0.05em',
    filter: isOn ? 'drop-shadow(0 0 8px rgba(241, 196, 15, 0.4))' : 'none',
  };

  return (
    <div 
      style={containerStyle} 
      onClick={() => setIsOn(!isOn)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={toggleTrackStyle}>
        <div style={toggleThumbStyle}>
          {/* Subtle inner detail for thumb */}
          <div style={{
            width: '4px',
            height: '4px',
            backgroundColor: isOn ? '#d4af37' : '#e2e8f0',
            borderRadius: '50%',
            opacity: 0.5
          }} />
        </div>
      </div>
      <span style={labelStyle}>
        {isOn ? 'ON' : 'OFF'}
      </span>
    </div>
  );
};

export default Toggle;
