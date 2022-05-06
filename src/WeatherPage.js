import React from "react";
import WeatherRow from "./WeatherRow";

function WeatherPage({ data }) {
  // ########################

  const handleArray = (givenData) => {
    const slice = givenData[0].validTime.slice(0, 10);
    const day = givenData.filter((singleObject) => {
      if (singleObject.validTime.slice(0, 10) === slice) {
        return true;
      }
    });

    const modifiedgivenData = givenData.slice(day.length, givenData.length);

    return [day, modifiedgivenData];
  };

  // #########################

  const [firstDay, firstModData] = handleArray(data);
  const [secondDay, secondModData] = handleArray(firstModData);
  const [thirdDay, thirdModData] = handleArray(secondModData);
  const [fourthdDay, fourthModData] = handleArray(thirdModData);
  const [fifthdDay, fifthModData] = handleArray(fourthModData);
  const [sixthdDay, sixthModData] = handleArray(fifthModData);
  const [seventhdDay, seventhModData] = handleArray(sixthModData);
  const [eigthDay, eigthModData] = handleArray(seventhModData);
  const [ninethdDay, ninethModData] = handleArray(eigthModData);
  const [tenthdDay, tenthModData] = handleArray(ninethModData);

  return (
    <div className="weather_page">
      <WeatherRow dayData={firstDay} />
      <WeatherRow dayData={secondDay} />
      <WeatherRow dayData={thirdDay} />
      <WeatherRow dayData={fourthdDay} />
      <WeatherRow dayData={fifthdDay} />
      <WeatherRow dayData={sixthdDay} />
      <WeatherRow dayData={seventhdDay} />
      <WeatherRow dayData={eigthDay} />
      <WeatherRow dayData={ninethdDay} />
      <WeatherRow dayData={tenthdDay} />
    </div>
  );
}

export default WeatherPage;
