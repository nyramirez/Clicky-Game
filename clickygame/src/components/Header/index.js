import React from "react";
import "./style.css";

function Header(props) {
  return (<nav className="navbar justify-content-center navbar-dark bg-info">
    <div className="row container-fluid">
        <div className="col-sm-12 col-lg-4 topInfo leftInfo">Clicky Game</div>
        <div className="col-sm-12 col-lg-4 topInfo centerInfo">Click an image to Begin</div>
        <div className="col-sm-12 col-lg-4 topInfo rightInfo">Score: {props.score} | Top Score: {props.topScore} </div>
    </div>
  </nav>
  );
}

export default Header;