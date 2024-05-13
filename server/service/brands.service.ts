import { PrismaClient } from "@prisma/client";

export class BrandsService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async allBrands() {
    try {
      return {
        status: 200,
        message: "Successfully",
        data: await this.prisma.brand.findMany({
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
        })
      };
    } catch (error) {
      console.log(error);

      return {
        data: [],
        elements: 0,
        status: 500,
        message: "Error occured! Please try later"
      };
    }
  }
}
