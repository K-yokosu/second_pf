import React from 'react';


class Merit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: {
        trend: true,
        price: false,
        capture: false,
      },
    };

    this.handleHoverTrend = this.handleHoverTrend.bind(this);
    this.handleHoverPrice = this.handleHoverPrice.bind(this);
    this.handleHoverCapture = this.handleHoverCapture.bind(this);
  }

  handleHoverTrend() {
    this.setState({
      detail: {
        trend: true,
        price: false,
        capture: false,
      },
    });
  }

  handleHoverPrice() {
    this.setState({
      detail: {
        trend: false,
        price: true,
        capture: false,
      },
    });
  }

  handleHoverCapture() {
    this.setState({
      detail: {
        trend: false,
        price: false,
        capture: true,
      },
    });
  }

  render() {
    let detailTitle;
    let detailString;

    if (this.state.detail.trend) {
      [detailTitle, detailString] = ['トレンドを先取り', 'CryptoTrendでは各銘柄毎にTwitterのツイート数を計測し、ランキング形式で表示しています。'];
    } else if (this.state.detail.price) {
      [detailTitle, detailString] = ['入会月利用料 0円', '0円です。'];
    } else if (this.state.detail.capture) {
      [detailTitle, detailString] = ['情報をキャッチアップ', '仮想通貨に関するニュースをチェックすることで最新の情報をキャッチアップできます。'];
    }


    return (
      <section className="main-content" id="merit">
        <h2 className="main-content__title">merit</h2>
        <div className="main-content__merit">
          <ul className="main-content__merit-tag">
            <li className="main-content__merit-tag__item" onMouseOver={this.handleHoverTrend}>
              <p>Trend</p>
            </li>
            <li className="main-content__merit-tag__item" onMouseOver={this.handleHoverPrice}>
              <p>Price</p>
            </li>
            <li className="main-content__merit-tag__item" onMouseOver={this.handleHoverCapture}>
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
