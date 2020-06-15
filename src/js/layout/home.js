import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/header';
import Footer from '../components/footer';
import Sidebar from '../components/Sidebar';
import Contents from '../components/Contents';

class Home extends React.Component {
  render() {
    const { setMainContent } = this.props;
    const titles = {
      scss: {
        title: 'Scss',
        chapter1: {
          main: '1. ',
          sub1: '1-1',
          sub2: '1-2',
          sub3: '1-3',
          sub4: '1-4',
        },
      },
      js: {
        title: 'JS',
        chapter1: {
          main: '1. ',
          sub1: '1-1',
          sub2: '1-2',
          sub3: '1-3',
          sub4: '1-4',
        },
      },
      react: {
        title: 'React',
        chapter1: {
          main: '1. JSX',
          sub1: 'JSXとは？',
          sub2: 'JSXに関数を埋め込む',
          sub3: 'JSXで属性を指定する',
          sub4: 'JSX はオブジェクトの表現である',
        },
        chapter2: {
          main: '2. 要素のレンダー',
          sub1: '要素を DOM として描画する',
        },
        chapter3: {
          main: '3. コンポーネントと props',
          sub1: 'コンポーネント',
          sub2: 'コンポーネントのレンダー',
          sub3: 'Props は読み取り専用',
        },
        chapter4: {
          main: '4. state とライフサイクル',
          sub1: 'クラスにローカルな state を追加する',
          sub2: 'クラスにライフサイクルメソッドを追加する',
          sub3: 'state を正しく使用する',
        },
        chapter5: {
          main: '5. イベント処理',
          sub1: 'React でのイベント処理',
        },
        chapter6: {
          main: '6. リストと key',
          sub1: 'リスト',
          sub2: 'Key',
        },
        chapter7: {
          main: '7. フォーム',
          sub1: 'React でのフォーム要素',
          sub2: '複数の入力の処理',
        },
        chapter8: {
          main: '8. コンポジション',
          sub1: '子要素の出力 ',
        },
      },
      router: {
        title: 'Router',
        chapter1: {
          main: '1. 主なコンポーネント',
          sub1: 'Router',
          sub2: 'Route と Switch',
          sub3: 'ナビゲーション',
        },
      },
    };

    return (
      <>
        <Header />
        <main id="main" className="main">
          <div className="main__reference-ontainer">
            <Contents titles={titles} setContents={setMainContent} />
            <Sidebar titles={titles} setSidebar={setMainContent} />
          </div>
        </main>
        <Footer />
      </>
    );
  }
}
Home.propTypes = {
  setMainContent: PropTypes.string.isRequired,
};

export default Home;
