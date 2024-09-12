import express, { Application } from "express";
import { routes } from "./routes";

const app: Application = express();
const port: number = 3001;

routes(app);

app.listen(port, () => console.log(`Server listening on port ${port}`));
