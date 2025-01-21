import React from 'react';

export default function Avartar({ isNew, image }) {
  return (
    <div className='avartar'>
      {isNew && <span className='badge'>NEW</span>}
      <img className='profile_img' src={image} alt='avatar' />
    </div>
  );
}
