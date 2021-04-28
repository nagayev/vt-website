import React from "react";

function Select(props) {
  const [isShown, setIsShown] = React.useState(false);
  const toggle = () => setIsShown(!isShown);
  return (
    <>
      <button onClick={toggle}>{props.name} ↓</button>
      {isShown ? props.children : <br />}
      <br />
    </>
  );
}

export default Select;
