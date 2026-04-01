import React, { useState } from 'react';

/**
 * MirrorInput Component
 * Demonstrates real-time state mirroring using the `useState` hook.
 */
const MirrorInput: React.FC = () => {
  const [text, setText] = useState('');

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.5rem',
    width: '100%',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '400px',
    padding: '16px 24px',
    fontSize: '1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    color: '#ffffff',
    outline: 'none',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  const pStyle: React.CSSProperties = {
    fontSize: '2rem',
    fontWeight: '800',
    color: text ? '#d4af37' : 'rgba(255, 255, 255, 0.1)',
    minHeight: '3rem',
    transition: 'all 0.4s ease',
    margin: '1rem 0 0 0',
    letterSpacing: '-0.02em',
    filter: text ? 'drop-shadow(0 0 12px rgba(212, 175, 55, 0.3))' : 'none',
  };

  return (
    <div style={containerStyle}>
      <h4 style={{ color: '#aaa', fontSize: '0.9rem', margin: 0, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Input State Mirror</h4>
      <input 
        type="text" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something here..."
        style={inputStyle}
      />
      <div style={{ textAlign: 'center' }}>
        <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Real-time reflection:</span>
        <p style={pStyle}>
          {text || "Waiting for input..."}
        </p>
      </div>
    </div>
  );
};

export default MirrorInput;
