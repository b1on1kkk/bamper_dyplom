import useBrands from "../../../hooks/useBrands";
import useQueryFilter from "../../../hooks/useQueryFilter";

import useClickOutside from "../../../hooks/useClickOutside";
import { useEffect, useReducer, useRef, useState } from "react";

import { Divider } from "./Divider";
import { FilterInput } from "../../FilterInput/FilterInput";
import { FilterButton } from "../../FilterButton/FilterButton";

import { filterOpenReducer } from "../../../reducers/filterOpenReducer";
import { filterReducer } from "../../../reducers/filterReducer";

import { actualYears } from "../../../utils/actualYears";
import { checkChosen } from "../../../utils/checkChosen";
import { findBrandModels } from "../../../utils/findBrandModels";

import { BODY } from "../../../constants/body";
import { FUEL } from "../../../constants/fuel";
import { TRANSMISSION } from "../../../constants/transmission";
import { SPARE_PART_CATEGORY } from "../../../constants/sparePartCategory";
import { initialFilterState } from "../../../constants/initialFilterState";
import { initialOpenFilterState } from "../../../constants/initialOpenFilterState";

import { Models } from "../../../interfaces/models";
import { FilterActionKind } from "../../../interfaces/filter";
import { FilterOpenState } from "../../../interfaces/openFilter";

export const Aside = () => {
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

  // хук, который записывает query каждый раз, когда пользователь фильтрует данные
  useQueryFilter(toFilterState);

  // хендлер, который скрывает открытые модальные окна фильтрации
  const handleClickOutside = () => {
    if (checkChosen(openFilterState)) {
      openFilterDispatch({
        type: FilterActionKind.INITIAL_STATE,
        payload: false
      });
    }
  };

  // хук, который следить за тем, нажал ли пользователь за пределы определенного блока
  useClickOutside<FilterOpenState>(
    blockRef,
    openFilterState,
    handleClickOutside
  );

  // в зависимости от выбранной марки автомобиля, устанавливаем все его существующие модели
  useEffect(() => {
    if (toFilterState.brand && data) {
      setModels(findBrandModels(data, toFilterState.brand.name));
    }
  }, [data, toFilterState.brand]);

  return (
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
              payload: { name: e.target.value, code: e.target.value }
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
              payload: { name: e.target.value, code: e.target.value }
            });
          }}
          placeholder="Артикул объявления..."
        />
      </div>

      {/*  */}
      <Divider
        extendedFilter={extendedFilter}
        onClick={() => setExtendedFilter(!extendedFilter)}
      />
      {/*  */}

      {extendedFilter && (
        <div className="flex gap-2 mt-2 flex-col animate-[slide-up_0.3s]">
          <div className="flex relative">
            <FilterInput
              type="number"
              value={toFilterState.engine_volume}
              onChange={(e) => {
                toFilterDispatch({
                  type: FilterActionKind.ENGINE_VOLUME,
                  payload: { name: e.target.value, code: e.target.value }
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
                  payload: { name: e.target.value, code: e.target.value }
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
                  payload: { name: e.target.value, code: e.target.value }
                });
              }}
              placeholder="Цена до, руб"
            />
          </div>
        </div>
      )}
    </aside>
  );
};
