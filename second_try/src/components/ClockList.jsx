import React from "react";
import Clock from "./Clock";
import style from "./simple.module.css";

export default function ClockList({ quantities = [] }) {
  return (
    <dir className={style.multiBorderContainer}>
      {quantities.map(() => (
        <Clock key={Math.random()} />
      ))}
    </dir>
  );
}
