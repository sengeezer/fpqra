import React from 'react';
import {Link} from '../router';

export const Toolbar = () => {
  return (
    <div className="toolbar">
      <Link to="/">All</Link>
      <Link to="/active">Active</Link>
      <Link to="/complete">Complete</Link>
    </div>
  );
};
