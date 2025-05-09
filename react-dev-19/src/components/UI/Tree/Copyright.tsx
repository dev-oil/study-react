type CopyrightProps = {
  year: number;
};

export const Copyright = ({ year }: CopyrightProps) => {
  return <p className='small'>©️ {year}</p>;
};
