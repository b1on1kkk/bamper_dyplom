import { useEffect, useState } from "react";

import { ChevronDown, CircleX } from "lucide-react";

import type { FilterButtonType } from "../../interfaces/filterButtonType";

export const FilterButton = ({
  data,
  value,
  filterType,
  openStatus,
  buttonTitle,
  descriptionType,

  onClear,
  onOpenMenu,
  onSelectValue
}: FilterButtonType) => {
  const [fetchedData, setFetchedData] = useState<
    Array<{ value: string; code: string }>
  >([]);
  const [cache, setCache] = useState<Array<{ value: string; code: string }>>(
    []
  );

  const [searchInput, setSearchInput] = useState<string>("");

  useEffect(() => {
    if (data && data.length > 0) {
      const array: Array<{ value: string; code: string }> = [];
      data.forEach((item) => array.push({ value: item.name, code: item.code }));

      setCache(array);
      setFetchedData(array);
    }

    return () => {
      setFetchedData([]);
    };
  }, [data]);

  useEffect(() => {
    if (searchInput) {
      setFetchedData([
        ...fetchedData.filter((item) =>
          item.value
            .toLowerCase()
            .replace(/\s/g, "")
            .includes(searchInput.toLowerCase().replace(/\s/g, ""))
        )
      ]);
    }
  }, [searchInput]);

  return (
    <div className="relative flex-1 border-[1px] border-primary_border">
      <button
        id={`${filterType}_button`}
        className="w-full hover:bg-primary_border transition-colors"
        onClick={() => onOpenMenu({ attribute: filterType })}
      >
        <div
          className={`flex ${
            value ? "text-primary_text" : "text-primary_text/50"
          } text-sm py-1 px-2 items-center`}
        >
          <div className="flex-1 w-0 text-start">
            <p className="overflow-hidden whitespace-nowrap text-ellipsis">
              {value ? value.name : buttonTitle}
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
                  onClear({
                    data: null,
                    attribute: filterType
                  });
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
              value={searchInput}
              placeholder="Искать..."
              className="w-full outline-none placeholder:text-sm text-sm bg-inherit"
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Backspace") setFetchedData(cache);
              }}
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
                          onOpenMenu({ attribute: filterType });
                          onSelectValue({
                            data: { name: item.value, code: item.code },
                            attribute: filterType
                          });
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
