import axios, { AxiosError } from "axios";

import { useQuery } from "@tanstack/react-query";
import useClickOutside from "../../hooks/useClickOutside";
import { useEffect, useReducer, useRef, useState } from "react";

import { ChevronRight } from "lucide-react";
import { FilterInput } from "../FilterInput/FilterInput";
import { FilterButton } from "../FilterButton/FilterButton";

import { filterReducer } from "../../reducers/filterReducer";
import { filterOpenReducer } from "../../reducers/filterOpenReducer";

import { actualYears } from "../../utils/actualYears";
import { checkChosen } from "../../utils/checkChosen";

import { initialFilterState } from "../../constants/initialFilterState";
import { initialOpenFilterState } from "../../constants/initialOpenFilterState";

import type { Brands } from "../../interfaces/brands";
import type { Models } from "../../interfaces/models";
import { FilterActionKind } from "../../interfaces/filter";
import type { FilterOpenState } from "../../interfaces/openFilter";

import { BODY } from "../../constants/body";
import { FUEL } from "../../constants/fuel";
import { TRANSMISSION } from "../../constants/transmission";
import { SPARE_PART_CATEGORY } from "../../constants/sparePartCategory";

const useBrands = () => {
  return useQuery<Array<Brands>, AxiosError>({
    queryKey: ["brands"],
    queryFn: async () => {
      return await axios
        .get("http://localhost:6969/brands/all")
        .then((res) => res.data)
        .catch((err) => err);
    },
    enabled: false
  });
};

function findBrandModels(brands: Array<Brands>, brand_name: string) {
  for (let i = 0; i < brands.length; i++) {
    if (brands[i].name === brand_name) return brands[i].model;
  }
}

