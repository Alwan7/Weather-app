import React from "react";
import SingleExtendedRow from "./SingleExtendedRow";

function ExpandedWeatherRow({ data }) {
  //   console.log(data);
  return (
    <div className="extended_row">
      {data.map((singleData, index) => (
        <SingleExtendedRow singleData={singleData} key={index} />
      ))}
    </div>
  );
}

export default ExpandedWeatherRow;
