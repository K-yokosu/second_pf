import React from 'react';
import ClassNames from 'classnames';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDone: false,
    };
  }

  // ハンバーガーmanuの開閉
  handleClickToggleDone = () => {
    this.setState((prevState) => ({
      isDone: !prevState.isDone,
    }));
  }

  render() {
    const { isDone } = this.state;
    const classNameTrigger = ClassNames({
      'header-menu__trigger-line': true,
      'header-menu__trigger-line__active': isDone,
    });
    const classNameManu = ClassNames({
      'header-menu': true,
      'header-menu__active': isDone,
    });

    return (
      <>
        <header className="header">
          <div className="header-container">
            <h1 className="header-title">CryptoTrend</h1>
            <div className="header-menu__trigger" onClick={this.handleClickToggleDone} onKeyUp={this.handleClickToggleDone} role="button" tabIndex={0}>
              <div className={classNameTrigger} />
              <div className={classNameTrigger} />
              <div className={classNameTrigger} />
            </div>
            <nav className={classNameManu}>
              <ul className="header-menu__container">
                <li className="header-menu__item"><Link to="/">home</Link></li>
                <li className="header-menu__item"><a href="#merit" onClick={this.handleClickToggleDone} onKeyUp={this.handleClickToggleDone}>merit</a></li>
                <li className="header-menu__item"><a href="#contact" onClick={this.handleClickToggleDone} onKeyUp={this.handleClickToggleDone}>contact</a></li>
                <li className="header-menu__item"><Link to="/login">login</Link></li>
              </ul>
            </nav>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
