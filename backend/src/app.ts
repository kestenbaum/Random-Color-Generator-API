import express from "express";

const app = express();
const port = Number(process.env.PORT) || 3000;

app.get("/", (req, res: express.Response): void => {
    res.send("Hello World!");
})

app.listen(port, "0.0.0.0", () => console.log(`Listening on ${port}`));