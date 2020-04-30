import React from 'react';

import Header from '../components/header'
import Footer from '../components/footer'
import M_comp from '../components/mypage'

class MyPage extends React.Component {
    render() {
        return (
            <>
                <Header />
                <M_comp />
                <Footer />
            </>
        );
    }
}

export default MyPage;
