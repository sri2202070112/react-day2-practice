import React, { useState } from 'react';

/**
 * HoverBox Component
 * Demonstrates event handling using onMouseEnter and onMouseLeave.
 */
const HoverBox: React.FC = () => {
  // 1. Declare a state variable 'isHovered' to track mouse interaction.
  // We initialize it to 'false' because the mouse is not over the box by default.
  const [isHovered, setIsHovered] = useState(false);

  // 2. Define the dynamic style based on the hover state.
  // The background color switches between 'red' and 'blue'.
  const boxStyle: React.CSSProperties = {
    width: '100%',
    height: '200px',
    backgroundColor: isHovered ? '#ef4444' : '#3b82f6',
    borderRadius: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    fontSize: '1.25rem',
    fontWeight: '800',
    cursor: 'pointer',
    
    // Smooth transition for the background color change
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    
    // Aesthetic additions
    boxShadow: isHovered 
      ? '0 20px 40px rgba(239, 68, 68, 0.4)' 
      : '0 20px 40px rgba(59, 130, 246, 0.3)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transform: isHovered ? 'scale(1.05)' : 'scale(1.0)',
    userSelect: 'none',
  };

  return (
    <div 
      style={boxStyle}
      // 3. onMouseEnter fires when the cursor moves inside the div.
      // We set our state to 'true' to trigger a re-render with the red color.
      onMouseEnter={() => setIsHovered(true)}
      
      // 4. onMouseLeave fires when the cursor exits the div.
      // We reset our state to 'false' to switch back to blue.
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? 'DANGER ZONE' : 'SAFE ZONE'}
    </div>
  );
};

export default HoverBox;
