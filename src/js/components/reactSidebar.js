import React from 'react';

class Side extends React.Component {
  render() {
    // contentsとは別でスクロールできるようにする
    const { titles } = this.props;

    return (
      <>
        <div className="main_sidebar">
          <h2><a href="#topTitle">React</a></h2>
          <h3><a href="#mainTitle1">{ titles.chapter1.main }</a></h3>
          <ul>
            <li><a href="#subTitle_1-1">{ titles.chapter1.sub1 }</a></li>
            <li><a href="#subTitle_1-2">{ titles.chapter1.sub2 }</a></li>
            <li><a href="#subTitle_1-3">{ titles.chapter1.sub3 }</a></li>
            <li><a href="#subTitle_1-4">{ titles.chapter1.sub4 }</a></li>
          </ul>
          <h3><a href="#mainTitle2">{ titles.chapter2.main }</a></h3>
          <ul>
            <li><a href="#subTitle_2-1">{ titles.chapter2.sub1 }</a></li>
          </ul>
          <h3><a href="#mainTitle3">{ titles.chapter3.main }</a></h3>
          <ul>
            <li><a href="#subTitle_3-1">{ titles.chapter3.sub1 }</a></li>
            <li><a href="#subTitle_3-2">{ titles.chapter3.sub2 }</a></li>
            <li><a href="#subTitle_3-3">{ titles.chapter3.sub3 }</a></li>
          </ul>
          <h3><a href="#mainTitle4">{ titles.chapter4.main }</a></h3>
          <ul>
            <li><a href="#subTitle_4-1">{ titles.chapter4.sub1 }</a></li>
            <li><a href="#subTitle_4-2">{ titles.chapter4.sub2 }</a></li>
            <li><a href="#subTitle_4-3">{ titles.chapter4.sub3 }</a></li>
          </ul>
          <h3><a href="#mainTitle5">{ titles.chapter5.main }</a></h3>
          <ul>
            <li><a href="#subTitle_5-1">{ titles.chapter5.sub1 }</a></li>
          </ul>
          <h3><a href="#mainTitle6">{ titles.chapter6.main }</a></h3>
          <ul>
            <li><a href="#subTitle_6-1">{ titles.chapter6.sub1 }</a></li>
            <li><a href="#subTitle_6-2">{ titles.chapter6.sub2 }</a></li>
          </ul>
          <h3><a href="#mainTitle7">{ titles.chapter7.main }</a></h3>
          <ul>
            <li><a href="#subTitle_7-1">{ titles.chapter7.sub1 }</a></li>
            <li><a href="#subTitle_7-2">{ titles.chapter7.sub2 }</a></li>
          </ul>
          <h3><a href="#mainTitle8">{ titles.chapter8.main }</a></h3>
          <ul>
            <li><a href="#subTitle_8-1">{ titles.chapter8.sub1 }</a></li>
          </ul>
        </div>
      </>
    );
  }
}

export default Side;
