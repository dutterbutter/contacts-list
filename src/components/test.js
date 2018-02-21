import React from "react";
import { Link } from 'react-router-dom';

const test = props => {
  return (
    <div>
      <div>Did this work?</div>
      <Link to="/contactsList"><button>please</button></Link>
    </div>
  );
};

export default test;
