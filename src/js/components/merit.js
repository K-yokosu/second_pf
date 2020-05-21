import React from 'react';


class Merit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trend: true,
      price: false,
      capture: false,
    };
  }

  handleHoverTrend = () => {
    this.setState({
      trend: true,
      price: false,
      capture: false,
    });
  }

  handleHoverPrice = () => {
    this.setState({
      trend: false,
      price: true,
      capture: false,
    });
  }

  handleHoverCapture = () => {
    this.setState({
      trend: false,
      price: false,
      capture: true,
    });
  }

  render() {
    const { trend, price, capture } = this.state;
    let detailTitle;
    let detailString;

    if (trend) {
      [detailTitle, detailString] = ['トレンドを先取り', 'CryptoTrendでは各銘柄毎にTwitterのツイート数を計測し、ランキング形式で表示しています。'];
    } else if (price) {
      [detailTitle, detailString] = ['入会月利用料 0円', '0円です。'];
    } else if (capture) {
      [detailTitle, detailString] = ['情報をキャッチアップ', '仮想通貨に関するニュースをチェックすることで最新の情報をキャッチアップできます。'];
    }

    return (
      <section className="main-content" id="merit">
        <h2 className="main-content__title">merit</h2>
        <div className="main-content__merit">
          <ul className="main-content__merit-tag">
            <li className="main-content__merit-tag__item" onMouseOver={this.handleHoverTrend} onFocus={this.handleHoverTrend}>
              <p>Trend</p>
            </li>
            <li className="main-content__merit-tag__item" onMouseOver={this.handleHoverPrice} onFocus={this.handleHoverPrice}>
              <p>Price</p>
            </li>
            <li className="main-content__merit-tag__item" onMouseOver={this.handleHoverCapture} onFocus={this.handleHoverCapture}>
              <p>Capture</p>
            </li>
          </ul>
          <div className="main-content__merit-detail">
            <div className="main-content__merit-detail__image">
              {/* <img alt="no-image" /> */}
            </div>
            <div className="main-content__merit-detail__str">
              <h3>{ detailTitle }</h3>
              <p>{ detailString }</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Merit;
