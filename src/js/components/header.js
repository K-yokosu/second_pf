import React from 'react';
import ClassNames from 'classnames';
import { Link, NavLink } from 'react-router-dom';

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
        <header id="header" className="header">
          <div className="header-container">
            <h1 className="header-title"><Link to="/">My Reference</Link></h1>
            <div className="header-menu__trigger" onClick={this.handleClickToggleDone} onKeyUp={this.handleClickToggleDone} role="button" tabIndex={0}>
              <div className={classNameTrigger} />
              <div className={classNameTrigger} />
              <div className={classNameTrigger} />
            </div>
            <nav className={classNameManu}>
              <ul className="header-menu__container">
                <li className="header-menu__item"><NavLink activeStyle={{ color: 'red' }} to="/react" onClick={this.handleClickToggleDone}>React</NavLink></li>
                <li className="header-menu__item"><NavLink activeStyle={{ color: 'red' }} to="/router" onClick={this.handleClickToggleDone}>Router</NavLink></li>
                <li className="header-menu__item__line"><NavLink activeStyle={{ color: 'red' }} to="/scss" onClick={this.handleClickToggleDone}>scss</NavLink></li>
                <li className="header-menu__item__line"><NavLink activeStyle={{ color: 'red' }} to="/js" onClick={this.handleClickToggleDone}>js</NavLink></li>
              </ul>
            </nav>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
