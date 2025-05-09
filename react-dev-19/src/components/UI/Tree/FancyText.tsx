type FancyTextProps = {
  title?: boolean;
  text: string;
};

export const FancyText = ({ title, text }: FancyTextProps) => {
  return title ? <h2>{text}</h2> : <h3>{text}</h3>;
};
