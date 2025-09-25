import { useImmer } from 'use-immer';
import set from 'lodash/set';

export const UseImmer = () => {
  const [person, updatePerson] = useImmer({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    },
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    updatePerson((draft) => {
      set(draft, name, value); // "artwork.title" 자동 탐색 후 대입
    });
  }

  return (
    <article className='article'>
      <h3 className='article-title'>UseImmer</h3>
      <label>
        Name:
        <input name='name' value={person.name} onChange={handleChange} />
      </label>
      <label>
        Title:
        <input
          name='artwork.title'
          value={person.artwork.title}
          onChange={handleChange}
        />
      </label>
      <label>
        City:
        <input
          name='artwork.city'
          value={person.artwork.city}
          onChange={handleChange}
        />
      </label>
      <label>
        Image:
        <input
          name='artwork.image'
          value={person.artwork.image}
          onChange={handleChange}
        />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img src={person.artwork.image} alt={person.artwork.title} />
    </article>
  );
};
