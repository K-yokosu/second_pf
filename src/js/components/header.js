import React from 'react';
import ClassNames from 'classnames';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isDone: false,
      };
  
      this.handleClickToggleDone = this.handleClickToggleDone.bind(this);
      this.handleClickManu = this.handleClickManu.bind(this);
    }
  
    // ハンバーガーmanuの開閉
    handleClickToggleDone() {
      this.setState((prevState) => ({
        isDone: !prevState.isDone,
      }));
    }
  
    // ハンバーガーmanuが開いている時にmanuを押した場合、ハンバーガーmanuを閉じる
    handleClickManu() {
      this.state.isDone && this.handleClickToggleDone();
    }
  
  
    render() {
      const classNameTrigger = ClassNames({
        'header-menu__trigger-line': true,
        'header-menu__trigger-line__active': this.state.isDone,
      });
      const classNameManu = ClassNames({
        'header-menu': true,
        'header-menu__active': this.state.isDone,
      });
  
      return (
        <>
          <header className="header">
            <div className="header-container">
              <h1 className="header-title">CryptoTrend</h1>
              <div className="header-menu__trigger" onClick={this.handleClickToggleDone}>
                <div className={classNameTrigger} />
                <div className={classNameTrigger} />
                <div className={classNameTrigger} />
              </div>
              <nav className={classNameManu}>
                <ul className="header-menu__container">
                  <li className="header-menu__item"><Link to="/">home</Link></li>
                  <li className="header-menu__item" onClick={this.handleClickManu}><a href="#merit">merit</a></li>
                  <li className="header-menu__item" onClick={this.handleClickManu}><a href="#contact">contact</a></li>
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
