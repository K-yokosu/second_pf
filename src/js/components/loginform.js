import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueEmail: '',
      valuePass: '',
      errMsgEmail: '',
      errMsgPass: '',
      disabled: true,
    };
  }

  static getDerivedStateFromProps() {
    // console.log(localStorage.getItem('login'));
  }

  formBottonChange = () => {
    const { valueEmail } = this.state;
    const { valuePass } = this.state;
    const { errMsgEmail } = this.state;
    const { errMsgPass } = this.state;
    const valueArr = [valueEmail, valuePass];
    const errMsgArr = [errMsgEmail, errMsgPass];
    if (valueArr.every((n) => n !== '')) {
      if (errMsgArr.every((n) => n === '')) {
        this.setState({ disabled: false });
      } else {
        this.setState({ disabled: true });
      }
    } else {
      this.setState({ disabled: true });
    }
  }

  // validation check
  valiCheckEmail = () => {
    const regexp = /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const { valueEmail } = this.state;
    if (valueEmail === '') {
      this.setState({ errMsgEmail: 'Emailを入力して下さい' });
    } else if (valueEmail.match(regexp)) {
      this.setState({ errMsgEmail: '' });
    } else {
      this.setState({ errMsgEmail: 'Emailの形式で入力してください' });
    }
  }

  valiCheckPass = () => {
    const { valuePass } = this.state;
    valuePass ? this.setState({ errMsgPass: '' }) : this.setState({ errMsgPass: '件名を入力して下さい' });
  }


  // value write
  handleChangeemail = (event) => {
    this.setState({
      valueEmail: event.target.value,
    });
    this.valiCheckEmail();
    this.formBottonChange();
  }

  handleChangePass = (event) => {
    this.setState({
      valuePass: event.target.value,
    });
    this.valiCheckPass();
    this.formBottonChange();
  }

  submitClick = async () => {
    // 処理
    localStorage.setItem('login', 'true');
    // console.log(localStorage.getItem('login'));
  }

  render() {
    const {
      valueEmail, valuePass, errMsgEmail, errMsgPass, disabled,
    } = this.state;

    return (
      <section id="login" className="login-contact">
        <div className="login-contact__container">
          <h2 className="login-contact__title">LOGIN</h2>
          <form action="" method="POST" className="login-contact__form" onSubmit={this.handleSubmit}>
            <label htmlFor="inputEmail">
              email：
              <span className="login-contact__form__errormsg">{errMsgEmail}</span>
            </label>
            <input type="email" id="inputEmail" name="email" className="login-contact__form__input" value={valueEmail} onChange={this.handleChangeemail} />
            <label htmlFor="inputPass">
              password：
              <span className="login-contact__form__errormsg">{errMsgPass}</span>
            </label>
            <input type="password" id="inputPass" name="pass" className="login-contact__form__input" value={valuePass} onChange={this.handleChangePass} />

            <Link to="/react">
              <input type="submit" name="submit" value="ログイン" className="login-contact__form__submit" disabled={disabled} onClick={this.submitClick} />
            </Link>

          </form>
        </div>
      </section>
    );
  }
}

export default LoginForm;
