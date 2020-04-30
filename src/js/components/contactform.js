import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: {
        true: 'ご連絡ありがとうございます',
      },
      info: {
        email: '',
        subject: '',
        text: '',
      },
      message: {
        email: '',
        subject: '',
        text: '',
      },
      disabled: true,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeemail = this.handleChangeemail.bind(this);
    this.handleChangesubject = this.handleChangesubject.bind(this);
    this.handleChangetext = this.handleChangetext.bind(this);
  }

  handleChangeemail(event) {
    const regexp = /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    this.setState({
      info: { email: event.target.value },
    });
    this.state.info.email.match(regexp) && this.setState({ message: { email: '' } });
    !this.state.info.email.match(regexp) && this.setState({ message: { email: 'Emailの形式で入力してください' } });

    this.state.message.email
      ? this.setState({ disabled: true })
      : this.setState({ disabled: false });
  }

  handleChangesubject(event) {
    this.setState({
      info: { subject: event.target.value },
    });
    this.state.info.subject && this.setState({ message: { subject: '' } });
    !this.state.info.subject && this.setState({ message: { subject: '件名を入力してください' } });
  }

  handleChangetext(event) {
    this.setState({
      info: { text: event.target.value },
    });
    this.state.info.text && this.setState({ message: { text: '' } });
    !this.state.info.text && this.setState({ message: { text: '本文を入力してください' } });
  }


  // 送信結果をphpから受け取ってtrue or falseの判定でmessageを変える必要がある
  // モーダルで確認画面つくる
  // 送信ボタンはバリデーションOKになってから押せるようにする
  handleSubmit(event) {
    event.preventDefault();
    alert(this.state.alert.true);
    //アラートではなく上からにゅるっとでてくる感じに
  }

  render() {
    return (
      <section id="contact" className="main-contact">
        <div className="main-contact__container">
          <h2 className="main-contact__title">contact</h2>
          <form action="" method="POST" className="main-contact__form" onSubmit={this.handleSubmit}>
            <label>
              email：
              <span className="main-contact__form__errormsg">{this.state.message.email}</span>
            </label>
            <input type="email" name="email" className="main-contact__form__input" value={this.state.info.email} onChange={this.handleChangeemail} />
            <label>
              件名：
              <span className="main-contact__form__errormsg">{this.state.message.subject}</span>
            </label>
            <input type="text" name="subject" className="main-contact__form__input" value={this.state.info.subject} onChange={this.handleChangesubject} />
            <label>
              内容：
              <span className="main-contact__form__errormsg">{this.state.message.text}</span>
            </label>
            <textarea name="text" id="" cols="30" rows="10" className="main-contact__form__input" value={this.state.info.text} onChange={this.handleChangetext} />
            <input type="submit" name="submit" value="送信" className="main-contact__form__submit" disabled={this.state.disabled} />
          </form>
        </div>
      </section>
    );
  }
}

export default ContactForm;
