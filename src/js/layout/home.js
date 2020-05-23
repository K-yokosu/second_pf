import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';
import Contents from '../components/contents';

class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main className="main">
          <Sidebar setTitle={this.props.setTitle} />
          <Contents />
        </main>
        <Footer />
      </>
    );
  }
}

export default Home;
