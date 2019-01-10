import React from "react";
import "./style.css";

function Content(props) {
  return(
    <div className="container">
      <div className="card">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default Content;