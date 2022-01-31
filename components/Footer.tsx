import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div>Data updates in real time based on cryptocurrency prices in major exchanges</div>

      <div>
        <a href="https://www.0xmallam.info">home</a>
        {' | '}
        <a href="https://fxrates.0xmallam.info">fxrates</a>
      </div>

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
