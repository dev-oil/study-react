type FancyTextProps = {
  title?: boolean;
  text: string;
};

export const FancyText = ({ title, text }: FancyTextProps) => {
  return title ? (
    <h3 className='text-xl text-blue-600 mb-2'>{text}</h3>
  ) : (
    <h3 className='font-extrabold'>{text}</h3>
  );
};
