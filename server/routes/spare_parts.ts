import { Request, Response, Router } from "express";

import { SparePartsService } from "../service/spareParts.service";

const sparePartsRouter = Router();
const service = new SparePartsService();

sparePartsRouter.get("/", async (req: Request, res: Response) => {
  const response = await service.getAllSpareParts(req);

  return res
    .status(200)
    .setHeader("total_count", Math.ceil(response.elements / 20).toString())
    .json(response.data);
});

export default sparePartsRouter;
