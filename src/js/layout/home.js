import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import Banner from '../components/banner';
import ContactForm from '../components/contactform';
import Merit from '../components/merit';

const Home = () => (
  <>
    <Header />
    <main className="main">
      <Banner />
      <Merit />
      <ContactForm />
    </main>
    <Footer />
  </>
);

export default Home;
