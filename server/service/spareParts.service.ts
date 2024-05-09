import { Request } from "express";

import { PrismaClient } from "@prisma/client";

import { filterQuery } from "../helpers/filterQuery";
import { checkFilteringQuery } from "../helpers/checkFilteringQuery";

import { GET_ALL_SELECT } from "../constants/spareParts";

export class SparePartsService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async getAllSpareParts(req: Request) {
    // возможные фильтры
    const enabledFilters = checkFilteringQuery(req);

    // think about error handler
    const { page } = req.query;
    const limit = 20;
    const toSkip = (+page! - 1) * limit;

    return {
      data: await this.prisma.spare_parts.findMany({
        skip: toSkip,
        take: limit,
        ...filterQuery(enabledFilters),
        select: GET_ALL_SELECT
      }),
      elements: await this.prisma.spare_parts.count({
        where: filterQuery(enabledFilters).where // Apply the same filter used for data
      })
    };
  }
}
