import React from 'react';

class Side extends React.Component {
  render() {
    return (
      <>
        <div className="main_sidebar">
          <h2><a href="#top">js</a></h2>
          <h3><a href="#1.jsの基礎">1.jsの基礎</a></h3>
          <ul>
            <li><a href="#1-1">1-1.</a></li>
            <li><a href="#1-2">1-2.</a></li>
            <li><a href="#1-3">1-3.</a></li>
          </ul>
          <h3><a href="#2.jsの概要">2.jsの概要</a></h3>
          <ul>
            <li><a href="#2-1">2-1.</a></li>
            <li><a href="#2-2">2-2.</a></li>
            <li><a href="#2-3">2-3.</a></li>
          </ul>
        </div>
      </>
    );
  }
}

export default Side;
