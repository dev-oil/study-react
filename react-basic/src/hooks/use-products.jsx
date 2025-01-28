import { useEffect, useState } from 'react';

// 💡 일반 컴포넌트와 커스텀 훅의 다른점?
// 일반 컴포넌트의 경우 리액트에 전달해줄 UI JSX를 사용
// 커스텀 훅은 외부 사람들과 공유하고 싶은 데이터를 리턴
export default function useProducts({ salesOnly }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(undefined);

    fetch(`data/${salesOnly ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('🔥 뜨끈한 데이터를 네트워크에서 받아옴!');
        setProducts(data);
      })
      .catch((e) => setError('에러가 발생했음!'))
      .finally(() => setLoading(false));

    return () => {
      console.log('🧹 깨끗하게 청소하는 일들을 합니다');
    };
  }, [salesOnly]);

  return [loading, error, products];
}
