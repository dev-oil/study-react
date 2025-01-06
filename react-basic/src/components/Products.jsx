import React, { useEffect, useState } from 'react';

export default function Products() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  // 컴포넌트가 처음등록되었을 때 처리해야하는 일이 있다면, useEffect 사용.
  // 사용하지 않는다면? 무한 루프에 빠지게 된다.
  useEffect(() => {
    // 컴포넌트가 마운트 되면 처음에만 호출
    fetch('data/products.json')
      .then((res) => res.json())
      .then((data) => {
        console.log('🔥 뜨끈한 데이터를 네트워크에서 받아옴!');
        setProducts(data);
      });

    return () => {
      // 컴포넌트가 언마운트 되면
      console.log('🧹 깨끗하게 청소하는 일들을 합니다');
    };
  }, []); // 딱 한번만 처리가 되어야 한다면 두번째 인자에 빈 배열 주기

  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
}
