import useBrands from "../../../hooks/useBrands";
import useClickOutside from "../../../hooks/useClickOutside";
import useGlobalContext from "../../../hooks/useGlobalContext";

import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { Divider } from "./Divider";
import { FilterInput } from "../../FilterInput/FilterInput";
import { FilterButton } from "../../FilterButton/FilterButton";

import { actualYears } from "../../../utils/actualYears";
import { checkChosen } from "../../../utils/checkChosen";
import { searchQueryParams } from "../../../utils/searchParams";
import { findBrandModels } from "../../../utils/findBrandModels";
import { changeInitialState } from "../../../utils/changeInitialState";

import { BODY } from "../../../constants/body";
import { FUEL } from "../../../constants/fuel";
import { TRANSMISSION } from "../../../constants/transmission";
import { SPARE_PART_CATEGORY } from "../../../constants/sparePartCategory";
import { filterState } from "../../../constants/initialFilterState";
import {
  OpenFilterState,
  openFilterState
} from "../../../constants/initialOpenFilterState";

import { Models } from "../../../interfaces/models";
import { FilterOpenState } from "../../../interfaces/openFilter";
import { FilterBy, FilterState } from "../../../interfaces/filter";

export const Aside = () => {
  const navigate = useNavigate();

  const { data: brands } = useBrands();
  const [searchParams] = useSearchParams();
  const blockRef = useRef<HTMLElement>(null);

  const { numberOfElements, setCurrentPage } = useGlobalContext();

  const [initialFilterState, setInitialFilterState] =
    useState<FilterState>(filterState);
  const [statusFilterState, setStatusFilterState] =
    useState<OpenFilterState>(openFilterState);

  const [extendedFilter, setExtendedFilter] = useState<boolean>(false);
  const [models, setModels] = useState<Array<Models> | undefined>(undefined);

  // функция, которая управляет фильтрацией и записью параметры фильтров в query
  function toFilterHandler({
    data,
    attribute
  }: {
    data: FilterBy;
    attribute: string;
  }) {
    const newFilterState = { ...initialFilterState, [attribute]: data };

    if (attribute === "brand" && !data) newFilterState.model = null;

    navigate({
      search: `?${searchQueryParams(newFilterState)}`
    });

    if (attribute === "brand") setModels(undefined);

    setInitialFilterState(newFilterState);
    setCurrentPage(1);
  }

  // функция, которая управляет открытием/закрытием модальных окон
  function toOpenStatusHandler(attribute: string) {
    setStatusFilterState((prevData) => ({
      ...openFilterState,
      [attribute]: !prevData[attribute as keyof OpenFilterState]
    }));
  }

  // управляет вводом значений
  function inputHandler(e: React.ChangeEvent<HTMLInputElement>, text: boolean) {
    if (e.target.value === "") {
      toFilterHandler({
        data: null,
        attribute: e.currentTarget.getAttribute("data-type")!
      });

      return;
    }

    if (!+e.target.value && !text) return;

    toFilterHandler({
      data: { name: e.target.value, code: e.target.value },
      attribute: e.currentTarget.getAttribute("data-type")!
    });
  }

  // хендлер, который скрывает открытые модальные окна фильтрации при клике за пределы модального окна
  const handleClickOutside = () => {
    if (checkChosen(statusFilterState)) {
      setStatusFilterState({ ...openFilterState });
    }
  };

  // хук, который следить за тем, нажал ли пользователь за пределы определенного блока
  useClickOutside<FilterOpenState>(
    blockRef,
    statusFilterState,
    handleClickOutside
  );

  // мемоизируем
  const memoizedActualYears = useMemo(() => actualYears(), []);
  const memoizedFindBrandModels = useMemo(() => {
    if (initialFilterState.brand && brands) {
      return findBrandModels(brands.data, initialFilterState.brand.name);
    }
  }, [brands, initialFilterState.brand]);

  // в зависимости от выбранной марки автомобиля, устанавливаем все его существующие модели
  useEffect(() => {
    setModels(memoizedFindBrandModels);
  }, [memoizedFindBrandModels]);

  useEffect(() => {
    if (brands) {
      setInitialFilterState(
        changeInitialState(searchParams, brands.data, models)
      );
    }
  }, [brands, models]);

  return (
    <aside
      className="flex flex-col bg-primary_bg p-3 fixed w-[250px] shadow-lg rounded-md"
      ref={blockRef}
    >
      <div className="border-b-[1px] border-primary_border pb-2">
        <h1 className="text-primary_text uppercase">
          Найдено <span className="font-bold">{numberOfElements}</span> З/Ч
        </h1>
      </div>

      <div className="flex gap-2 mt-4 mb-2 flex-col">
        <div className="flex relative">
          <FilterButton
            data={brands?.data}
            filterType="brand"
            descriptionType="small"
            buttonTitle="Марка а/м"
            value={initialFilterState.brand}
            openStatus={statusFilterState.brand}
            onClear={(e) => toFilterHandler(e)}
            onOpenMenu={(e) => toOpenStatusHandler(e.attribute)}
            onSelectValue={(e) => toFilterHandler(e)}
          />

          <FilterButton
            data={models}
            filterType="model"
            descriptionType="small"
            buttonTitle="Модель а/м"
            value={initialFilterState.model}
            openStatus={statusFilterState.model}
            onClear={(e) => toFilterHandler(e)}
            onOpenMenu={(e) => toOpenStatusHandler(e.attribute)}
            onSelectValue={(e) => toFilterHandler(e)}
          />
        </div>

        <div className="flex relative">
          <FilterButton
            data={memoizedActualYears}
            filterType="year_from"
            buttonTitle="Год от"
            descriptionType="small"
            value={initialFilterState.year_from}
            openStatus={statusFilterState.year_from}
            onClear={(e) => toFilterHandler(e)}
            onOpenMenu={(e) => toOpenStatusHandler(e.attribute)}
            onSelectValue={(e) => toFilterHandler(e)}
          />

          <FilterButton
            data={memoizedActualYears}
            filterType="year_to"
            buttonTitle="Год до"
            descriptionType="small"
            value={initialFilterState.year_to}
            openStatus={statusFilterState.year_to}
            onClear={(e) => toFilterHandler(e)}
            onOpenMenu={(e) => toOpenStatusHandler(e.attribute)}
            onSelectValue={(e) => toFilterHandler(e)}
          />
        </div>

        <FilterButton
          filterType="category"
          data={SPARE_PART_CATEGORY}
          descriptionType="large"
          buttonTitle="Выбрать запчасть"
          value={initialFilterState.category}
          openStatus={statusFilterState.category}
          onClear={(e) => toFilterHandler(e)}
          onOpenMenu={(e) => toOpenStatusHandler(e.attribute)}
          onSelectValue={(e) => toFilterHandler(e)}
        />

        <FilterInput
          type="text"
          filterType="spare_id"
          placeholder="Номер запчасти..."
          value={initialFilterState.spare_id}
          onClear={(e) => toFilterHandler(e)}
          onChange={(e) => inputHandler(e, true)}
        />

        <FilterInput
          type="text"
          filterType="article"
          placeholder="Артикул объявления..."
          value={initialFilterState.article}
          onClear={(e) => toFilterHandler(e)}
          onChange={(e) => inputHandler(e, true)}
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
              type="text"
              placeholder="Объем: 1.6"
              filterType="engine_volume"
              value={initialFilterState.engine_volume}
              onClear={(e) => toFilterHandler(e)}
              onChange={(e) => inputHandler(e, false)}
            />

            <FilterButton
              data={FUEL}
              filterType="fuel"
              buttonTitle="Топливо"
              descriptionType="small"
              value={initialFilterState.fuel}
              openStatus={statusFilterState.fuel}
              onClear={(e) => toFilterHandler(e)}
              onSelectValue={(e) => toFilterHandler(e)}
              onOpenMenu={(e) => toOpenStatusHandler(e.attribute)}
            />
          </div>

          <div className="flex relative">
            <FilterButton
              filterType="transmission"
              data={TRANSMISSION}
              buttonTitle="Коробка"
              descriptionType="small"
              value={initialFilterState.transmission}
              openStatus={statusFilterState.transmission}
              onClear={(e) => toFilterHandler(e)}
              onSelectValue={(e) => toFilterHandler(e)}
              onOpenMenu={(e) => toOpenStatusHandler(e.attribute)}
            />

            <FilterButton
              data={BODY}
              filterType="body"
              buttonTitle="Кузов"
              descriptionType="small"
              value={initialFilterState.body}
              openStatus={statusFilterState.body}
              onClear={(e) => toFilterHandler(e)}
              onSelectValue={(e) => toFilterHandler(e)}
              onOpenMenu={(e) => toOpenStatusHandler(e.attribute)}
            />
          </div>

          <div className="flex">
            <FilterInput
              type="text"
              placeholder="Цена от"
              filterType="price_from"
              value={initialFilterState.price_from}
              onClear={(e) => toFilterHandler(e)}
              onChange={(e) => inputHandler(e, false)}
            />
            <FilterInput
              type="text"
              filterType="price_to"
              placeholder="Цена до"
              value={initialFilterState.price_to}
              onClear={(e) => toFilterHandler(e)}
              onChange={(e) => inputHandler(e, false)}
            />
          </div>
        </div>
      )}
    </aside>
  );
};
