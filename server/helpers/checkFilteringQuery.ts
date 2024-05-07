import { Request } from "express";

import { isString } from "../guard/isString";

export const checkFilteringQuery = (req: Request) => {
  const enabledFilters: { [key: string]: string } = {};

  if (req.query.brand && isString(req.query.brand)) {
    enabledFilters["brand"] = req.query.brand;
  }

  if (req.query.model && isString(req.query.model)) {
    enabledFilters["model"] = req.query.model;
  }

  if (req.query.year_from && isString(req.query.year_from)) {
    enabledFilters["year_from"] = req.query.year_from;
  }

  if (req.query.year_to && isString(req.query.year_to)) {
    enabledFilters["year_to"] = req.query.year_to;
  }

  if (req.query.category && isString(req.query.category)) {
    enabledFilters["category"] = req.query.category;
  }

  if (req.query.spare_id && isString(req.query.spare_id)) {
    enabledFilters["spare_id"] = req.query.spare_id;
  }

  if (req.query.article && isString(req.query.article)) {
    enabledFilters["article"] = req.query.article;
  }

  if (req.query.engine_volume && isString(req.query.engine_volume)) {
    enabledFilters["engine_volume"] = req.query.engine_volume;
  }

  if (req.query.fuel && isString(req.query.fuel)) {
    enabledFilters["fuel"] = req.query.fuel;
  }

  if (req.query.transmission && isString(req.query.transmission)) {
    enabledFilters["transmission"] = req.query.transmission;
  }

  if (req.query.body && isString(req.query.body)) {
    enabledFilters["body"] = req.query.body;
  }

  if (req.query.price_from && isString(req.query.price_from)) {
    enabledFilters["price_from"] = req.query.price_from;
  }

  if (req.query.price_to && isString(req.query.price_to)) {
    enabledFilters["price_to"] = req.query.price_to;
  }

  return enabledFilters;
};
