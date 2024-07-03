import React from 'react';

function Logo({ width = '100px' }) {
  return (
    <div>
      <img 
        src="https://cloud.appwrite.io/v1/storage/buckets/667f95ba0029bd45762d/files/6680e35d001d9f970d3a/preview?project=667f935b0023e205d2dd" 
        alt="logo" 
        style={{ width: width, height: 'auto' }} 
      />
    </div>
  );
}

export default Logo;
