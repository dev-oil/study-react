import { useCallback, useState } from 'react';

export const TSuseCallback = () => {
  const [value, setValue] = useState('Change me');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <>
      <input value={value} onChange={handleChange} />
      <p>Value: {value}</p>
    </>
  );
};
