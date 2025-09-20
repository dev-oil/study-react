import { useState } from 'react';
import { sculptureList, type Sculpture } from './data';

export const Gallery = () => {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  const sculpture: Sculpture = sculptureList[index];
  return (
    <div>
      <button onClick={handleNextClick}>Next</button>
      <h4>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h4>
      <h5>
        ({index + 1} of {sculptureList.length})
      </h5>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </div>
  );
};
