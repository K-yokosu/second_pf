import React from 'react';
import ClassNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

class Side extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      scss:{
        scssChapter1:false,
      },
      js:{
        jsChapter1:false,
      },
      react:{
        reactChapter1: false,
        reactChapter2: false,
        reactChapter3: false,
        reactChapter4: false,
        reactChapter5: false,
        reactChapter6: false,
        reactChapter7: false,
        reactChapter8: false,
      },
      router:{
        routerChapter1:false,
      },
    };
  }

  handleClickToggleDone1 = () => {
    this.setState((prevState) => ({
      reactChapter1: !prevState.reactChapter1,
    }));
  }
  handleClickToggleDone2 = () => {
    this.setState((prevState) => ({
      reactChapter2: !prevState.reactChapter2,
    }));
  }
  handleClickToggleDone3 = () => {
    this.setState((prevState) => ({
      reactChapter3: !prevState.reactChapter3,
    }));
  }
  handleClickToggleDone4 = () => {
    this.setState((prevState) => ({
      reactChapter4: !prevState.reactChapter4,
    }));
  }
  handleClickToggleDone5 = () => {
    this.setState((prevState) => ({
      reactChapter5: !prevState.reactChapter5,
    }));
  }
  handleClickToggleDone6 = () => {
    this.setState((prevState) => ({
      reactChapter6: !prevState.reactChapter6,
    }));
  }
  handleClickToggleDone7 = () => {
    this.setState((prevState) => ({
      reactChapter7: !prevState.reactChapter7,
    }));
  }
  handleClickToggleDone8 = () => {
    this.setState((prevState) => ({
      reactChapter8: !prevState.reactChapter8,
    }));
  }
  handleClickToggleDoneScss1 = () => {
    this.setState((prevState) => ({
      scssChapter1: !prevState.reactChapter1,
    }));
  }
  handleClickToggleDoneJs1 = () => {
    this.setState((prevState) => ({
      jsChapter1: !prevState.jsChapter1,
    }));
  }
  handleClickToggleDoneRouter1 = () => {
    this.setState((prevState) => ({
      routerChapter1: !prevState.routerChapter1,
    }));
  }
  
  render() {
    const { titles, setSidebar } = this.props;
    const { 
      scssChapter1,
      jsChapter1,
      reactChapter1,
      reactChapter2,
      reactChapter3,
      reactChapter4,
      reactChapter5,
      reactChapter6,
      reactChapter7,
      reactChapter8,
      routerChapter1,
    } = this.state;

    //Switch the arrow decoration
    const classNameTriggerReactChapter1 = ClassNames({
      'sidebar__menuTitle__trigger': true,
      'sidebar__menuTitle__trigger__active': reactChapter1,
    });
    const classNameTriggerReactChapter2 = ClassNames({
      'sidebar__menuTitle__trigger': true,
      'sidebar__menuTitle__trigger__active': reactChapter2,
    });
    const classNameTriggerReactChapter3 = ClassNames({
      'sidebar__menuTitle__trigger': true,
      'sidebar__menuTitle__trigger__active': reactChapter3,
    });
    const classNameTriggerReactChapter4 = ClassNames({
      'sidebar__menuTitle__trigger': true,
      'sidebar__menuTitle__trigger__active': reactChapter4,
    });
    const classNameTriggerReactChapter5 = ClassNames({
      'sidebar__menuTitle__trigger': true,
      'sidebar__menuTitle__trigger__active': reactChapter5,
    });
    const classNameTriggerReactChapter6 = ClassNames({
      'sidebar__menuTitle__trigger': true,
      'sidebar__menuTitle__trigger__active': reactChapter6,
    });
    const classNameTriggerReactChapter7 = ClassNames({
      'sidebar__menuTitle__trigger': true,
      'sidebar__menuTitle__trigger__active': reactChapter7,
    });
    const classNameTriggerReactChapter8 = ClassNames({
      'sidebar__menuTitle__trigger': true,
      'sidebar__menuTitle__trigger__active': reactChapter8,
    });
    const classNameTriggerScssChapter1 = ClassNames({
      'sidebar__menuTitle__trigger': true,
      'sidebar__menuTitle__trigger__active': scssChapter1,
    });
    const classNameTriggerJsChapter1 = ClassNames({
      'sidebar__menuTitle__trigger': true,
      'sidebar__menuTitle__trigger__active': jsChapter1,
    });
    const classNameTriggerRouterChapter1 = ClassNames({
      'sidebar__menuTitle__trigger': true,
      'sidebar__menuTitle__trigger__active': routerChapter1,
    });

   //Switch the menu decoration
    const classNameManuReactChapter1 = ClassNames({
      'sidebar__menuTitle__item': true,
      'sidebar__menuTitle__item__active': reactChapter1,
    });
    const classNameManuReactChapter2 = ClassNames({
      'sidebar__menuTitle__item': true,
      'sidebar__menuTitle__item__active': reactChapter2,
    });
    const classNameManuReactChapter3 = ClassNames({
      'sidebar__menuTitle__item': true,
      'sidebar__menuTitle__item__active': reactChapter3,
    });
    const classNameManuReactChapter4 = ClassNames({
      'sidebar__menuTitle__item': true,
      'sidebar__menuTitle__item__active': reactChapter4,
    });
    const classNameManuReactChapter5 = ClassNames({
      'sidebar__menuTitle__item': true,
      'sidebar__menuTitle__item__active': reactChapter5,
    });
    const classNameManuReactChapter6 = ClassNames({
      'sidebar__menuTitle__item': true,
      'sidebar__menuTitle__item__active': reactChapter6,
    });
    const classNameManuReactChapter7 = ClassNames({
      'sidebar__menuTitle__item': true,
      'sidebar__menuTitle__item__active': reactChapter7,
    });
    const classNameManuReactChapter8 = ClassNames({
      'sidebar__menuTitle__item': true,
      'sidebar__menuTitle__item__active': reactChapter8,
    });
    const classNameManuScssChapter1 = ClassNames({
      'sidebar__menuTitle__item': true,
      'sidebar__menuTitle__item__active': scssChapter1,
    });
    const classNameManuJsChapter1 = ClassNames({
      'sidebar__menuTitle__item': true,
      'sidebar__menuTitle__item__active': jsChapter1,
    });
    const classNameManuRouterChapter1 = ClassNames({
      'sidebar__menuTitle__item': true,
      'sidebar__menuTitle__item__active': routerChapter1,
    });

    //Sidebar
    const scssSidebar = <div className="sidebar">
                            <div>
                                <div className="sidebar__menuTitle">
                                    <h3><a href="#mainTitle1">{ titles.scss.chapter1.main }</a></h3>
                                    <div className={classNameTriggerScssChapter1} onClick={this.handleClickToggleDoneScss1} onKeyUp={this.handleClickToggleDoneScss1} role="button" tabIndex={0}>
                                        <FontAwesomeIcon icon={faAngleRight} />
                                    </div>
                                </div>
                                <ul className={classNameManuScssChapter1}>
                                    <li><a href="#subTitle_1-1">{ titles.scss.chapter1.sub1 }</a></li>
                                    <li><a href="#subTitle_1-2">{ titles.scss.chapter1.sub2 }</a></li>
                                    <li><a href="#subTitle_1-3">{ titles.scss.chapter1.sub3 }</a></li>
                                    <li><a href="#subTitle_1-4">{ titles.scss.chapter1.sub4 }</a></li>
                                </ul>
                            </div>
                        </div>
    const jsSidebar = <div className="sidebar">
                          <div>
                              <div className="sidebar__menuTitle">
                                  <h3><a href="#mainTitle1">{ titles.js.chapter1.main }</a></h3>
                                  <div className={classNameTriggerJsChapter1} onClick={this.handleClickToggleDoneJs1} onKeyUp={this.handleClickToggleDoneJs1} role="button" tabIndex={0}>
                                      <FontAwesomeIcon icon={faAngleRight} />
                                  </div>
                              </div>
                              <ul className={classNameManuJsChapter1}>
                                  <li><a href="#subTitle_1-1">{ titles.js.chapter1.sub1 }</a></li>
                                  <li><a href="#subTitle_1-2">{ titles.js.chapter1.sub2 }</a></li>
                                  <li><a href="#subTitle_1-3">{ titles.js.chapter1.sub3 }</a></li>
                                  <li><a href="#subTitle_1-4">{ titles.js.chapter1.sub4 }</a></li>
                              </ul>
                          </div>
                      </div>
    const reactSidebar = <div className="sidebar">
                            <div>
                                <div className="sidebar__menuTitle">
                                    <h3><a href="#mainTitle1">{ titles.react.chapter1.main }</a></h3>
                                    <div className={classNameTriggerReactChapter1} onClick={this.handleClickToggleDone1} onKeyUp={this.handleClickToggleDone1} role="button" tabIndex={0}>
                                        <FontAwesomeIcon icon={faAngleRight} />
                                    </div>
                                </div>
                                <ul className={classNameManuReactChapter1}>
                                    <li><a href="#subTitle_1-1">{ titles.react.chapter1.sub1 }</a></li>
                                    <li><a href="#subTitle_1-2">{ titles.react.chapter1.sub2 }</a></li>
                                    <li><a href="#subTitle_1-3">{ titles.react.chapter1.sub3 }</a></li>
                                    <li><a href="#subTitle_1-4">{ titles.react.chapter1.sub4 }</a></li>
                                </ul>
                            </div>
                            <div>
                                <div className="sidebar__menuTitle">
                                    <h3><a href="#mainTitle2">{ titles.react.chapter2.main }</a></h3>
                                    <div className={classNameTriggerReactChapter2} onClick={this.handleClickToggleDone2} onKeyUp={this.handleClickToggleDone2} role="button" tabIndex={0}>
                                        <FontAwesomeIcon icon={faAngleRight} />
                                    </div>
                                </div>
                                <ul className={classNameManuReactChapter2}>
                                    <li><a href="#subTitle_2-1">{ titles.react.chapter2.sub1 }</a></li>
                                </ul>
                            </div>
                            <div>
                                <div className="sidebar__menuTitle">
                                    <h3><a href="#mainTitle3">{ titles.react.chapter3.main }</a></h3>
                                    <div className={classNameTriggerReactChapter3} onClick={this.handleClickToggleDone3} onKeyUp={this.handleClickToggleDone3} role="button" tabIndex={0}>
                                        <FontAwesomeIcon icon={faAngleRight} />
                                    </div>
                                </div>
                                <ul className={classNameManuReactChapter3}>
                                    <li><a href="#subTitle_3-1">{ titles.react.chapter3.sub1 }</a></li>
                                    <li><a href="#subTitle_3-2">{ titles.react.chapter3.sub2 }</a></li>
                                    <li><a href="#subTitle_3-3">{ titles.react.chapter3.sub3 }</a></li>
                                </ul>
                            </div>
                            <div>
                                <div className="sidebar__menuTitle">
                                    <h3><a href="#mainTitle4">{ titles.react.chapter4.main }</a></h3>
                                    <div className={classNameTriggerReactChapter4} onClick={this.handleClickToggleDone4} onKeyUp={this.handleClickToggleDone4} role="button" tabIndex={0}>
                                        <FontAwesomeIcon icon={faAngleRight} />
                                    </div>
                                </div>
                                <ul className={classNameManuReactChapter4}>
                                    <li><a href="#subTitle_4-1">{ titles.react.chapter4.sub1 }</a></li>
                                    <li><a href="#subTitle_4-2">{ titles.react.chapter4.sub2 }</a></li>
                                    <li><a href="#subTitle_4-3">{ titles.react.chapter4.sub3 }</a></li>
                                </ul>
                            </div>
                            <div>
                                <div className="sidebar__menuTitle">
                                    <h3><a href="#mainTitle5">{ titles.react.chapter5.main }</a></h3>
                                    <div className={classNameTriggerReactChapter5} onClick={this.handleClickToggleDone5} onKeyUp={this.handleClickToggleDone5} role="button" tabIndex={0}>
                                        <FontAwesomeIcon icon={faAngleRight} />
                                    </div>
                                </div>
                                <ul className={classNameManuReactChapter5}>
                                  < li><a href="#subTitle_5-1">{ titles.react.chapter5.sub1 }</a></li>
                                </ul>
                            </div>
                            <div>
                                <div className="sidebar__menuTitle">
                                    <h3><a href="#mainTitle6">{ titles.react.chapter6.main }</a></h3>
                                    <div className={classNameTriggerReactChapter6} onClick={this.handleClickToggleDone6} onKeyUp={this.handleClickToggleDone6} role="button" tabIndex={0}>
                                        <FontAwesomeIcon icon={faAngleRight} />
                                    </div>
                                </div>
                                <ul className={classNameManuReactChapter6}>
                                    <li><a href="#subTitle_6-1">{ titles.react.chapter6.sub1 }</a></li>
                                    <li><a href="#subTitle_6-2">{ titles.react.chapter6.sub2 }</a></li>
                                </ul>
                            </div>
                            <div>
                                <div className="sidebar__menuTitle">
                                    <h3><a href="#mainTitle7">{ titles.react.chapter7.main }</a></h3>
                                    <div className={classNameTriggerReactChapter7} onClick={this.handleClickToggleDone7} onKeyUp={this.handleClickToggleDone7} role="button" tabIndex={0}>
                                        <FontAwesomeIcon icon={faAngleRight} />
                                    </div>
                                </div>
                                <ul className={classNameManuReactChapter7}>
                                    <li><a href="#subTitle_7-1">{ titles.react.chapter7.sub1 }</a></li>
                                    <li><a href="#subTitle_7-2">{ titles.react.chapter7.sub2 }</a></li>
                                </ul>
                            </div>
                            <div>
                                <div className="sidebar__menuTitle">
                                    <h3><a href="#mainTitle8">{ titles.react.chapter8.main }</a></h3>
                                    <div className={classNameTriggerReactChapter8} onClick={this.handleClickToggleDone8} onKeyUp={this.handleClickToggleDone8} role="button" tabIndex={0}>
                                        <FontAwesomeIcon icon={faAngleRight} />
                                    </div>
                                </div>
                                <ul className={classNameManuReactChapter8}>
                                    <li><a href="#subTitle_8-1">{ titles.react.chapter8.sub1 }</a></li>
                                </ul>
                            </div>
                        </div>
    const routerSidebar = <div className="sidebar">
                              <div>
                                  <div className="sidebar__menuTitle">
                                      <h3><a href="#mainTitle1">{ titles.router.chapter1.main }</a></h3>
                                      <div className={classNameTriggerRouterChapter1} onClick={this.handleClickToggleDoneRouter1} onKeyUp={this.handleClickToggleDoneRouter1} role="button" tabIndex={0}>
                                          <FontAwesomeIcon icon={faAngleRight} />
                                      </div>
                                  </div>
                                  <ul className={classNameManuRouterChapter1}>
                                      <li><a href="#subTitle_1-1">{ titles.router.chapter1.sub1 }</a></li>
                                      <li><a href="#subTitle_1-2">{ titles.router.chapter1.sub2 }</a></li>
                                      <li><a href="#subTitle_1-3">{ titles.router.chapter1.sub3 }</a></li>
                                      <li><a href="#subTitle_1-4">{ titles.router.chapter1.sub4 }</a></li>
                                  </ul>
                              </div>
                          </div>
    
    return (
      <>
        {setSidebar === 'scss'
            ? (
              <>{scssSidebar}</>
            )
            : setSidebar === 'js'
              ? (
              <>{jsSidebar}</>
              )
              : setSidebar === 'react'
                ? (
                  <>{reactSidebar}</>
                )
                : setSidebar === 'router'
                      && (
                      <>{routerSidebar}</>
                      )}
      </>
    );
  }
}

export default Side;
