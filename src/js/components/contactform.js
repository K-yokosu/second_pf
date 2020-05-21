import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueEmail: '',
      valueSubject: '',
      valueText: '',
      errMgeEmail: '',
      errMgeSubject: '',
      errMgeText: '',
      disabled: true,
    };
  }

  formBottonChange = () => {
    const { valueEmail } = this.state;
    const { valueSubject } = this.state;
    const { valueText } = this.state;
    const { errMgeEmail } = this.state;
    const { errMgeSubject } = this.state;
    const { errMgeText } = this.state;
    const valueArr = [valueEmail, valueSubject, valueText];
    const errMgeArr = [errMgeEmail, errMgeSubject, errMgeText];

    errMgeArr.every((n) => n === '') ? this.setState({ disabled: false }) : this.setState({ disabled: true });
    valueArr.every((n) => n !== '') ? this.setState({ disabled: false }) : this.setState({ disabled: true });
  }

  // validation check
  valiCheckEmail = () => {
    const regexp = /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const { valueEmail } = this.state;
    valueEmail ? this.setState({ errMgeEmail: '' }) : this.setState({ errMgeEmail: 'Emailを入力して下さい' });
    valueEmail.match(regexp) ? this.setState({ errMgeEmail: '' }) : this.setState({ errMgeEmail: 'Emailの形式で入力してください' });
  }

  valiCheckSubject = () => {
    const { valueSubject } = this.state;
    valueSubject ? this.setState({ errMgeSubject: '' }) : this.setState({ errMgeSubject: '件名を入力して下さい' });
  }

  valiCheckText = () => {
    const { valueText } = this.state;
    valueText ? this.setState({ errMgeText: '' }) : this.setState({ errMgeText: '内容を入力して下さい' });
  }

  // value write
  handleChangeemail = (event) => {
    this.setState({
      valueEmail: event.target.value,
    });
    this.valiCheckEmail();
    this.formBottonChange();
  }

  handleChangesubject = (event) => {
    this.setState({
      valueSubject: event.target.value,
    });
    this.valiCheckSubject();
    this.formBottonChange();
  }

  handleChangetext = (event) => {
    this.setState({
      valueText: event.target.value,
    });
    this.valiCheckText();
    this.formBottonChange();
  }

  handleSubmit = () => {
    //
    // アラートではなく上からにゅるっとでてくる感じに
  }

  render() {
    const { valueEmail } = this.state;
    const { valueSubject } = this.state;
    const { valueText } = this.state;
    const { errMgeEmail } = this.state;
    const { errMgeSubject } = this.state;
    const { errMgeText } = this.state;
    const { disabled } = this.state;

    return (
      <section id="contact" className="main-contact">
        <div className="main-contact__container">
          <h2 className="main-contact__title">contact</h2>
          <form action="" method="POST" className="main-contact__form" onSubmit={this.handleSubmit}>
            <label htmlFor="inputEmail">
              email：
              <span className="main-contact__form__errormsg">{errMgeEmail}</span>
            </label>
            <input type="email" id="inputEmail" name="email" className="main-contact__form__input" value={valueEmail} onChange={this.handleChangeemail} />
            <label htmlFor="inputSubject">
              件名：
              <span className="main-contact__form__errormsg">{errMgeSubject}</span>
            </label>
            <input type="text" id="inputSubject" name="subject" className="main-contact__form__input" value={valueSubject} onChange={this.handleChangesubject} />
            <label htmlFor="inputText">
              内容：
              <span className="main-contact__form__errormsg">{errMgeText}</span>
            </label>
            <textarea name="text" id="inputText" cols="30" rows="10" className="main-contact__form__input" value={valueText} onChange={this.handleChangetext} />

            <input type="submit" name="submit" value="送信" className="main-contact__form__submit" disabled={disabled} />
          </form>
        </div>
      </section>
    );
  }
}

export default ContactForm;
