import React, { useState } from 'react';
import ModeSelector from './ModeSelector';
import DecodeButton from './DecodeButton';
import LUCDisplay from './LUCDisplay';
import CircuitToggle from './CircuitToggle';

/**
 * ACHEEVY Unified Bezel - Stage 2 Execution Control Strip
 * 
 * This is the single, cohesive control bar that appears after Stage 1 (Chat w/ACHEEVY intake).
 * Contains all execution controls in one unified horizontal strip:
 * - 4 Mode Selectors (Brainstorming, Nerd Out, Agent, Edit)
 * - Decode Button (Firecrawl)
 * - LUC Token Display
 * - Circuit Box Toggles (11 Labs, 12 Labs, SAM, Higgsfield)
 */

const Bezel = ({ 
  onModeChange, 
  onDecode, 
  estimatedTokens, 
  onCircuitToggle,
  activeMode = 'brainstorming'
}) => {
  const [circuitBoxTools, setCircuitBoxTools] = useState({
    elevenLabs: false,
    twelveLabs: false,
    sam: false,
    higgsfield: false
  });

  const handleCircuitToggle = (tool) => {
    const newState = { ...circuitBoxTools, [tool]: !circuitBoxTools[tool] };
    setCircuitBoxTools(newState);
    onCircuitToggle?.(tool, newState[tool]);
  };

  return (
    <div className="acheevy-bezel">
      {/* Bezel Brand Label */}
      <div className="bezel-header">
        <span className="bezel-label">Chat w/ACHEEVY</span>
        <span className="bezel-subtitle">Vibe Coding Execution Interface</span>
      </div>

      {/* Main Control Strip */}
      <div className="bezel-controls">
        {/* Left Section: Mode Selectors */}
        <div className="bezel-section bezel-modes">
          <ModeSelector 
            activeMode={activeMode}
            onModeChange={onModeChange}
          />
        </div>

        {/* Center Section: Decode + LUC */}
        <div className="bezel-section bezel-utilities">
          <DecodeButton onClick={onDecode} />
          <LUCDisplay tokens={estimatedTokens} />
        </div>

        {/* Right Section: Circuit Box Toggles */}
        <div className="bezel-section bezel-circuit">
          <CircuitToggle 
            tools={circuitBoxTools}
            onToggle={handleCircuitToggle}
          />
        </div>
      </div>

      <style jsx>{`
        .acheevy-bezel {
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
          background: rgba(10, 10, 15, 0.85);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(139, 92, 246, 0.3);
          box-shadow: 0 8px 32px rgba(139, 92, 246, 0.15);
          padding: 1rem 2rem;
        }

        .bezel-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.75rem;
        }

        .bezel-label {
          font-size: 1.25rem;
          font-weight: 700;
          background: linear-gradient(135deg, #8B5CF6, #EC4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .bezel-subtitle {
          font-size: 0.875rem;
          color: rgba(139, 92, 246, 0.6);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .bezel-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }

        .bezel-section {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .bezel-modes {
          flex: 2;
        }

        .bezel-utilities {
          flex: 1;
          justify-content: center;
        }

        .bezel-circuit {
          flex: 1;
          justify-content: flex-end;
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .bezel-controls {
            flex-direction: column;
            gap: 1rem;
          }

          .bezel-section {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Bezel;