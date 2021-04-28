import React from "react";

function Avatar(props) {
  return (
    <div style={{ padding: "10px" }}>
      <img src={props.path} style={{ width: "150px", height: "150px" }} />
      <p>{props.sign}&nbsp;</p>
      <p>{props.role}&nbsp;</p>
      <br />
    </div>
  );
}

export default Avatar;
