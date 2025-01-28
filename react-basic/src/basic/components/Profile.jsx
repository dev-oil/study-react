import React from 'react';
import Avartar from './Avartar';

export default function Profile({ image, name, title, isNew }) {
  return (
    <div className='profile'>
      <Avartar image={image} isNew={isNew} />
      <strong>{name}</strong>
      <p>{title}</p>
    </div>
  );
}
