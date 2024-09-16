import { NextFunction, Request, Response, Router } from "express";

export const HealthRouter: Router = Router();

HealthRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
	res.status(200).send({ data: "Hello World" });
});
