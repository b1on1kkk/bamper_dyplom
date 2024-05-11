interface TitleType {
  text: string;
}

export const Title = ({ text }: TitleType) => {
  return (
    <div>
      <h1 className="uppercase text-2xl text-primary_text text-center py-5">
        {text}
      </h1>
    </div>
  );
};
