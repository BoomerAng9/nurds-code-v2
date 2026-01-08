import React from 'react';

/**
 * Circuit Box Toggle Component
 * 
 * On/off switches for Circuit Box tools:
 * - 11 Labs (voice synthesis)
 * - 12 Labs (video understanding)
 * - SAM (Segment Anything Model)
 * - Higgsfield (video generation)
 */

const TOOLS = [
  {
    id: 'elevenLabs',
    label: '11 Labs',
    icon: '🎙️',
    color: '#8B5CF6'
  },
  {
    id: 'twelveLabs',
    label: '12 Labs',
    icon: '🎬',
    color: '#EC4899'
  },
  {
    id: 'sam',
    label: 'SAM',
    icon: '✂️',
    color: '#10B981'
  },
  {
    id: 'higgsfield',
    label: 'Higgsfield',
    icon: '🎥',
    color: '#F59E0B'
  }
];

const CircuitToggle = ({ tools = {}, onToggle }) => {
  return (
    <div className="circuit-toggle">
      <div className="circuit-label">Circuit Box</div>
      <div className="circuit-tools">
        {TOOLS.map((tool) => (
          <button
            key={tool.id}
            className={`tool-toggle ${tools[tool.id] ? 'active' : ''}`}
            onClick={() => onToggle(tool.id)}
            title={tool.label}
          >
            <span className="tool-icon">{tool.icon}</span>
            <span className="tool-status">
              {tools[tool.id] ? 'ON' : 'OFF'}
            </span>
          </button>
        ))}
      </div>

      <style jsx>{`
        .circuit-toggle {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .circuit-label {
          font-size: 0.75rem;
          color: rgba(139, 92, 246, 0.7);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .circuit-tools {
          display: flex;
          gap: 0.5rem;
        }

        .tool-toggle {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          padding: 0.5rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s;
          min-width: 60px;
        }

        .tool-toggle:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(139, 92, 246, 0.4);
        }

        .tool-toggle.active {
          background: rgba(139, 92, 246, 0.15);
          border-color: rgba(139, 92, 246, 0.6);
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.3);
        }

        .tool-icon {
          font-size: 1.25rem;
        }

        .tool-status {
          font-size: 0.625rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.6);
        }

        .tool-toggle.active .tool-status {
          color: #10B981;
        }
      `}</style>
    </div>
  );
};

export default CircuitToggle;