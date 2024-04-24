import React from "react";
import "./hamburger.css";

import { themeAtom } from "./Header";
import { useAtom } from "jotai";

function Hamburger() {
  const [theme] = useAtom(themeAtom);
  return (
    <div className="hamburger-menu">
      <input id="menu__toggle" type="checkbox" />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </label>

      <ul className={`menu__box ${theme}-menu`}>
        <li>
          <a className={`menu__item ${theme}-item`} href="/quick-start/intro">
            Introduction
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Hamburger;
