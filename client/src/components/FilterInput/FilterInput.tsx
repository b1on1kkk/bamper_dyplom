import { CircleX } from "lucide-react";
import type { FilterBy } from "../../interfaces/filter";
import type { FilterType } from "../../interfaces/filterType";

interface FilterInputType {
  filterType: FilterType;
  value: FilterBy;
  placeholder: string;
  type: "text" | "number";
  onClear: (e: { data: null; attribute: string }) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FilterInput = ({
  filterType,
  type,
  value,
  placeholder,
  onClear,
  onChange
}: FilterInputType) => {
  return (
    <div className="flex-1 flex text-primary_text border-[1px] border-primary_border">
      <div className="w-full flex">
        <input
          type={type}
          placeholder={placeholder}
          className="w-full placeholder:text-sm text-sm py-1 px-2 placeholder:text-primary_text/50 bg-transparent outline-none"
          onChange={onChange}
          value={value ? value.name : ""}
          data-type={filterType}
        />
      </div>

      {value?.name && (
        <div className="flex items-center pr-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClear({
                data: null,
                attribute: filterType
              });
            }}
          >
            <CircleX width={15} height={15} />
          </button>
        </div>
      )}
    </div>
  );
};
