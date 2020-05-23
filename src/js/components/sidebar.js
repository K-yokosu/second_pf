import React from 'react';

class Side extends React.Component {
  render() {

    // サイドバーの複製
    // サイドバーのインデント追加
    return (
      <>
        <div className="main_sidebar">
          <h2><a href="#top">{ this.props.setTitle }</a></h2>
          <h3>1.{ this.props.setTitle }の基礎</h3>
          <ul>
            <li>1-1.</li>
            <li>1-2.</li>
            <li>1-3.</li>
          </ul>
        </div>
      </>
    );
  }
}

export default Side;
