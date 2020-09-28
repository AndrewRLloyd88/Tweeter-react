import React from "react";

export const Navigation = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-content flex-row space-between">
        <span className="nav-title">tweeter</span>
        <button id="nav-toggle" className="nav-toggle">
          <span className="bold">Write </span>
          <span>
             a new tweet
            <div className="nav-arrow">
              <i className="fas fa-arrow-down"></i>
            </div>
          </span>
        </button>
      </div>
    </nav>
  );
};
