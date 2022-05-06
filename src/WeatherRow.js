import React, { useState } from "react";
import { BsFillSunFill } from "react-icons/bs";
import { BsCloudSunFill } from "react-icons/bs";
import { BsCloudsFill } from "react-icons/bs";
import { BsFillCloudFogFill } from "react-icons/bs";
import { BsFillCloudDrizzleFill } from "react-icons/bs";
import { BsFillCloudRainHeavyFill } from "react-icons/bs";
import { BsFillCloudLightningRainFill } from "react-icons/bs";
import { BsFillCloudSleetFill } from "react-icons/bs";
import { BsFillCloudSnowFill } from "react-icons/bs";
import { BsFillCloudLightningFill } from "react-icons/bs";
import ExpandedWeatherRow from "./ExpandedWeatherRow";

function WeatherRow({ dayData }) {
  const [expand, setExpand] = useState(false);

  return (
    <>
      <div className="weather_row" onClick={() => setExpand(!expand)}>
        <h3>{dayData[0].validTime.slice(0, 10)}</h3>
        <div className="weather_icon">
          {dayData[0].parameters.find((single) => single.name === "Wsymb2")
            .values[0] == "1" ? (
            <BsFillSunFill />
          ) : null}

          {dayData[0].parameters.find((single) => single.name === "Wsymb2")
            .values[0] == "2" ? (
            <BsCloudSunFill />
          ) : null}
          {dayData[0].parameters.find((single) => single.name === "Wsymb2")
            .values[0] == "3" ? (
            <BsCloudSunFill />
          ) : null}
          {dayData[0].parameters.find((single) => single.name === "Wsymb2")
            .values[0] == "4" ? (
            <BsCloudSunFill />
          ) : null}
          {dayData[0].parameters.find((single) => single.name === "Wsymb2")
            .values[0] == "5" ? (
            <BsCloudsFill />
          ) : null}
          {dayData[0].parameters.find((single) => single.name === "Wsymb2")
            .values[0] == "6" ? (
            <BsCloudsFill />
          ) : null}
          {dayData[0].parameters.find((single) => single.name === "Wsymb2")
            .values[0] == "7" ? (
            <BsFillCloudFogFill />
          ) : null}
          {dayData[0].parameters.find((single) => single.name === "Wsymb2")
            .values[0] == "8" ? (
            <BsFillCloudDrizzleFill />
          ) : null}
          {dayData[0].parameters.find((single) => single.name === "Wsymb2")
            .values[0] == "9" ? (
            <BsFillCloudDrizzleFill />
          ) : null}
          {dayData[0].parameters.find((single) => single.name === "Wsymb2")
            .values[0] == "10" ? (
            <BsFillCloudRainHeavyFill />
          ) : null}
          {dayData[0].parameters.find((single) => single.name === "Wsymb2")
            .values[0] == "11" ? (
            <BsFillCloudLightningRainFill />
          ) : null}
          {dayData[0].parameters.find((single) => single.name === "Wsymb2")
            .values[0] == "11" ? (
            <BsFillCloudLightningRainFill />
          ) : null}
          {dayData[0].parameters.find((single) => single.name === "Wsymb2")
            .values[0] == "12" ? (
            <BsFillCloudSleetFill />
          ) : null}
          {dayData[0].parameters.find((single) => single.name === "Wsymb2")
            .values[0] == "13" ? (
            <BsFillCloudSleetFill />
          ) : null}
          {dayData[0].parameters.find((single) => single.name === "Wsymb2")
            .values[0] == "14" ? (
            <BsFillCloudSleetFill />
          ) : null}
          {dayData[0].parameters.find((single) => single.name === "Wsymb2")
            .values[0] == "15" ? (
            <BsFillCloudSnowFill />
          ) : null}
          {dayData[0].parameters.find((single) => single.name === "Wsymb2")
            .values[0] == "16" ? (
            <BsFillCloudSnowFill />
          ) : null}
          {dayData[0].parameters.find((single) => single.name === "Wsymb2")
            .values[0] == "17" ? (
            <BsFillCloudSnowFill />
          ) : null}
          {dayData[0].parameters.find((single) => single.name === "Wsymb2")
            .values[0] == "18" ? (
            <BsFillCloudRainHeavyFill />
          ) : null}
          {dayData[0].parameters.find((single) => single.name === "Wsymb2")
            .values[0] == "19" ? (
            <BsFillCloudRainHeavyFill />
          ) : null}
          {dayData[0].parameters.find((single) => single.name === "Wsymb2")
            .values[0] == "20" ? (
            <BsFillCloudRainHeavyFill />
          ) : null}
          {dayData[0].parameters.find((single) => single.name === "Wsymb2")
            .values[0] == "21" ? (
            <BsFillCloudLightningFill />
          ) : null}
          {dayData[0].parameters.find((single) => single.name === "Wsymb2")
            .values[0] == "22" ? (
            <BsFillCloudSleetFill />
          ) : null}
          {dayData[0].parameters.find((single) => single.name === "Wsymb2")
            .values[0] == "23" ? (
            <BsFillCloudSleetFill />
          ) : null}
          {dayData[0].parameters.find((single) => single.name === "Wsymb2")
            .values[0] == "24" ? (
            <BsFillCloudSleetFill />
          ) : null}
          {dayData[0].parameters.find((single) => single.name === "Wsymb2")
            .values[0] == "25" ? (
            <BsFillCloudSnowFill />
          ) : null}
          {dayData[0].parameters.find((single) => single.name === "Wsymb2")
            .values[0] == "26" ? (
            <BsFillCloudSnowFill />
          ) : null}
          {dayData[0].parameters.find((single) => single.name === "Wsymb2")
            .values[0] == "27" ? (
            <BsFillCloudSnowFill />
          ) : null}
        </div>
        <div className="temperature">
          temp:
          <span>
            {
              dayData[0].parameters.find((single) => single.name === "t")
                .values[0]
            }
            °C
          </span>
        </div>
        <div className="wind_gust">
          wind:
          <span>
            {
              dayData[0].parameters.find((single) => single.name === "gust")
                .values[0]
            }
            m/s
          </span>
        </div>
      </div>
      {expand && <ExpandedWeatherRow data={dayData} />}
    </>
  );
}

export default WeatherRow;
