import React from "react";
import './aside.style.css';

const Aside = (props) => {
  return (
    <div className="aside-wrapper">
      <div className="aside-header">
        <h2 className="aside-title">Aside</h2>
      </div>
      <div className="aside-body">
        <ul className="link-list">
          <li className="aside-link">home</li>
          <li className="aside-link">events</li>
          <li className="aside-link">campsites</li>
        </ul>
      </div>
    </div>
  );
};

export default Aside;
