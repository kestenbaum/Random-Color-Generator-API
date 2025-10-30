import express from "express";
import cors from "cors";
import { randomInt, rgbToHsl } from "./utils";

const app = express();
app.use(cors({ origin: "*" }));
const port = Number(process.env.PORT) || 3000;

app.get("/color", (req, res) => {
    const r = randomInt(0, 255);
    const g = randomInt(0, 255);
    const b = randomInt(0, 255);

    const hex = '#' + [r, g, b]
            .map(v => v.toString(16).padStart(2, '0'))
            .join('');
    const rgb = `rgb(${r}, ${g}, ${b})`;
    const hsl = rgbToHsl(r, g, b);

    res.json({ hex, rgb, hsl });
});

app.listen(port, "0.0.0.0", () => {
    console.log(`Color API running on port ${port}`);
});
