interface FilterInputType {
  value: { name: string; code: string } | null;
  placeholder: string;
  type: "text" | "number";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FilterInput = ({
  type,
  value,
  placeholder,
  onChange
}: FilterInputType) => {
  return (
    <div className="flex-1">
      <input
        type={type}
        placeholder={placeholder}
        className="w-full placeholder:text-sm text-sm py-1 px-2 bg-transparent border-[1px] border-primary_border outline-none text-primary_text placeholder:text-primary_text/70 focus:border-primary_text transition-colors"
        onChange={onChange}
        value={value ? value.name : ""}
      />
    </div>
  );
};
