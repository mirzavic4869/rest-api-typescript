import { NextFunction, Request, Response, Router } from "express";

export const ProductRouter: Router = Router();

ProductRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
	res.status(200).send({ status: true, statusCode: 200, data: [{ id: 1, name: "Product 1", price: 199000 }] });
});
