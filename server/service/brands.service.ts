import { PrismaClient } from "@prisma/client";

export class BrandsService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async allBrands() {
    return await this.prisma.brand.findMany({
      select: {
        name: true,
        code: true,
        model: {
          select: {
            name: true,
            code: true
          }
        }
      }
    });
  }
}
