import { useState } from 'react';

// 함수 하나로 통합해보기
export const NestedObject = () => {
  const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    },
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    const keys = name.split('.');

    setPerson((prev) => {
      const updated: any = { ...prev }; // 1. 최상위 복사
      let temp = updated;

      for (let i = 0; i < keys.length - 1; i++) {
        temp[keys[i]] = { ...temp[keys[i]] }; // 2. 중첩 객체도 복사
        temp = temp[keys[i]]; // 3. temp를 내려가면서 마지막 키 직전까지 이동
      }

      temp[keys.at(-1)!] = value; // 4. 마지막 키에 값 할당
      return updated;
    });
  }

  return (
    <article className='article'>
      <h3 className='article-title'>Nested Object</h3>

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
        <i>{person.artwork.title}</i> by {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img src={person.artwork.image} alt={person.artwork.title} />
    </article>
  );
};
