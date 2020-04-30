import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/header'
import Footer from '../components/footer'
import ContactForm from '../components/contactform'

class Login extends React.Component {
    render() {
        return (
            <>
                <Header />
                <ContactForm />
                <Link to="/mypage">マイページへ</Link>
                <Footer />
            </>
        );
    }
}

export default Login;