import { Request, Response, Router } from "express";

import { SparePartsService } from "../service/spareParts.service";

const sparePartsRouter = Router();
const service = new SparePartsService();

sparePartsRouter.get("/", async (req: Request, res: Response) => {
  return res.status(200).json(await service.getAllSpareParts(req));
});

export default sparePartsRouter;
