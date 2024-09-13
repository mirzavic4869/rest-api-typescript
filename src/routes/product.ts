import { NextFunction, Request, Response, Router } from "express";
import { logger } from "../utils/logger";

export const ProductRouter: Router = Router();

ProductRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
	logger.info("Success get data");
	res.status(200).send({ status: true, statusCode: 200, data: [{ id: 1, name: "Product 1", price: 199000 }] });
});

ProductRouter.post("/", (req: Request, res: Response, next: NextFunction) => {
	logger.info("Success add new product");
	res.status(200).send({ status: true, statusCode: 200, data: req.body });
});
