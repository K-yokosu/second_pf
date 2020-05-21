import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import LoginForm from '../components/loginform';

const Login = () => (
  <>
    <Header />
    <main className="main">
      <LoginForm />
    </main>
    <Footer />
  </>
);

export default Login;
