import { useReducer, useRef } from "react";
import useClickOutside from "../../hooks/useClickOutside";

import { FilterButton } from "../FilterButton/FilterButton";

import { filterReducer } from "../../reducers/filterReducer";
import { filterOpenReducer } from "../../reducers/filterOpenReducer";

import { actualYears } from "../../utils/actualYears";
import { checkChosen } from "../../utils/checkChosen";

import { initialFilterState } from "../../constants/initialFilterState";
import { initialOpenFilterState } from "../../constants/initialOpenFilterState";

import { FilterActionKind } from "../../interfaces/filter";

export const Content = () => {
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

  const blockRef = useRef<HTMLElement>(null);
  useClickOutside(blockRef, handleClickOutside);

  const fakeArray = new Array(10).fill(0);

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

        <div className="flex gap-2 my-4 flex-col">
          <div className="flex relative">
            <FilterButton
              data={fakeArray}
              descriptionType="small"
              buttonTitle="Марка а/м"
              value={toFilterState.brand}
              openStatus={openFilterState.brand}
              onClear={() =>
                toFilterDispatch({
                  type: FilterActionKind.BRAND,
                  payload: null
                })
              }
              onOpenMenu={() => {
                openFilterDispatch({
                  type: FilterActionKind.BRAND,
                  payload: !openFilterState.brand
                });
              }}
              onSelectValue={(e) =>
                toFilterDispatch({ type: FilterActionKind.BRAND, payload: e })
              }
            />

            <FilterButton
              data={fakeArray}
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
            data={actualYears()}
            descriptionType="large"
            buttonTitle="Выбрать запчасть"
            value={toFilterState.spare_part}
            openStatus={openFilterState.spare_part}
            onClear={() =>
              toFilterDispatch({
                type: FilterActionKind.SPARE_PART,
                payload: null
              })
            }
            onOpenMenu={() => {
              openFilterDispatch({
                type: FilterActionKind.SPARE_PART,
                payload: !openFilterState.spare_part
              });
            }}
            onSelectValue={(e) =>
              toFilterDispatch({
                type: FilterActionKind.SPARE_PART,
                payload: e
              })
            }
          />
        </div>
      </aside>

      <div className="flex-1 bg-primary_bg w-full p-3 shadow-lg rounded-md ml-[270px]">
        <main>main</main>
      </div>
    </main>
  );
};
