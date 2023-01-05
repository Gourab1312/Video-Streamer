import React from "react";
import "./sidebarRow.css";

function SidebarRow({ title,Icon,selected }) {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
    {/* backticks lets us apply some js logic in a classnamekind of position */}
      <Icon className="sidebarRow__icon"/>
      <h2 className="sidebarRow__title">{title}</h2>
    </div>
  );
}

export default SidebarRow;
