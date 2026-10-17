# 🌦️ Weather App

A simple weather application built using **HTML, CSS, and JavaScript** that fetches weather information for a searched city using the OpenWeatherMap API.

## ✨ Features

- Search for weather by city name.
- Display temperature, humidity, and wind speed.
- Show weather icons based on current weather conditions.
- Display an error message for invalid city names.
- Search using either the search button or the Enter key.

## 🛠️ Built With

- **HTML5** — Page structure
- **CSS3** — Styling and layout
- **JavaScript** — Application logic and interactivity
- **OpenWeatherMap API** — Weather data

## 📚 What I Learned

- Fetching data from an external API using JavaScript's `fetch()`.
- Working with asynchronous JavaScript using `async/await`.
- Processing JSON responses and accessing object properties.
- Manipulating the DOM to display weather information dynamically.
- Handling user input, button clicks, and keyboard events.
- Using conditional logic to display weather-specific icons and error messages.

## ▶️ How to Run Locally

1. Clone or download the repository.
2. Open the Weather App folder.
3. Create a copy of `config.example.js` in the same folder and name it `config.js`.
4. Open `config.js` and replace the placeholder with your own OpenWeatherMap API key:

   ```javascript
   const apiKey = "YOUR_ACTUAL_OPENWEATHER_API_KEY";
   ```

5. Save the file and open `index.html` in your browser.
6. Enter a city name and search for its weather.

**Note:** The real `config.js` file is excluded from Git using `.gitignore`, so your personal API key won't be included in future commits. You must create this file locally before using the app.

---

Part of [**dev-lab**](../README.md) — a collection of mini-projects built while learning web development.

*Learning by building, one project at a time.*