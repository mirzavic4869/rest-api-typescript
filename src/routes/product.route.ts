import { NextFunction, Request, Response, Router } from "express";
import { logger } from "../utils/logger";
import { createProductValidation } from "../validation/product.validation";

export const ProductRouter: Router = Router();

ProductRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
	logger.info("Success get data");
	return res.status(200).send({ status: true, statusCode: 200, data: [{ id: 1, name: "Product 1", price: 199000 }] });
});

ProductRouter.post("/", (req: Request, res: Response, next: NextFunction) => {
	const { error, value } = createProductValidation(req.body);

	if (error) {
		logger.error("ERR: product - create", error.details[0].message);
		return res.status(422).send({ status: false, statusCode: 422, message: error.details[0].message, data: {} });
	}
	logger.info("Success add new product");
	res.status(200).send({ status: true, statusCode: 200, message: "Add product success", data: value });
});
