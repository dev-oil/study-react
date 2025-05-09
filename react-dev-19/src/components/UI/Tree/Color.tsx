type colorProps = {
  value: string;
};

export const Color = ({ value }: colorProps) => {
  return (
    <div style={{ width: '100px', height: '100px', backgroundColor: value }} />
  );
};
