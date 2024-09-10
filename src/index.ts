import express, { Application, NextFunction, Request, Response } from "express";

const app: Application = express();
const port: number = 3001;

app.use("/Health", (req: Request, res: Response, next: NextFunction) => {
	res.status(200).send({ data: "Hello World" });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
