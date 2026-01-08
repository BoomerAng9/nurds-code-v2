import React from 'react';

/**
 * LUC Display - Locale Universal Calculator
 * 
 * Shows estimated token consumption BEFORE execution begins.
 * Critical for transparency - users must know cost upfront.
 * Updates dynamically based on selected mode and complexity.
 */

const LUCDisplay = ({ tokens = 0, cost = null }) => {
  // Calculate cost if not provided (example rate: $0.03 per 1k tokens)
  const calculatedCost = cost ?? (tokens / 1000) * 0.03;

  const formatTokens = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(2)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}k`;
    return num.toString();
  };

  return (
    <div className="luc-display">
      <div className="luc-icon">⚡</div>
      <div className="luc-content">
        <div className="luc-label">Estimated Load</div>
        <div className="luc-value">
          <span className="luc-tokens">{formatTokens(tokens)}</span>
          <span className="luc-unit">tokens</span>
        </div>
        {tokens > 0 && (
          <div className="luc-cost">
            ${calculatedCost.toFixed(4)}
          </div>
        )}
      </div>

      <style jsx>{`
        .luc-display {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1.25rem;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 10px;
          min-width: 180px;
        }

        .luc-icon {
          font-size: 1.5rem;
        }

        .luc-content {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .luc-label {
          font-size: 0.75rem;
          color: rgba(59, 130, 246, 0.7);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .luc-value {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
        }

        .luc-tokens {
          font-size: 1.25rem;
          font-weight: 700;
          color: #3B82F6;
        }

        .luc-unit {
          font-size: 0.75rem;
          color: rgba(59, 130, 246, 0.6);
        }

        .luc-cost {
          font-size: 0.75rem;
          color: rgba(16, 185, 129, 0.8);
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};

export default LUCDisplay;