import React from 'react';

interface TrafficLightProps {
  color: 'red' | 'yellow' | 'green';
}

/**
 * TrafficLight Component
 * Demonstrates Conditional Rendering using a switch statement.
 */
const TrafficLight: React.FC<TrafficLightProps> = ({ color }) => {
  // 1. Determine the status message based on the 'color' prop.
  // This is a classic example of conditional rendering logic.
  let message = "";
  let accentColor = "";

  switch (color) {
    case 'red':
      message = "STOP";
      accentColor = "#ef4444";
      break;
    case 'yellow':
      message = "SLOW DOWN";
      accentColor = "#eab308";
      break;
    case 'green':
      message = "GO";
      accentColor = "#22c55e";
      break;
    default:
      message = "UNKNOWN";
      accentColor = "#d4af37";
  }

  // 2. Styling for the traffic light housing and individual lights
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
    width: '100%',
    margin: '0 auto',
  };

  const lightGroupStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    padding: '16px',
    backgroundColor: '#000000',
    borderRadius: '24px',
    border: '2px solid rgba(212, 175, 55, 0.3)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
  };

  const getLightStyle = (lightColor: string, isActive: boolean): React.CSSProperties => ({
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: isActive ? lightColor : '#111111',
    boxShadow: isActive ? `0 0 30px ${lightColor}66` : 'none',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    border: '1px solid rgba(212, 175, 55, 0.2)',
  });

  return (
    <div style={containerStyle}>
      <div style={lightGroupStyle}>
        <div style={getLightStyle('#ef4444', color === 'red')} />
        <div style={getLightStyle('#eab308', color === 'yellow')} />
        <div style={getLightStyle('#22c55e', color === 'green')} />
      </div>

      <div style={{ textAlign: 'center' }}>
        <h3 style={{ 
          color: accentColor, 
          fontSize: '2rem', 
          fontWeight: '900', 
          margin: '0.5rem 0 0 0',
          letterSpacing: '0.1em',
          filter: `drop-shadow(0 0 12px ${accentColor}44)`
        }}>
          {/* RENDER THE DYNAMIC MESSAGE HERE */}
          {message}
        </h3>
      </div>
    </div>
  );
};

export default TrafficLight;
