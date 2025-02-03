import { useEffect, useState } from 'react';

// 💡 커스텀 훅의 문제점
// 1. cache 캐시가 되지 않는다.
// 2. retry 기능이 없음
export default function useProducts({ salesOnly }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    console.log('fetching....');
    setLoading(true);
    setError(undefined);

    fetch(`data/${salesOnly ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
        setProducts(data);
      })
      .catch((e) => setError('에러가 발생했음!'))
      .finally(() => setLoading(false));
    return () => {
      console.log('🧹 깨끗하게 청소하는 일들을 합니다.');
    };
  }, [salesOnly]);

  return [loading, error, products];
}
