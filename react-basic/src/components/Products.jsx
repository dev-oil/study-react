import React, { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked((prev) => !prev);

  // 컴포넌트가 처음등록되었을 때 처리해야하는 일이 있다면, useEffect 사용.
  // 사용하지 않는다면? 무한 루프에 빠지게 된다.
  useEffect(() => {
    // 컴포넌트가 마운트 되면 처음에만 호출
    fetch(`data/${checked ? 'sale_' : ''}products.json`) // checked 값에 따라 다른 데이터를 가져옴
      .then((res) => res.json())
      .then((data) => {
        console.log('🔥 뜨끈한 데이터를 네트워크에서 받아옴!');
        setProducts(data);
      });

    return () => {
      // 컴포넌트가 언마운트 되면
      console.log('🧹 깨끗하게 청소하는 일들을 합니다');
    };
  }, [checked]); // checked 값이 변경될 때만 호출

  return (
    <>
      <input
        type='checkbox'
        id='checkbox'
        value={checked}
        onChange={handleChange}
      />
      <label htmlFor='checkbox'>Show Only 🔥 sale</label>
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
    </>
  );
}
