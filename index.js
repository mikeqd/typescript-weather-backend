import express from "express";
import { PORT } from "./config/env.js";
import { getWeather } from "./routes/weather.js";

const app = express();

app.get("/users", (req, res) => {
  res.send("Username is Michael.");
});

app.get("/api/weather", getWeather);

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
