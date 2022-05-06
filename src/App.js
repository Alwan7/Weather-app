import React, { useState } from "react";
import "./App.css";
import WeatherPage from "./WeatherPage";

function App() {
  const [lon, setLon] = useState("");
  const [lat, setLat] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [showLandingPage, setShowLandingPage] = useState(true);

  // #########################################

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    fetch(
      `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${lon}/lat/${lat}/data.json`
    )
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        // console.log(data);
        setData(data.timeSeries);
        setError(null);
        setShowLandingPage(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
        setError(`${err.message}!`);
      });
  };

  // #########################################

  return (
    <div className="App">
      {showLandingPage && (
        <div className="landing_page_wrapper">
          <div className="landing_page">
            <h2>WEATHER APP</h2>
            <hr />
            <h1>Enter location info to get weather data:</h1>
            <form onSubmit={handleSubmit}>
              <input
                placeholder="Longitude"
                name="lon"
                type="text"
                value={lon}
                onChange={(e) => setLon(e.target.value)}
                disabled={isLoading}
              />

              <input
                placeholder="Latitude"
                name="lat"
                type="text"
                value={lat}
                onChange={(e) => setLat(e.target.value)}
                disabled={isLoading}
              />
              {!isLoading && !error && <button type="submit">View Weather Forecast</button>}
              {isLoading && <div className="lds-dual-ring"></div>}
              {error && (
                <div className="error_message">
                  {error} <p>refresh to try again</p>
                </div>
              )}
            </form>
          </div>
        </div>
      )}

      {!showLandingPage && <WeatherPage data={data} />}
    </div>
  );
}

export default App;
