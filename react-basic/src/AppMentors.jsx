import React, { useState } from 'react';

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: 'devoil',
    title: '개발자',
    mentors: [
      {
        name: 'f-lab',
        title: '시니어개발자',
      },
      {
        name: '프로그래머스',
        title: '시니어개발자',
      },
    ],
  });
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
          const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);

          // react 에서는 새로운 참조 값을 가진 객체와 배열만 변경되었다고 인식함.
          setPerson((person) => ({
            ...person,
            mentors: person.mentors.map((mentor) => {
              if (mentor.name === prev) {
                return { ...mentor, name: current };
              }
              return mentor;
            }),
          }));
        }}
      >
        멘토의 이름을 바꾸기
      </button>
    </div>
  );
}
