import React, { useState } from 'react';

/**
 * Decode Button - Firecrawl Integration
 * 
 * Allows users to scrape/decode any website structure.
 * First-time use shows a tooltip explaining the feature.
 * Returns scraped data (markdown/JSON) to the chat interface.
 */

const DecodeButton = ({ onClick }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasUsed, setHasUsed] = useState(
    localStorage.getItem('acheevy-decode-used') === 'true'
  );

  const handleClick = () => {
    if (!hasUsed) {
      setShowTooltip(true);
      localStorage.setItem('acheevy-decode-used', 'true');
      setHasUsed(true);
      
      // Auto-hide tooltip after 5 seconds
      setTimeout(() => setShowTooltip(false), 5000);
    }
    onClick?.();
  };

  return (
    <div className="decode-container">
      <button className="decode-button" onClick={handleClick}>
        <span className="decode-icon">🔍</span>
        <span className="decode-label">Decode</span>
      </button>

      {showTooltip && (
        <div className="decode-tooltip">
          <div className="tooltip-header">🔥 Firecrawl Decoder</div>
          <p className="tooltip-text">
            Extract structure, content, and data from any website.
            Powered by Firecrawl API.
          </p>
          <button 
            className="tooltip-close"
            onClick={() => setShowTooltip(false)}
          >
            Got it!
          </button>
        </div>
      )}

      <style jsx>{`
        .decode-container {
          position: relative;
        }

        .decode-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, #F97316, #EF4444);
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);
        }

        .decode-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(249, 115, 22, 0.5);
        }

        .decode-button:active {
          transform: translateY(0);
        }

        .decode-icon {
          font-size: 1.25rem;
        }

        .decode-label {
          font-size: 0.875rem;
          font-weight: 600;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .decode-tooltip {
          position: absolute;
          top: calc(100% + 1rem);
          left: 50%;
          transform: translateX(-50%);
          width: 280px;
          padding: 1.25rem;
          background: rgba(15, 15, 20, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(249, 115, 22, 0.3);
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
          z-index: 1001;
          animation: slideIn 0.3s ease-out;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        .tooltip-header {
          font-size: 1rem;
          font-weight: 700;
          color: #F97316;
          margin-bottom: 0.75rem;
        }

        .tooltip-text {
          font-size: 0.875rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 1rem;
        }

        .tooltip-close {
          width: 100%;
          padding: 0.5rem;
          background: rgba(249, 115, 22, 0.2);
          border: 1px solid rgba(249, 115, 22, 0.4);
          border-radius: 6px;
          color: #F97316;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .tooltip-close:hover {
          background: rgba(249, 115, 22, 0.3);
        }
      `}</style>
    </div>
  );
};

export default DecodeButton;