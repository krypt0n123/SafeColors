import React from 'react';

const Background: React.FC = () => (
  <div
    style={{
      position: 'fixed',
      inset: 0,
      zIndex: -1,
      width: '100vw',
      height: '100vh',
      backgroundImage: "url('/bg.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
    }}
  />
);

export default Background;