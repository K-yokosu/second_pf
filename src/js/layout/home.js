import React from 'react';

import Header from '../components/header'
import Footer from '../components/footer'
import Banner from '../components/banner'
import ContactForm from '../components/contactform'
import Merit from '../components/merit'

class Home extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Banner />
                <Merit />
                <ContactForm />
                <Footer />
            </>
        );
    }
}

export default Home;