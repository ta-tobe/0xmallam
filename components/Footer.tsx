import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div>Data updates in real time based on parallel market rates</div>

      <style jsx>{`
        footer {
          width: 100%;
          height: auto;
          border-top: 1px solid lightGray;
          text-align: center;
          padding: 2rem 0;
        }
        footer > * {
          margin-bottom: 0.5em;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
