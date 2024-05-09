import { ChevronDown, CircleX } from "lucide-react";

type Description = "small" | "large";

interface FilterButtonType {
  data: Array<any>;
  buttonTitle: string;
  openStatus: boolean;
  value: string | null;
  descriptionType: Description;

  onClear: () => void;
  onOpenMenu: () => void;
  onSelectValue: (e: string) => void;
}

export const FilterButton = ({
  data,
  value,
  buttonTitle,
  descriptionType,
  openStatus,
  onClear,
  onOpenMenu,
  onSelectValue
}: FilterButtonType) => {
  return (
    <div className="relative flex-1 border-[1px] border-primary_border">
      <button className="w-full" onClick={onOpenMenu}>
        <div className="flex text-primary_text text-sm py-1 px-2 items-center">
          <div className="flex-1 w-0 text-start">
            <p className="overflow-hidden whitespace-nowrap text-ellipsis">
              {value ? value : buttonTitle}
            </p>
          </div>
          <div className="flex gap-1">
            <span
              className={`${
                openStatus && "rotate-180"
              } transition-all order-last`}
            >
              <ChevronDown width={15} height={15} />
            </span>

            {value && (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  onClear();
                }}
                className="z-10"
              >
                <CircleX width={15} height={15} />
              </div>
            )}
          </div>
        </div>
      </button>
      {openStatus && (
        <div
          className={`absolute -left-[1px] w-[${
            descriptionType === "small" ? 114 : 226
          }px] h-[200px] bg-primary_bg overflow-auto z-10 flex animate-[slide-up_0.3s] flex-col shadow-lg text-white border-[1px] border-primary_border`}
        >
          <div className="p-1 border-b-[1px]">
            <input
              type="text"
              className="w-full outline-none placeholder:text-sm text-sm bg-inherit"
              placeholder="Искать..."
            />
          </div>
          <ul className="w-full">
            {data.map(() => {
              return (
                <li className="flex hover:bg-indigo-400 text-sm transition-colors">
                  <button
                    className="w-full flex p-2"
                    onClick={() => {
                      onOpenMenu();
                      onSelectValue("Audi");
                    }}
                  >
                    BMW
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
