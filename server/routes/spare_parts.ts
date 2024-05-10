import { Request, Response, Router } from "express";

import { SparePartsService } from "../service/spareParts.service";

const sparePartsRouter = Router();
const service = new SparePartsService();

sparePartsRouter.get("/", async (req: Request, res: Response) => {
  const response = await service.getAllSpareParts(req);

  return res
    .status(response.status)
    .setHeader("total_count", response.elements)
    .json({
      status: response.status,
      message: response.message,
      data: response.data
    });
});

export default sparePartsRouter;
