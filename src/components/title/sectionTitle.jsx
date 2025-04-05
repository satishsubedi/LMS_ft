// import React from "react";
import style from "./sectionTitle.module.css";

const SectionTitle = ({ title }) => {
  return (
    <div className={style.titlecontainer}>
      <h3>{title}</h3>
      <div className={style.line}></div>
    </div>
  );
};

export default SectionTitle;
