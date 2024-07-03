import React from 'react';

function Logo({ width = '100px' }) {
  return (
    <div>
      <img 
        src="https://th.bing.com/th/id/OIP.JVjUDJPqhMr-GqZWPKPBVwHaEW?w=320&h=188&c=7&r=0&o=5&pid=1.7"
        alt="logo" 
        style={{ width: width, height: 'auto' }} 
      />
    </div>
  );
}

export default Logo;
