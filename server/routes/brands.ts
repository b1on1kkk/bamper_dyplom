import { Request, Response, Router } from "express";

import { BrandsService } from "../service/brands.service";

const brandsRouter = Router();
const service = new BrandsService();

brandsRouter.get("/all", async (_, res: Response) => {
  return res.json(await service.allBrands());
});

export default brandsRouter;
