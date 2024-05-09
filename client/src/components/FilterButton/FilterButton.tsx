import { ChevronDown, CircleX } from "lucide-react";
import { Brands } from "../../interfaces/brands";
import { useEffect, useState } from "react";
import { Models } from "../../interfaces/models";
import { ActualYears } from "../../interfaces/actualYears";

type Description = "small" | "large";

interface FilterButtonType {
  data: Array<Brands> | Array<Models> | Array<ActualYears> | undefined;
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
  const [fetchedData, setFetchedData] = useState<
    Array<{ value: string; code: string }>
  >([]);

  useEffect(() => {
    if (data && data.length > 0) {
      const array: Array<{ value: string; code: string }> = [];
      data.forEach((item) => array.push({ value: item.name, code: item.code }));

      setFetchedData(array);
    }

    return () => {
      setFetchedData([]);
    };
  }, [data]);

  return (
    <div className="relative flex-1 border-[1px] border-primary_border">
      <button
        className="w-full hover:bg-primary_border transition-colors"
        onClick={onOpenMenu}
      >
        <div
          className={`flex ${
            value ? "text-primary_text" : "text-primary_text/70"
          }  text-sm py-1 px-2 items-center`}
        >
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
          className={`absolute -left-[1px] ${
            descriptionType === "small" ? "w-[113px]" : "w-[226px]"
          } max-h-[200px] bg-primary_bg overflow-auto z-50 flex animate-[slide-up_0.3s] flex-col drop-shadow-lg text-white border-[1px] border-primary_border`}
        >
          <div className="p-1 border-b-[1px]">
            <input
              type="text"
              className="w-full outline-none placeholder:text-sm text-sm bg-inherit"
              placeholder="Искать..."
            />
          </div>
          <ul className="w-full">
            {fetchedData.length > 0 ? (
              <>
                {fetchedData.map((item, idx) => {
                  return (
                    <li
                      className="flex hover:bg-indigo-400 text-sm transition-colors"
                      key={idx}
                    >
                      <button
                        className="w-full flex p-2 text-start"
                        onClick={() => {
                          onOpenMenu();
                          onSelectValue(item.value);
                        }}
                      >
                        {item.value}
                      </button>
                    </li>
                  );
                })}
              </>
            ) : (
              <li className="text-sm m-2">Совпадения не найдены</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
