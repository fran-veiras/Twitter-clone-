import React from 'react';

export const Button = ({ children, onClick, disabled }) => {
  return (
    <>
      <button disabled={disabled} onClick={onClick}>
        {children}
      </button>
      <style jsx>{`
        button {
          align-items: center;
          background: var(--black);
          border-radius: 9999px;
          border: 0;
          color: var(--white);
          cursor: pointer;
          display: flex;
          font-weight: 800;
          padding: 8px 24px;
          transition: opacity 0.3s ease;
        }
        button[disabled] {
          pointer-events: none;
          opacity: 0.2;
        }
        button:hover {
          opacity: 0.7;
        }
      `}</style>
    </>
  );
};
