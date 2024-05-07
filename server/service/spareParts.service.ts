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

    return await this.prisma.spare_parts.findMany({
      ...filterQuery(enabledFilters),
      select: GET_ALL_SELECT
    });
  }
}
