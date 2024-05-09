import { filterIfEnabled } from "../utils/filterIfEnabled";
import { filterLinkedIfEnabled } from "../utils/filterLinkedIfEnabled";

import type { UsedFilter } from "../interface/UsedFilter";
import type { randObjKeys } from "../interface/randObjKeys";

export const filterQuery = (enabledFilters: randObjKeys) => {
  const usedFilter: UsedFilter = {
    where: {
      AND: []
    }
  };

  // linked - потому что в БД таблица запчастей связана с брендом и моделью
  filterLinkedIfEnabled(usedFilter, enabledFilters, "brand", {
    code: enabledFilters.brand
  });

  filterLinkedIfEnabled(usedFilter, enabledFilters, "model", {
    code: enabledFilters.model
  });
  //

  // фильтрация по году: если установлены два значения от и до - тогда можно фильтровать в диапазоне
  // иначе, фильтруем просто по тому, что есть (от и до)
  if (enabledFilters.year_from && enabledFilters.year_to) {
    usedFilter.where.AND.push({
      year: {
        gte: +enabledFilters.year_from,
        lt: +enabledFilters.year_to
      }
    });
  } else {
    if (enabledFilters.year_from) {
      usedFilter.where.AND.push({
        year: {
          gte: +enabledFilters.year_from
        }
      });
    }
    if (enabledFilters.year_to) {
      usedFilter.where.AND.push({
        year: {
          lt: +enabledFilters.year_to
        }
      });
    }
  }

  // фильтарция по категории
  filterIfEnabled(
    usedFilter,
    enabledFilters,
    "category",
    enabledFilters.category
  );

  // фильтарция по номеру запчасти
  filterIfEnabled(
    usedFilter,
    enabledFilters,
    "spare_id",
    enabledFilters.spare_id
  );

  // фильтарция по артиклю
  filterIfEnabled(
    usedFilter,
    enabledFilters,
    "article",
    +enabledFilters.article
  );

  // фильтарция по объему мотора
  filterIfEnabled(
    usedFilter,
    enabledFilters,
    "engine_volume",
    +enabledFilters.engine_volume
  );

  // фильтарция по типу топлива
  filterIfEnabled(usedFilter, enabledFilters, "fuel", enabledFilters.fuel);

  // фильтарция по типу коробки
  filterIfEnabled(
    usedFilter,
    enabledFilters,
    "transmission",
    enabledFilters.transmission
  );

  // фильтарция по типу кузова
  filterIfEnabled(usedFilter, enabledFilters, "body", enabledFilters.body);

  if (enabledFilters.price_from && enabledFilters.price_to) {
    usedFilter.where.AND.push({
      price: {
        gte: +enabledFilters.price_from,
        lt: +enabledFilters.price_to
      }
    });
  } else {
    if (enabledFilters.price_from) {
      usedFilter.where.AND.push({
        price: {
          gte: +enabledFilters.price_from
        }
      });
    }
    if (enabledFilters.price_to) {
      usedFilter.where.AND.push({
        price: {
          lt: +enabledFilters.price_to
        }
      });
    }
  }

  return usedFilter;
};
