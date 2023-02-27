import React from 'react';
import './style.scss';

function Loading(): JSX.Element {
  return (
    <div>
      <div className="spinner-grow text-primary margin-top" role="status"> </div>
      <div>Loading ...</div>
    </div>
  );
}

export default Loading;