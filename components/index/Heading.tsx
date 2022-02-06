export const Heading = ({ title, id }: { title: string; id: string }) => {
  return (
    <h2
      className="w-full text-5xl font-thin font-sans text-center pt-20 pb-10"
      id={id}
    >
      {title}
    </h2>
  );
};
