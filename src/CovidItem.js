import React from "react";

function CovidItem(props) {
//   console.log(props);

  return (
    <div style={{ border: "2px solid black", margin: "5px 100px" }}>
      <h3>{props.countryName}</h3>
      <p>Total Covid Cases : {props.totalcases}</p>
      <p>Total recovered Cases : {props.recoveredCases}</p>
    </div>
  );
}
export default CovidItem;
