import express, { Application, Request, Response} from "express";
require("dotenv").config();

const app: Application = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
    return res.send("Hello");
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});
