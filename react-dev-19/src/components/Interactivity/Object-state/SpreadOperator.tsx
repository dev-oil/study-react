import { useState } from 'react';

export const SpreadOperator = () => {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <article className='article'>
      <h3 className='article-title'>Spread Operator</h3>

      <label>
        First name:
        <input
          name='firstName'
          value={person.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name:
        <input
          name='lastName'
          value={person.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input name='email' value={person.email} onChange={handleChange} />
      </label>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </article>
  );
};
