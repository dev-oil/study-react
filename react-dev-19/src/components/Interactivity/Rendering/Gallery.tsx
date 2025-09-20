export const Gallery = () => {
  return (
    <section>
      <h1>Inspiring Sculptures</h1>
      <Image />
      <Image />
      <Image />
    </section>
  );
};

const Image = () => {
  return (
    <img
      src='https://i.imgur.com/ZF6s192.jpg'
      alt="'Floralis Genérica' by Eduardo Catalano: a gigantic metallic flower sculpture with reflective petals"
    />
  );
};