export const Content = () => {
  const { data, refetch } = useBrands();

  const [models, setModels] = useState<Array<Models> | undefined>(undefined);
  const [extendedFilter, setExtendedFilter] = useState<boolean>(false);

  const blockRef = useRef<HTMLElement>(null);

  const [toFilterState, toFilterDispatch] = useReducer(
    filterReducer,
    initialFilterState
  );
  const [openFilterState, openFilterDispatch] = useReducer(
    filterOpenReducer,
    initialOpenFilterState
  );

  const handleClickOutside = () => {
    if (checkChosen(openFilterState)) {
      openFilterDispatch({
        type: FilterActionKind.INITIAL_STATE,
        payload: false
      });
    }
  };

  useClickOutside<FilterOpenState>(
    blockRef,
    openFilterState,
    handleClickOutside
  );

  useEffect(() => {
    if (toFilterState.brand && data) {
      setModels(findBrandModels(data, toFilterState.brand));
    }
  }, [data, toFilterState.brand]);

  console.log(toFilterState);

  return (
    <main className="flex">
      <aside
        className="flex flex-col bg-primary_bg p-3 fixed w-[250px] shadow-lg rounded-md"
        ref={blockRef}
      >
        <div className="border-b-[1px] border-primary_border pb-2">
          <h1 className="text-primary_text uppercase">
            Найдено <span className="font-bold">12 487 693</span> З/Ч
          </h1>
        </div>

        <div className="flex gap-2 mt-4 mb-2 flex-col">
          <div className="flex relative">
            <FilterButton
              data={data}
              descriptionType="small"
              buttonTitle="Марка а/м"
              value={toFilterState.brand}
              openStatus={openFilterState.brand}
              onClear={() => {
                toFilterDispatch({
                  type: FilterActionKind.BRAND,
                  payload: null
                });
                setModels(undefined);
              }}
              onOpenMenu={() => {
                openFilterDispatch({
                  type: FilterActionKind.BRAND,
                  payload: !openFilterState.brand
                });

                if (!openFilterState.brand === true) refetch();
              }}
              onSelectValue={(e) =>
                toFilterDispatch({ type: FilterActionKind.BRAND, payload: e })
              }
            />

            <FilterButton
              data={models}
              descriptionType="small"
              buttonTitle="Модель а/м"
              value={toFilterState.model}
              openStatus={openFilterState.model}
              onClear={() =>
                toFilterDispatch({
                  type: FilterActionKind.MODEL,
                  payload: null
                })
              }
              onOpenMenu={() => {
                openFilterDispatch({
                  type: FilterActionKind.MODEL,
                  payload: !openFilterState.model
                });
              }}
              onSelectValue={(e) =>
                toFilterDispatch({ type: FilterActionKind.MODEL, payload: e })
              }
            />
          </div>

          <div className="flex relative">
            <FilterButton
              data={actualYears()}
              buttonTitle="Год от"
              descriptionType="small"
              value={toFilterState.year_from}
              openStatus={openFilterState.year_from}
              onClear={() =>
                toFilterDispatch({
                  type: FilterActionKind.YEAR_FROM,
                  payload: null
                })
              }
              onOpenMenu={() => {
                openFilterDispatch({
                  type: FilterActionKind.YEAR_FROM,
                  payload: !openFilterState.year_from
                });
              }}
              onSelectValue={(e) =>
                toFilterDispatch({
                  type: FilterActionKind.YEAR_FROM,
                  payload: e
                })
              }
            />

            <FilterButton
              data={actualYears()}
              buttonTitle="Год до"
              descriptionType="small"
              value={toFilterState.year_to}
              openStatus={openFilterState.year_to}
              onClear={() =>
                toFilterDispatch({
                  type: FilterActionKind.YEAR_TO,
                  payload: null
                })
              }
              onOpenMenu={() => {
                openFilterDispatch({
                  type: FilterActionKind.YEAR_TO,
                  payload: !openFilterState.year_to
                });
              }}
              onSelectValue={(e) =>
                toFilterDispatch({ type: FilterActionKind.YEAR_TO, payload: e })
              }
            />
          </div>

          <FilterButton
            data={SPARE_PART_CATEGORY}
            descriptionType="large"
            buttonTitle="Выбрать запчасть"
            value={toFilterState.category}
            openStatus={openFilterState.category}
            onClear={() =>
              toFilterDispatch({
                type: FilterActionKind.CATEGORY,
                payload: null
              })
            }
            onOpenMenu={() => {
              openFilterDispatch({
                type: FilterActionKind.CATEGORY,
                payload: !openFilterState.category
              });
            }}
            onSelectValue={(e) =>
              toFilterDispatch({
                type: FilterActionKind.CATEGORY,
                payload: e
              })
            }
          />

          <FilterInput
            type="text"
            value={toFilterState.spare_id}
            onChange={(e) => {
              toFilterDispatch({
                type: FilterActionKind.SPARE_ID,
                payload: e.target.value
              });
            }}
            placeholder="Номер запчасти..."
          />

          <FilterInput
            type="text"
            value={toFilterState.article}
            onChange={(e) => {
              toFilterDispatch({
                type: FilterActionKind.ARTICLE,
                payload: e.target.value
              });
            }}
            placeholder="Артикул объявления..."
          />
        </div>

        <div>
          <button
            className="text-sm text-primary_text/70 hover:text-primary_text flex items-center gap-1 transition-colors"
            onClick={() => setExtendedFilter(!extendedFilter)}
          >
            <span>Больше параметров поиска</span>
            <div
              className={`${
                extendedFilter ? "rotate-90" : "rotate-0"
              } transition-transform`}
            >
              <ChevronRight width={13} height={13} />
            </div>
          </button>
        </div>

        {extendedFilter && (
          <div className="flex gap-2 mt-2 flex-col animate-[slide-up_0.3s]">
            <div className="flex relative">
              <FilterInput
                type="number"
                value={toFilterState.engine_volume}
                onChange={(e) => {
                  toFilterDispatch({
                    type: FilterActionKind.ENGINE_VOLUME,
                    payload: e.target.value
                  });
                }}
                placeholder="Объем: 1.6"
              />

              <FilterButton
                data={FUEL}
                buttonTitle="Топливо"
                descriptionType="small"
                value={toFilterState.fuel}
                openStatus={openFilterState.fuel}
                onClear={() =>
                  toFilterDispatch({
                    type: FilterActionKind.FUEL,
                    payload: null
                  })
                }
                onOpenMenu={() => {
                  openFilterDispatch({
                    type: FilterActionKind.FUEL,
                    payload: !openFilterState.fuel
                  });
                }}
                onSelectValue={(e) =>
                  toFilterDispatch({
                    type: FilterActionKind.FUEL,
                    payload: e
                  })
                }
              />
            </div>

            <div className="flex relative">
              <FilterButton
                data={TRANSMISSION}
                buttonTitle="Коробка"
                descriptionType="small"
                value={toFilterState.transmission}
                openStatus={openFilterState.transmission}
                onClear={() =>
                  toFilterDispatch({
                    type: FilterActionKind.TRANSMISSION,
                    payload: null
                  })
                }
                onOpenMenu={() => {
                  openFilterDispatch({
                    type: FilterActionKind.TRANSMISSION,
                    payload: !openFilterState.transmission
                  });
                }}
                onSelectValue={(e) =>
                  toFilterDispatch({
                    type: FilterActionKind.TRANSMISSION,
                    payload: e
                  })
                }
              />

              <FilterButton
                data={BODY}
                buttonTitle="Кузов"
                descriptionType="small"
                value={toFilterState.body}
                openStatus={openFilterState.body}
                onClear={() =>
                  toFilterDispatch({
                    type: FilterActionKind.BODY,
                    payload: null
                  })
                }
                onOpenMenu={() => {
                  openFilterDispatch({
                    type: FilterActionKind.BODY,
                    payload: !openFilterState.body
                  });
                }}
                onSelectValue={(e) =>
                  toFilterDispatch({
                    type: FilterActionKind.BODY,
                    payload: e
                  })
                }
              />
            </div>

            <div className="flex">
              <FilterInput
                type="number"
                value={toFilterState.price_from}
                onChange={(e) => {
                  toFilterDispatch({
                    type: FilterActionKind.PRICE_FROM,
                    payload: e.target.value
                  });
                }}
                placeholder="Цена от, руб"
              />
              <FilterInput
                type="number"
                value={toFilterState.price_to}
                onChange={(e) => {
                  toFilterDispatch({
                    type: FilterActionKind.PRICE_TO,
                    payload: e.target.value
                  });
                }}
                placeholder="Цена до, руб"
              />
            </div>
          </div>
        )}
      </aside>

      <div className="flex-1 bg-primary_bg w-full p-3 shadow-lg rounded-md ml-[270px]">
        <main>main</main>
      </div>
    </main>
  );
};
