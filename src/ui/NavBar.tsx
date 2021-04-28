import React from "react";

function NavBar() {
  //TODO: in the future we should get theese vars from props
  const insitute = "Политехнический институт";
  const faculty = "ФВТ";
  const department = "ВТ";
  return (
    <div>
      <p>
        ПГУ → {insitute} → {faculty} → {department}{" "}
      </p>
    </div>
  );
}

export default NavBar;
