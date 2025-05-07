import { OPENWEATHER_API } from "../config/env.js";

export const getWeather = async (req, res) => {
  try {
    const { city } = req.query;

    if (!city) {
      return res.status(400).json({ error: "City parameter is required." });
    }

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_API}&units=metric`
    );

    if (!response.ok) {
      console.error(`OPENWEATHER API error: ${response.status}`);
      return res.status(response.status).json({
        error: `OPENWEATHER API: Error fetching data: ${response.statusText}`,
      });
    }

    const data = await response.json();

    res.set("Cache-Control", "no-store, max-age=0");
    res.json(data);
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).json({ error: "An error occurred" });
  }
};
