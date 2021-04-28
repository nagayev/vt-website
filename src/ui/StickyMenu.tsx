import React, { CSSProperties } from "react";

const SocialNetwork = (props) => {
  //type and id
  let url = "https://";
  if (props.type === "vk") {
    url += `vk.com/${props.id}`;
  } else if (props.type === "fb") {
    url += `fb.com/profile.php?id=${props.id}`;
  } else if (props.type === "github") {
    url += `github.com/${props.id}`;
  } else if (props.type === "inst") {
    url += `instagram.com/${props.id}`;
  } else if (props.type === "twit") {
    url += `twitter.com/${props.id}`;
  }
  const style = {
    width: "25px",
    height: "25px",
    marginLeft: "15px",
  };
  return (
    <a href={url}>
      <img src={props.type + ".png"} style={style} alt={props.type} />
    </a>
  );
};

function StickyMenu() {
  const sticky: CSSProperties = {
    position: "sticky",
    top: 0,
    float: "right",
    padding: "0 0 0 0",
    display: "inline-grid",
    zIndex: 9,
    background: "inherit",
  };
  return (
    <div style={sticky}>
      <a href="#about">О кафедере </a>
      <a href="#news">Новости </a>
      <a href="#contacs">Контакты </a>
      <a href="#science">Учебный процесс </a>
      <a href="#science">Наука </a>
      <a href="#docs">Документы </a>
      <div style={{ display: "inline-flex" }}>
        <SocialNetwork type="vk" id="m.nagayev" />
        <SocialNetwork type="fb" id="m.nagayev" />
        <SocialNetwork type="inst" id="m.nagayev" />
        <SocialNetwork type="twit" id="m.nagayev" />
      </div>
    </div>
  );
}

export default StickyMenu;
