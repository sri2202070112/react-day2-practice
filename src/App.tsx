import { useState, useEffect } from 'react';
import './App.css';
import Button from './components/Button';
import Toggle from './components/Toggle';
import MirrorInput from './components/MirrorInput';
import HoverBox from './components/HoverBox';
import TrafficLight from './components/TrafficLight';
import TodoList from './components/TodoList';

/**
 * Premium Showcase of the Custom Button Component.
 * Features a modern, sleek design with glassmorphism and smooth interactivity.
 */
function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [hasWiped, setHasWiped] = useState(false);
  const [activeAction, setActiveAction] = useState<string | null>(null);
  const [activeColor, setActiveColor] = useState<string>('#d4af37');
  const [isVisible, setIsVisible] = useState(false);
  const [lightColor, setLightColor] = useState<'red' | 'yellow' | 'green'>('red');

  // Simple Entrance Animation (Fade-in Effekt)
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Prevent scrolling on the landing page
  useEffect(() => {
    if (!hasEntered) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [hasEntered]);

  const handleButtonClick = (action: string, color: string) => {
    setActiveAction(action);
    setActiveColor(color);
  };

  const cycleLight = () => {
    setLightColor(prev => {
      if (prev === 'red') return 'green';
      if (prev === 'green') return 'yellow';
      return 'red';
    });
  };

  const handleEnter = () => {
    setHasEntered(true);
    setIsVisible(true);
    // Remove the curtains from the DOM after they finish animating (1.2s)
    setTimeout(() => {
      setHasWiped(true);
    }, 1500); 
  };

  if (!hasEntered) {
    return (
      <div className={`App ${isVisible ? 'fade-in' : ''}`} style={{ 
        height: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        <div className="glass-accent" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px' }} />
        <div style={{ textAlign: 'center', zIndex: 100 }}>
          <h1 style={{ fontSize: '6rem', marginBottom: '4rem', letterSpacing: '-0.04em' }}>DAY 2 ASSIGNMENT</h1>
          <button 
            onClick={handleEnter}
            style={{ 
              backgroundColor: '#d4af37', 
              color: '#000', 
              padding: '24px 64px', 
              fontSize: '1.2rem', 
              fontWeight: '900', 
              border: 'none', 
              borderRadius: '100px', 
              cursor: 'pointer',
              boxShadow: '0 0 40px rgba(212, 175, 55, 0.4)',
              transition: 'all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
              textTransform: 'uppercase',
              letterSpacing: '0.3rem'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05) translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 15px 50px rgba(212, 175, 55, 0.6)';
              e.currentTarget.style.letterSpacing = '0.4rem';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 0 40px rgba(212, 175, 55, 0.4)';
              e.currentTarget.style.letterSpacing = '0.3rem';
            }}
          >
            ENTER ASSIGNMENT
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="glass-accent" />
      
      {/* High-Performance Theatrical Curtains (Single-Use) */}
      {!hasWiped && (
        <>
          <div className="curtain curtain-left" />
          <div className="curtain curtain-right" />
        </>
      )}

      <div className={`card-container ${isVisible ? 'fade-in' : ''}`}>
        <header style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginBottom: '3rem' }}>
          <h1 style={{ textAlign: 'center' }}>Interactive Components</h1>
        </header>

        {/* Dynamic Interactive Message Area */}
        <div className="message-display">
          {activeAction ? (
            <div style={{
              color: activeColor,
              animation: 'fadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              background: `${activeColor}11`,
              padding: '12px 24px',
              borderRadius: '12px',
              border: `1px solid ${activeColor}33`
            }}>
              Active Task: <strong>{activeAction}</strong>
            </div>
          ) : (
            <div style={{ color: '#64748b', opacity: 0.6 }}>Awaiting system interaction...</div>
          )}
        </div>

        {/* Component Showcase - Organized 3D Buttons */}
        <div className="bento-grid">

          <section className="bento-card col-span-2">
            <h2 className="bento-card-title" style={{ justifyContent: 'center' }}>
              Core Interactions
            </h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', padding: '1rem 0' }}>
              <Button
                label="Primary Action"
                color="#d4af37"
                onClick={() => handleButtonClick('Executing Primary Logic', '#d4af37')}
              />
              <Button
                label="System Check"
                color="#f1c40f"
                onClick={() => handleButtonClick('All Systems Operational', '#f1c40f')}
              />
              <Button
                label="Emergency"
                color="#b8860b"
                onClick={() => handleButtonClick('Critical Alert Triggered', '#b8860b')}
              />
            </div>
          </section>

          <section className="bento-card col-span-2">
            <h2 className="bento-card-title">
              State Management Lab
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              alignItems: 'stretch'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem'
              }}>
                <h4 style={{ margin: 0, color: '#94a3b8', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Toggle Module</h4>
                <Toggle />
              </div>

              <div style={{ height: '100%' }}>
                <MirrorInput />
              </div>
            </div>
          </section>

          <section className="bento-card">
            <h2 className="bento-card-title">
              Event Handling
            </h2>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <HoverBox />
            </div>
          </section>

          <section className="bento-card">
            <h2 className="bento-card-title">
              Conditional Rendering
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', flex: 1, justifyContent: 'center' }}>
              <TrafficLight color={lightColor} />
              <Button
                label="CYCLE STATUS"
                color="#f1c40f"
                onClick={cycleLight}
              />
            </div>
          </section>

          <section className="bento-card col-span-2">
            <h2 className="bento-card-title">
              Lists & Keys Efficiency
            </h2>
            <div style={{ flex: 1 }}>
              <TodoList />
            </div>
          </section>
        </div>
      </div>

      {/* Immersive Ambient Background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: activeAction
          ? `radial-gradient(circle at 50% 50%, ${activeColor}15 0%, transparent 70%)`
          : 'none',
        zIndex: -1,
        transition: 'background 1s ease',
        pointerEvents: 'none'
      }} />
    </div>
  );
}

export default App;
