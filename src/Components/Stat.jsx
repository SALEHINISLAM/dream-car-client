import React from "react";
import PropTypes from "prop-types";

const Stat = (props) => {
  return (
    <div className="container mx-auto py-8">
      <div className="stats shadow w-full">
        <div className="stat place-items-center">
          <div className="stat-title">Sales</div>
          <div className="stat-value">31K</div>
          <div className="stat-desc">From last month</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Users</div>
          <div className="stat-value text-secondary">4,200</div>
          <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">New Registers</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↗︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

Stat.propTypes = {};

export default Stat;
