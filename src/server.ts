import express, { Request, Response } from "express";
import { Query } from "express-serve-static-core";

export interface TypedRequestQuery<T extends Query> extends Express.Request {
  query: T;
}

const app = express();

app.get("/", (req, res) => {
  res.json({ result: "ok" });
});

app.get("/login", (req: TypedRequestQuery<{ Username: string, Password: string }>, res: Response) => {
  res.json(req.query);
});


app.listen(3000, () => console.log("Server is running..."));
