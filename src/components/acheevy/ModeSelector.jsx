import React from 'react';

/**
 * Mode Selector Component
 * 
 * 4 execution modes for ACHEEVY workflow:
 * 1. Brainstorming - 4-Question Lens, SWOT, OKR
 * 2. Nerd Out - Master planning with 9 Crown Gates (formerly King Mode)
 * 3. Agent Mode - Direct code execution via Google Gemma
 * 4. Edit Mode - Iteration and refinement
 */

const MODES = [
  {
    id: 'brainstorming',
    label: 'Brainstorming',
    icon: '💡',
    description: '4-Question Lens · SWOT · OKR',
    color: '#10B981' // green
  },
  {
    id: 'nerdout',
    label: 'Nerd Out',
    icon: '👑',
    description: '9 Crown Gates · Master Plan',
    color: '#8B5CF6' // purple
  },
  {
    id: 'agent',
    label: 'Agent Mode',
    icon: '🤖',
    description: 'Code Execution · Gemma',
    color: '#3B82F6' // blue
  },
  {
    id: 'edit',
    label: 'Edit Mode',
    icon: '✏️',
    description: 'Refine · Iterate · Tweak',
    color: '#F59E0B' // amber
  }
];

const ModeSelector = ({ activeMode, onModeChange }) => {
  return (
    <div className="mode-selector">
      {MODES.map((mode) => (
        <button
          key={mode.id}
          className={`mode-button ${activeMode === mode.id ? 'active' : ''}`}
          onClick={() => onModeChange(mode.id)}
          data-mode={mode.id}
        >
          <span className="mode-icon">{mode.icon}</span>
          <div className="mode-content">
            <span className="mode-label">{mode.label}</span>
            <span className="mode-description">{mode.description}</span>
          </div>
        </button>
      ))}

      <style jsx>{`
        .mode-selector {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .mode-button {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.875rem 1.25rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .mode-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1));
          opacity: 0;
          transition: opacity 0.3s;
        }

        .mode-button:hover::before {
          opacity: 1;
        }

        .mode-button.active {
          background: rgba(139, 92, 246, 0.15);
          border-color: rgba(139, 92, 246, 0.6);
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
        }

        .mode-button.active::before {
          opacity: 0.5;
        }

        .mode-icon {
          font-size: 1.5rem;
          z-index: 1;
        }

        .mode-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.25rem;
          z-index: 1;
        }

        .mode-label {
          font-size: 0.875rem;
          font-weight: 600;
          color: #fff;
        }

        .mode-description {
          font-size: 0.75rem;
          color: rgba(139, 92, 246, 0.7);
          white-space: nowrap;
        }

        .mode-button:hover {
          transform: translateY(-2px);
          border-color: rgba(139, 92, 246, 0.5);
        }

        @media (max-width: 768px) {
          .mode-button {
            flex: 1 1 calc(50% - 0.5rem);
            min-width: 140px;
          }
        }
      `}</style>
    </div>
  );
};

export default ModeSelector;