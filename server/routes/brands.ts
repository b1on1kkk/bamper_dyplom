import { Request, Response, Router } from "express";

import { BrandsService } from "../service/brands.service";

const brandsRouter = Router();
const service = new BrandsService();

brandsRouter.get("/all", async (_, res: Response) => {
  const response = await service.allBrands();

  return res.status(response.status).json({
    status: response.status,
    message: response.message,
    data: response.data
  });
});

export default brandsRouter;
