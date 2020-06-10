import React from 'react';

class Content extends React.Component {
  keywordComponent = keyword => {
    return (<span className="main-contents__codeBox__keyword">{keyword}</span>);
  }
  funcNameComponent = funcName => {
    return (<span className="main-contents__codeBox__function">{funcName}</span>);
  }
  punctuationComponent = punctuation => {
    return (<span className="main-contents__codeBox__punctuation">{punctuation}</span>);
  }
  operatorComponent = operator => {
    return (<span className="main-contents__codeBox__operator">{operator}</span>);
  }
  stringComponent = string => {
    return (<span className="main-contents__codeBox__string">{string}</span>);
  }
  elementComponent = element => {
    return (
      <>
        {this.punctuationComponent('<')}
        <span className="main-contents__codeBox__element">{element}</span>
        {this.punctuationComponent('>')}
      </>
      );
  }
  simpleComponent = element => {
    return (
      <>
        {this.punctuationComponent('<')}
        <span className="main-contents__codeBox__element">{element}</span>
        {this.punctuationComponent(' />')}
      </>
      );
  }
  attributeElementComponent = (element, attribute, string) => {
    return (
      <>
        {this.punctuationComponent('<')}
        <span className="main-contents__codeBox__element">{element}</span>
        <span className="main-contents__codeBox__attribute"> {attribute}</span>
        {this.operatorComponent('=')}
        {string}
        {this.punctuationComponent('>')}
      </>
      );
  }
  routeElementComponent = ( element, path ) => {
    return (
      <>
        <span className="main-contents__codeBox__punctuation">{'<'}</span>
        <span className="main-contents__codeBox__element">{element}</span>
        {this.keywordComponent(' path')}
        {this.operatorComponent('=')}
        {this.stringComponent(path)}
        <span className="main-contents__codeBox__punctuation">{'>'}</span>
      </>
      );
  }
  closeElementComponent = element => {
    return (
      <>
        <span className="main-contents__codeBox__punctuation">{'</'}</span>
        <span className="main-contents__codeBox__element">{element}</span>
        <span className="main-contents__codeBox__punctuation">{'>'}</span>
      </>
      );
  }
  linkElementComponent = ( path ) => {
    return (
      <>
        <span className="main-contents__codeBox__punctuation">{'<'}</span>
        <span className="main-contents__codeBox__element">Link</span>
        {this.keywordComponent(' to')}
        {this.operatorComponent('=')}
        {this.stringComponent(path)}
        <span className="main-contents__codeBox__punctuation">{'>'}</span>
      </>
      );
  }
  redirectElementComponent = ( path ) => {
    return (
      <>
        <span className="main-contents__codeBox__punctuation">{'<'}</span>
        <span className="main-contents__codeBox__element">Redirect</span>
        {this.keywordComponent(' to')}
        {this.operatorComponent('=')}
        {this.stringComponent(path)}
        <span className="main-contents__codeBox__punctuation">{'>'}</span>
      </>
      );
  }
  navLinkElementComponent = ( style, path ) => {
    return (
      <>
        <span className="main-contents__codeBox__punctuation">{'<'}</span>
        <span className="main-contents__codeBox__element">NavLink</span>
        {this.keywordComponent(' activeStyle')}
        {this.operatorComponent('=')}
        {this.punctuationComponent('{')}
        {this.stringComponent(style)}
        {this.punctuationComponent('}')}
        {this.keywordComponent(' to')}
        {this.operatorComponent('=')}
        {this.stringComponent(path)}
        <span className="main-contents__codeBox__punctuation">{'>'}</span>
      </>
      );
  }
  somethingComponent = element => {
    return (
      <>
        <span className="main-contents__codeBox__punctuation">{'<'}</span>
        <span className="main-contents__codeBox__element">{element}</span>
        <span className="main-contents__codeBox__punctuation">{' />'}</span>
      </>
      );
  }

  render() {
    // 最後にコメント確認する
    // 文章のインデントつける
    // contentsの左右にアロー置いて、押したら次とか前のぺーじ行けるみたいな　これはrouter勉強してからかな
    // 開いているページのサイドのリンクの色をかえるそしてchapterタイトルを開かせる
    // codeはconst or component化して返す。
    // headerのLinkをNavLinkにしてcolor指定
    const { titles, setContents } = this.props;

    const scssContents = <div className="main-contents">
                            <h2 id="topTitle">{ titles.scss.title }</h2>
                         </div>
    const jsContents = <div className="main-contents">
                          <h2 id="topTitle">{ titles.js.title }</h2>
                       </div>
    const reactContents = <div className="main-contents">
                              <h2 id="topTitle">{ titles.react.title }</h2>


                              {/* --------   Chapter1   ---------------------------------------------------------------------------- */}
                              <div className="main-contents__chapterBox">
                                  <h3 id="mainTitle1">{ titles.react.chapter1.main }</h3>

                                  <div className="main-contents__subChapterBox">
                                      <h4 id="subTitle_1-1">{ titles.react.chapter1.sub1 }</h4>
                                      <div className="main-contents__indent">
                                          <p className="main-contents__sentences">
                                            JSXとはマークアップとロジック(プログラム)を同じファイルに集約できるJavaScript構文の拡張言語です。
                                            これまでの開発ではHTMLファイルとJSファイルで役割を分けていましたが、JSXを使うことによりそれら
                                            が統合され、より理解しやすく見やすいコードを書くことができます。
                                          </p>
                                      </div>
                                  </div>

                                  <div className="main-contents__subChapterBox">
                                      <h4 id="subTitle_1-2">{ titles.react.chapter1.sub2 }</h4>
                                      <div className="main-contents__indent">
                                          <p className="main-contents__sentences">
                                            JavaScriptの式を中括弧で囲むことで、JSXに埋め込むことができます。
                                            下記例では関数を埋め込んでいます。
                                          </p>
                                          <pre className="main-contents__codeBox">
                                              <code>
                                                  <p>
                                                    {this.keywordComponent('function')}
                                                    {this.funcNameComponent('formatName')}
                                                    {this.punctuationComponent('(')}
                                                    user
                                                    {this.punctuationComponent(')')}
                                                    {this.punctuationComponent('{')}
                                                  </p>
                                                  <div className="main-contents__codeBox__indent">
                                                    <p>
                                                      {this.keywordComponent('return')}
                                                      user
                                                      {this.punctuationComponent('.')}
                                                      firstName
                                                      {this.operatorComponent('+')}
                                                      {this.stringComponent("' '")}
                                                      {this.operatorComponent('+')}
                                                      user
                                                      {this.punctuationComponent('.')}
                                                      lastName
                                                      {this.punctuationComponent(';')}
                                                      <br />
                                                    </p>
                                                  </div>
                                                  <p className="main-contents__codeBox__interval">
                                                    {this.punctuationComponent('}')}
                                                    <br />
                                                  </p>
                                                  <p>
                                                    {this.keywordComponent('const')}
                                                    user
                                                    {this.operatorComponent('=')}
                                                    {this.punctuationComponent('{')}
                                                    <br />
                                                  </p>
                                                  <div className="main-contents__codeBox__indent">
                                                    <p>
                                                      firstName
                                                      {this.operatorComponent(':')}
                                                      {this.stringComponent("'Harper'")}
                                                      {this.punctuationComponent(',')}
                                                      <br />
                                                    </p>
                                                    <p>
                                                      lastName
                                                      {this.operatorComponent(':')}
                                                      {this.stringComponent("'Perez'")}
                                                      <br />
                                                    </p>
                                                  </div>
                                                  <p className="main-contents__codeBox__interval">
                                                    {this.punctuationComponent('};')}
                                                    <br />
                                                  </p>
                                                  <p>
                                                    {this.keywordComponent('const')}
                                                    element
                                                    {this.operatorComponent('=')}
                                                    {this.punctuationComponent('(')}
                                                    <br />
                                                  </p>
                                                  <div className="main-contents__codeBox__indent">
                                                    <p>
                                                      {this.elementComponent('h1')}
                                                      <br />
                                                    </p>
                                                    <p>
                                                      <div className="main-contents__codeBox__indent">
                                                        Hello,
                                                        {this.punctuationComponent('{')}
                                                        {this.funcNameComponent('formatName')}
                                                        {this.punctuationComponent('(')}
                                                        user
                                                        {this.punctuationComponent(')')}
                                                        {this.punctuationComponent('}')}
                                                        {this.punctuationComponent('!')}
                                                        <br />
                                                      </div>
                                                    </p>
                                                    <p>
                                                      {this.closeElementComponent('h1')}
                                                      <br />
                                                    </p>
                                                  </div>
                                                  <p className="main-contents__codeBox__interval">
                                                    {this.punctuationComponent(');')}
                                                    <br />
                                                  </p>
                                                  <p>
                                                    ReactDOM
                                                    {this.punctuationComponent('.')}
                                                    {this.funcNameComponent('render')}
                                                    {this.punctuationComponent('(')}
                                                  </p>
                                                  <div className="main-contents__codeBox__indent">
                                                    <p>
                                                      element
                                                      {this.punctuationComponent(',')}
                                                    </p>
                                                    <p>
                                                      document
                                                      {this.punctuationComponent('.')}
                                                      {this.funcNameComponent('getElementById')}
                                                      {this.punctuationComponent('(')}
                                                      {this.stringComponent("'root'")}
                                                      {this.punctuationComponent(')')}
                                                    </p>
                                                  </div>
                                                  <p className="main-contents__codeBox__interval">
                                                    {this.punctuationComponent(');')}
                                                    <br />
                                                  </p>
                                              </code>
                                          </pre>
                                      </div>
                                  </div>

                                  <div className="main-contents__subChapterBox">
                                      <h4 id="subTitle_1-3">{ titles.react.chapter1.sub3 }</h4>
                                      <div className="main-contents__indent">
                                          <p className="main-contents__sentences">
                                            文字列リテラルを属性として指定するにはhtml同様引用符を使用できます。
                                            class属性はclassNameとすることで使用できます。
                                            中括弧で囲むことで属性にJavaScriptを埋め込むこともできますが、
                                            error 防止のため、引用符か中括弧の内どちらか一方を使用して下さい。
                                          </p>
                                          <p className="main-contents__sentences">
                                            また、inputなどの空タグを使用する場合は、/>でタグを閉じることができます。
                                          </p>
                                          <pre className="main-contents__codeBox">
                                              <code>
                                                  <p>
                                                    {this.keywordComponent('const')}
                                                    element
                                                    {this.operatorComponent('=')}
                                                    {this.attributeElementComponent('div', 'className','"name"')}
                                                    {this.closeElementComponent('div')}
                                                    {this.punctuationComponent(';')}
                                                  </p>
                                                  <p>
                                                    {this.keywordComponent('const')}
                                                    element
                                                    {this.operatorComponent('=')}
                                                    {this.punctuationComponent('<')}
                                                    <span className="main-contents__codeBox__element">div</span>
                                                    <span className="main-contents__codeBox__attribute"> className</span>
                                                    {this.operatorComponent('=')}
                                                    "name"
                                                    {this.punctuationComponent(' {')}
                                                    adress
                                                    {this.punctuationComponent('}')}
                                                    {this.punctuationComponent('>')}
                                                    {this.closeElementComponent('div')}
                                                    {this.punctuationComponent(';')}
                                                    {this.stringComponent(' //parsing error ...')}
                                                  </p>
                                                  <p>
                                                    {this.keywordComponent('const')}
                                                    element
                                                    {this.operatorComponent('=')}
                                                    {this.punctuationComponent('<')}
                                                    <span className="main-contents__codeBox__element">input</span>
                                                    <span className="main-contents__codeBox__attribute"> type</span>
                                                    {this.operatorComponent('=')}
                                                    "text"
                                                    {this.punctuationComponent(' />;')}
                                                  </p>
                                              </code>
                                          </pre>
                                      </div>
                                  </div>

                                  <div  className="main-contents__subChapterBox">
                                      <h4 id="subTitle_1-4">{ titles.react.chapter1.sub4 }</h4>
                                      <div className="main-contents__indent">
                                          <p className="main-contents__sentences">
                                            <a href="https://babeljs.io/repl#?browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=MYewdgzgLgBAZiEBeGAeAJgSwG4D4AWApgDbEioD0WeAUEA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=7.9.6&externalPlugins=">Babel</a>
                                            は JSX を React.createElement() の呼び出しへとコンパイルします。
                                            以下の 2 つの例は等価です：
                                          </p>
                                          <pre className="main-contents__codeBox">
                                              <code>
                                                  <p>
                                                    {this.keywordComponent('const')}
                                                    element
                                                    {this.operatorComponent('=')}
                                                    {this.punctuationComponent('(')}
                                                  </p>
                                                  <div className="main-contents__codeBox__indent">
                                                    <p>
                                                      {this.attributeElementComponent('h1', 'className','"greeting"')}
                                                    </p>
                                                    <div className="main-contents__codeBox__indent">
                                                      <p>
                                                        Hello, world!
                                                      </p>
                                                    </div>
                                                    <p>
                                                      {this.closeElementComponent('h1')}
                                                    </p>
                                                  </div>
                                                  <p>
                                                    {this.punctuationComponent(');')}
                                                  </p>
                                              </code>
                                          </pre>
                                          <pre className="main-contents__codeBox">
                                              <code>
                                                  <p>
                                                    {this.keywordComponent('const')}
                                                    element
                                                    {this.operatorComponent(' = ')}
                                                    React
                                                    {this.punctuationComponent('.')}
                                                    {this.funcNameComponent('createElement')}
                                                    {this.punctuationComponent('(')}
                                                  </p>
                                                  <div className="main-contents__codeBox__indent">
                                                    <p>
                                                      {this.stringComponent("'h1'")}
                                                      {this.punctuationComponent(',')}
                                                    </p>
                                                    <p>
                                                      {this.punctuationComponent('{')}
                                                      <span className="main-contents__codeBox__attribute">className</span>
                                                      {this.punctuationComponent(':')}
                                                      {this.stringComponent( "'greeting'")}
                                                      {this.punctuationComponent('}')}
                                                      {this.punctuationComponent(',')}
                                                    </p>
                                                    <p>
                                                      {this.stringComponent("'Hello, world!'")}
                                                    </p>
                                                  </div>
                                                  <p>
                                                    {this.punctuationComponent(');')}
                                                  </p>
                                              </code>
                                          </pre>
                                          <p className="main-contents__sentences">
                                            React.createElement() は以下のようなオブジェクトを生成します：
                                          </p>
                                          <pre className="main-contents__codeBox">
                                              <code>
                                                  <p>
                                                    {this.keywordComponent('const')}
                                                    element
                                                    {this.operatorComponent('=')}
                                                    {this.punctuationComponent('{')}
                                                  </p>
                                                  <div className="main-contents__codeBox__indent">
                                                    <p>
                                                      <span className="main-contents__codeBox__attribute">type</span>
                                                      {this.punctuationComponent(':')}
                                                      {this.stringComponent("'h1'")}
                                                      {this.punctuationComponent(',')}
                                                    </p>
                                                    <p>
                                                      <span className="main-contents__codeBox__attribute">props</span>
                                                      {this.punctuationComponent(':')}
                                                      {this.punctuationComponent('{')}
                                                    </p>
                                                    <div className="main-contents__codeBox__indent">
                                                      <p>
                                                        <span className="main-contents__codeBox__attribute">className</span>
                                                        {this.punctuationComponent(':')}
                                                        {this.stringComponent( "'greeting'")}
                                                        {this.punctuationComponent(',')}
                                                      </p>
                                                      <p>
                                                        <span className="main-contents__codeBox__attribute">children</span>
                                                        {this.punctuationComponent(':')}
                                                        {this.stringComponent( "'Hello, world!'")}
                                                      </p>
                                                    </div>
                                                    <p>
                                                      {this.punctuationComponent('}')}
                                                    </p>
                                                  </div>
                                                  <p>
                                                    {this.punctuationComponent('};')}
                                                  </p>
                                              </code>
                                          </pre>
                                          <p className="main-contents__sentences">
                                            このようなオブジェクトは “React 要素” と呼ばれます。
                                            これらは画面に表示したいものの説明書きとして考えることができます。
                                            React はこれらのオブジェクトを読み取り、DOM を構築して最新に保ちます。
                                          </p>
                                      </div>
                                  </div>

                              </div>
{/* １のみ確認 */}
                              {/* --------   Chapter2   ---------------------------------------------------------------------------- */}                   
                              <div className="main-contents__chapterBox">
                                  <h3 id="mainTitle2">{ titles.react.chapter2.main }</h3>

                                  <div className="main-contents__subChapterBox">
                                      <h4 id="subTitle_2-1">{ titles.react.chapter2.sub1 }</h4>
                                      <div className="main-contents__indent">
                                          <p className="main-contents__sentences">
                                            1章で見たように、JSXは最終的には React要素と呼ばれるオブジェクトに変換され、
                                            React は React要素を元に DOM を構築します。
                                            React は通常この DOM を HTMLファイルの下記のような要素に持たせています。
                                          </p>
                                          <pre className="main-contents__codeBox">
                                              <code>
                                                  <p>
                                                    {this.attributeElementComponent('div','id','"root"')}
                                                    {this.closeElementComponent('div')}
                                                  </p>
                                              </code>
                                          </pre>
                                          <p className="main-contents__sentences">
                                            React要素をルートDOM ノードにレンダリングするには、その 2 つを ReactDOM.render() に渡すことで実現します。
                                          </p>
                                          <pre className="main-contents__codeBox">
                                              <code>
                                                  <p>
                                                    {this.keywordComponent('const')}
                                                    element
                                                    {this.operatorComponent('=')}
                                                    {this.elementComponent('h1')}
                                                    Hello, world
                                                    {this.closeElementComponent('h1')}
                                                    {this.punctuationComponent(';')}
                                                  </p>
                                                  <p>
                                                    ReactDOM
                                                    {this.punctuationComponent('.')}
                                                    {this.funcNameComponent('render')}
                                                    {this.punctuationComponent('(')}
                                                  </p>
                                                  <div className="main-contents__codeBox__indent">
                                                    <p>
                                                      element
                                                      {this.punctuationComponent(',')}
                                                    </p>
                                                    <p>
                                                      document
                                                      {this.punctuationComponent('.')}
                                                      {this.funcNameComponent('getElementById')}
                                                      {this.punctuationComponent('(')}
                                                      {this.stringComponent('root')}
                                                      {this.punctuationComponent(')')}
                                                    </p>
                                                  </div>
                                                  <p className="main-contents__codeBox__interval">
                                                    {this.punctuationComponent(');')}
                                                  </p>
                                              </code>
                                          </pre>
                                          <p className="main-contents__sentences">
                                              React要素はイミュータブル (不変) オブジェクトなので、一度作成されると変更できません。
                                            React要素を更新する唯一の方法は、新しい React要素を作成して ReactDOM.render() に渡すことで実現します。
                                          </p>
                                          <p className="main-contents__sentences">
                                              また、React DOM は要素とその子要素を以前のものと比較し、変更された DOM の更新のみを行います。
                                            {/* これによりブラウザの負担を軽減します。 */}
                                          </p>
                                      </div>
                                  </div>

                              </div>

                              {/* --------   Chapter3   ---------------------------------------------------------------------------- */}                   
                              <div className="main-contents__chapterBox">
                                  <h3 id="mainTitle3">{ titles.react.chapter3.main }</h3>

                                  <div className="main-contents__subChapterBox">
                                      <h4 id="subTitle_3-1">{ titles.react.chapter3.sub1 }</h4>
                                      <div className="main-contents__indent">
                                          <p className="main-contents__sentences">
                                          　React DOM により描画された UI を再利用できるよう分割し、独立した部品として
                                            扱う概念のことをコンポーネントと言います。
                                            コンポーネントには関数コンポーネントとクラスコンポーネントがあります。
                                            関数を使うかクラスを使うかで呼び名が変わります。
                                          </p>
                                          <p className="main-contents__sentences">
                                          　下記2つのコンポーネントは React の視点からは等価です。
                                            データの入った "props" というオブジェクトを引数として受取り、 React要素を返しています。
                                            props については後ほど説明します。
                                          </p>
                                          <pre className="main-contents__codeBox">
                                              <code>
                                                  <p>
                                                    {this.keywordComponent('function')}
                                                    {this.funcNameComponent('Welcome')}
                                                    {this.punctuationComponent('(')}
                                                    props
                                                    {this.punctuationComponent(')')}
                                                    {this.punctuationComponent('{')}
                                                  </p>
                                                  <div className="main-contents__codeBox__indent">
                                                    <p>
                                                      {this.keywordComponent('return')}
                                                      {this.elementComponent('h1')}
                                                      Hello,
                                                      {this.punctuationComponent('{')}
                                                      props.name
                                                      {this.punctuationComponent('}')}
                                                      {this.closeElementComponent('h1')}
                                                      {this.punctuationComponent(';')}
                                                    </p>
                                                  </div>
                                                  <p>
                                                    {this.punctuationComponent('}')}
                                                  </p>
                                              </code>
                                          </pre>
                                          <pre className="main-contents__codeBox">
                                              <code>
                                                  <p>
                                                    {this.keywordComponent('class')}
                                                    {this.funcNameComponent('Welcome')}
                                                    {this.keywordComponent('extends')}
                                                    {this.keywordComponent('React.Component')}
                                                    {this.punctuationComponent('{')}
                                                  </p>
                                                  <div className="main-contents__codeBox__indent">
                                                    <p>
                                                      {this.keywordComponent('render')}
                                                      {this.punctuationComponent('()')}
                                                      {this.punctuationComponent('{')}
                                                    </p>
                                                    <div className="main-contents__codeBox__indent">
                                                      <p>
                                                        {this.keywordComponent('return')}
                                                        {this.elementComponent('h1')}
                                                        Hello,
                                                        {this.punctuationComponent('{')}
                                                        this.props.name
                                                        {this.punctuationComponent('}')}
                                                        {this.closeElementComponent('h1')}
                                                        {this.punctuationComponent(';')}
                                                      </p>
                                                    </div>
                                                    <p>
                                                      {this.punctuationComponent('}')}
                                                    </p>
                                                  </div>
                                                  <p>
                                                    {this.punctuationComponent('}')}
                                                  </p>
                                              </code>
                                          </pre>
                                      </div>
                                  </div>

                                  <div className="main-contents__subChapterBox">
                                      <h4 id="subTitle_3-2">{ titles.react.chapter3.sub2 }</h4>
                                      <div className="main-contents__indent">
                                          <p className="main-contents__sentences">
                                            前節では、DOM のタグを表す React要素のみを扱いましたがコンポーネントを表すこともできます。
                                          </p>
                                          <pre className="main-contents__codeBox">
                                              <code>
                                                  <p>
                                                    {this.keywordComponent('const')}
                                                    element
                                                    {this.operatorComponent('=')}
                                                    {this.punctuationComponent('<')}
                                                    <span className="main-contents__codeBox__element">Welcome</span>
                                                    <span className="main-contents__codeBox__attribute"> name</span>
                                                    {this.operatorComponent('=')}
                                                    "Sara"
                                                    {this.punctuationComponent(' />;')}
                                                  </p>
                                              </code>
                                          </pre>
                                          <p className="main-contents__sentences">
                                            React がユーザ定義のコンポーネントを呼び出す時、
                                            JSX に書かれている属性と子要素を単一のオブジェクトとしてこのコンポーネントに渡します。
                                            このオブジェクトのことを “props” と呼びます。
                                          </p>
                                          <pre className="main-contents__codeBox">
                                              <code>
                                                  <p>
                                                    {this.keywordComponent('function')}
                                                    {this.funcNameComponent('Welcome')}
                                                    {this.punctuationComponent('(')}
                                                    props
                                                    {this.punctuationComponent(')')}
                                                    {this.punctuationComponent('{')}
                                                  </p>
                                                  <div className="main-contents__codeBox__indent">
                                                    <p>
                                                      {this.keywordComponent('return')}
                                                      {this.elementComponent('h1')}
                                                      Hello,
                                                      {this.punctuationComponent('{')}
                                                      props.name
                                                      {this.punctuationComponent('}')}
                                                      {this.closeElementComponent('h1')}
                                                      {this.punctuationComponent(';')}
                                                    </p>
                                                  </div>
                                                  <p>
                                                    {this.punctuationComponent('}')}
                                                  </p>
                                                  <br />
                                                  <p>
                                                    {this.keywordComponent('const')}
                                                    element
                                                    {this.operatorComponent('=')}
                                                    {this.punctuationComponent('<')}
                                                    <span className="main-contents__codeBox__element">Welcome</span>
                                                    <span className="main-contents__codeBox__attribute"> name</span>
                                                    {this.operatorComponent('=')}
                                                    "Sara"
                                                    {this.punctuationComponent(' />;')}
                                                  </p>
                                                  <p>
                                                    ReactDOM
                                                    {this.punctuationComponent('.')}
                                                    {this.funcNameComponent('render')}
                                                    {this.punctuationComponent('(')}
                                                  </p>
                                                  <div className="main-contents__codeBox__indent">
                                                    <p>
                                                      element
                                                      {this.punctuationComponent(',')}
                                                    </p>
                                                    <p>
                                                      document
                                                      {this.punctuationComponent('.')}
                                                      {this.funcNameComponent('getElementById')}
                                                      {this.punctuationComponent('(')}
                                                      {this.stringComponent("'root'")}
                                                      {this.punctuationComponent(')')}
                                                    </p>
                                                  </div>
                                                  <p className="main-contents__codeBox__interval">
                                                    {this.punctuationComponent(');')}
                                                  </p>
                                              </code>
                                          </pre>
                                          <ol className="main-contents__listBox">
                                            <li className="main-contents__numberList">ReactDOM.render() を呼び出します。</li>
                                            <li className="main-contents__numberList">Welcomeコンポーネントを呼び出し、引数としてnameを渡します。</li>
                                            <li className="main-contents__numberList">Welcome コンポーネントは出力として h1 タグを返します。</li>
                                            <li className="main-contents__numberList">React DOM は h1 タグ に一致するよう、DOM を効率的に更新します。</li>
                                          </ol>
                                          <p className="main-contents__sentences">
                                            <strong>補足: コンポーネント名は常に大文字で始めてください。</strong><br />
                                            React は小文字で始まるコンポーネントを DOM タグとして扱います。
                                            例えば、
                                            {this.simpleComponent('div')}
                                            は HTML の div タグを表しますが、
                                            {this.simpleComponent('Welcome')}
                                            はコンポーネントを表しており、
                                            <span className="main-contents__no">スコープ内に Welcome が存在する必要</span>があります。
                                          </p>
                                      </div>
                                  </div>

                                  <div className="main-contents__subChapterBox">
                                      <h4 id="subTitle_3-3">{ titles.react.chapter3.sub3 }</h4>
                                      <div className="main-contents__indent">
                                          <p className="main-contents__sentences">
                                            コンポーネントを関数で宣言するかクラスで宣言するかに関わらず、
                                            自分自身の props は決して変更してはいけません。
                                            この sum 関数を見てみましょう
                                          </p>
                                          <pre className="main-contents__codeBox">
                                              <code>
                                                  <p>
                                                    {this.keywordComponent('function')}
                                                    {this.funcNameComponent('sum')}
                                                    {this.punctuationComponent('(')}
                                                    a, b
                                                    {this.punctuationComponent(')')}
                                                    {this.punctuationComponent('{')}
                                                  </p>
                                                  <div className="main-contents__codeBox__indent">
                                                    <p>
                                                      {this.keywordComponent('return')}
                                                      a
                                                      {this.operatorComponent('+')}
                                                      b
                                                      {this.punctuationComponent(';')}
                                                    </p>
                                                  </div>
                                                  <p>
                                                    {this.punctuationComponent('}')}
                                                  </p>
                                              </code>
                                          </pre>
                                          <p className="main-contents__sentences">
                                            このような関数は入力されたものを変更しようとせず、
                                            同じ入力に対し同じ結果を返すので “純粋” であると言われます。
                                          </p>
                                          <p className="main-contents__sentences">
                                            対照的に、以下の関数は自身への入力を変更するため純関数ではありません
                                          </p>
                                          <pre className="main-contents__codeBox">
                                              <code>
                                                  <p>
                                                    {this.keywordComponent('function')}
                                                    {this.funcNameComponent('withdraw')}
                                                    {this.punctuationComponent('(')}
                                                    account, amount
                                                    {this.punctuationComponent(')')}
                                                    {this.punctuationComponent('{')}
                                                  </p>
                                                  <div className="main-contents__codeBox__indent">
                                                    <p>
                                                      {this.keywordComponent('return')}
                                                      account.total
                                                      {this.operatorComponent('-= ')}
                                                      amount
                                                      {this.punctuationComponent(';')}
                                                    </p>
                                                  </div>
                                                  <p>
                                                    {this.punctuationComponent('}')}
                                                  </p>
                                              </code>
                                          </pre>
                                          <p className="main-contents__sentences">
                                            React は柔軟ですが、1 つだけ厳格なルールがあります
                                          </p>
                                          <p className="main-contents__sentences">
                                            全ての React コンポーネントは、自己の props に対して純関数のように振る舞わねばなりません。
                                            ようは読み取り専用ということです。
                                          </p>
                                      </div>
                                  </div>

                              </div>

                              {/* --------   Chapter4   ---------------------------------------------------------------------------- */}
                              <div className="main-contents__chapterBox">
                                  <h3 id="mainTitle4">{ titles.react.chapter4.main }</h3>

                                  <div className="main-contents__subChapterBox">
                                      <h4 id="subTitle_4-1">{ titles.react.chapter4.sub1 }</h4>
                                      <div className="main-contents__indent">
                                          <p className="main-contents__sentences">
                                            前節までのコンポーネントは呼び出された時に渡ってくる props を扱うだけでしたが、
                                            クラスコンポーネントは state (状態) を持つことができます。
                                          </p>
                                          <p className="main-contents__sentences">
                                                state を所有してセットするコンポーネント自身以外からはその state にアクセスすることができません。
                                              </p>
                                          <p className="main-contents__sentences">
                                            下記コンポーネントは現在時刻を出力します。
                                          </p>
                                          <pre className="main-contents__codeBox">
                                              <code>
                                                  <p>
                                                    {this.keywordComponent('class')}
                                                    {this.funcNameComponent('Clock')}
                                                    {this.keywordComponent('extends')}
                                                    {this.keywordComponent('React.Component')}
                                                    {this.punctuationComponent('{')}
                                                  </p>
                                                  <div className="main-contents__codeBox__indent">
                                                    <p>
                                                      {this.keywordComponent('constructor')}
                                                      {this.punctuationComponent('(')}
                                                      props
                                                      {this.punctuationComponent(')')}
                                                      {this.punctuationComponent('{')}
                                                    </p>
                                                    <div className="main-contents__codeBox__indent">
                                                      <p>
                                                        {this.keywordComponent('super')}
                                                        {this.punctuationComponent('(')}
                                                        props
                                                        {this.punctuationComponent(')')}
                                                        {this.punctuationComponent(';')}
                                                      </p>
                                                      <p>
                                                        this.state
                                                        {this.operatorComponent('=')}
                                                        {this.punctuationComponent('{')}
                                                        date:
                                                        {this.keywordComponent(' new')}
                                                        {this.funcNameComponent('Date')}
                                                        {this.punctuationComponent('()};')}
                                                      </p>
                                                    </div>
                                                    <p>
                                                      {this.punctuationComponent('}')}
                                                    </p>
                                                    <br />
                                                    <p>
                                                      {this.keywordComponent('render')}
                                                      {this.punctuationComponent('()')}
                                                      {this.punctuationComponent('{')}
                                                    </p>
                                                    <div className="main-contents__codeBox__indent">
                                                      <p>
                                                        {this.keywordComponent('return')}
                                                        {this.punctuationComponent('(')}
                                                      </p>
                                                      <div className="main-contents__codeBox__indent">
                                                        <p>
                                                          {this.elementComponent('div')}
                                                        </p>
                                                        <div className="main-contents__codeBox__indent">
                                                          <p>
                                                            {this.elementComponent('h1')}
                                                            Hello, world!
                                                            {this.closeElementComponent('h1')}
                                                          </p>
                                                          <p>
                                                            {this.elementComponent('h2')}
                                                            It is
                                                            {this.punctuationComponent('{')}
                                                            this.state.date.
                                                            {this.funcNameComponent('toLocaleTimeString')}
                                                            {this.punctuationComponent('()}')}
                                                            .
                                                            {this.closeElementComponent('h2')}
                                                          </p>
                                                        </div>
                                                        <p>
                                                          {this.closeElementComponent('div')}
                                                        </p>
                                                      </div>
                                                      <p>
                                                        {this.punctuationComponent(');')}
                                                      </p>
                                                    </div>
                                                    <p>
                                                      {this.punctuationComponent('}')}
                                                    </p>
                                                  </div>
                                                  <p>
                                                    {this.punctuationComponent('}')}
                                                  </p>
                                                  <br />
                                                  <p>
                                                    ReactDOM
                                                    {this.punctuationComponent('.')}
                                                    {this.funcNameComponent('render')}
                                                    {this.punctuationComponent('(')}
                                                  </p>
                                                  <div className="main-contents__codeBox__indent">
                                                    <p>
                                                      {this.simpleComponent('Clock')}
                                                      {this.punctuationComponent(',')}
                                                    </p>
                                                    <p>
                                                      document
                                                      {this.punctuationComponent('.')}
                                                      {this.funcNameComponent('getElementById')}
                                                      {this.punctuationComponent('(')}
                                                      {this.stringComponent('root')}
                                                      {this.punctuationComponent(')')}
                                                    </p>
                                                  </div>
                                                  <p className="main-contents__codeBox__interval">
                                                    {this.punctuationComponent(');')}
                                                  </p>
                                              </code>
                                          </pre>
                                          <p className="main-contents__sentences">
                                            <a href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Classes/constructor">constructor</a>
                                            メソッドはクラスに1個だけ持たせることができる、オブジェクトの生成と初期化
                                            のための特殊メソッドです。要するにクラスのプロパティを持たせるメソッドです。
                                              state は constructor の中に書きます。
                                          </p>
                                          <p className="main-contents__sentences">
                                                JavaScript は constructor で this を使いたい場合に
                                                <a href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/super">super</a>の呼び出しを強制します。
                                                この制約はクラス定義された React コンポーネントにも適用されますので、 super は constructor 直下に書いて下さい。
                                                また super は親クラスの constructor を呼び出してくれるので親クラスの機能が使えるようになります。
                                              </p>
                                          <p className="main-contents__sentences">
                                                ここでは super(props) とすることで親クラスに props を渡しています。
                                                では super() とすると this.props は使えなくなるのか？
                                              </p>
                                          <p className="main-contents__sentences">
                                            結論から言うと、使えます。
                                            では super() だけでいいのでは？ と思うでしょうが早まらないで下さい。
                                            React は constructor が実行された後に this.props を割り当てます。
                                            つまり constructor 内部では this.props は未定義のままです。
                                            super(props) とすることで constructor 内部でも this.props が使えるようになります。
                                            以上の理由により、絶対に必要というわけではないですが super(props) としておくことを推奨します。
                                          </p>
                                      </div>
                                  </div>

                                  <div className="main-contents__subChapterBox">
                                      <h4 id="subTitle_4-2">{ titles.react.chapter4.sub2 }</h4>
                                      <div className="main-contents__indent">
                                          <p className="main-contents__sentences">
                                            React要素が DOM として描画されることをマウント、
                                            DOM から削除されることをアンマウントと言います。
                                          </p>
                                          <p className="main-contents__sentences">
                                            クラスコンポーネントでは特別なメソッドを宣言することで、
                                            コンポーネントがマウント・アンマウントした際にコードを実行できます。
                                            この特別なメソッドのことをライフサイクルメソッドと言います。
                                            このライフサイクルメソッドを使って前節のクラスコンポーネントの時刻表示を、
                                            一度ではなく毎秒更新するようにしていきます。
                                          </p>
                                          <pre className="main-contents__codeBox">
                                              <code>
                                                  <p>
                                                    {this.keywordComponent('class')}
                                                    {this.funcNameComponent('Clock')}
                                                    {this.keywordComponent(' extends')}
                                                    {this.keywordComponent('React.Component')}
                                                    {this.punctuationComponent('{')}
                                                  </p>
                                                  <div className="main-contents__codeBox__indent">
                                                    <p>
                                                      {this.keywordComponent('constructor')}
                                                      {this.punctuationComponent('(')}
                                                      props
                                                      {this.punctuationComponent(')')}
                                                      {this.punctuationComponent('{')}
                                                    </p>
                                                    <div className="main-contents__codeBox__indent">
                                                      <p>
                                                        {this.keywordComponent('super')}
                                                        {this.punctuationComponent('(')}
                                                        props
                                                        {this.punctuationComponent(')')}
                                                        {this.punctuationComponent(';')}
                                                      </p>
                                                      <p>
                                                        this.state
                                                        {this.operatorComponent('=')}
                                                        {this.punctuationComponent('{')}
                                                        date:
                                                        {this.keywordComponent(' new')}
                                                        {this.funcNameComponent('Date')}
                                                        {this.punctuationComponent('()};')}
                                                      </p>
                                                    </div>
                                                    <p>
                                                      {this.punctuationComponent('}')}
                                                    </p>
                                                    <br />
                                                    <p>
                                                      {this.keywordComponent('componentDidMount')}
                                                      {this.punctuationComponent('()')}
                                                      {this.punctuationComponent('{')}
                                                    </p>
                                                    <div className="main-contents__codeBox__indent">
                                                      <p>
                                                        this.timerID
                                                        {this.operatorComponent(' = ')}
                                                        {this.funcNameComponent('setInterval')}
                                                        {this.punctuationComponent('(')}
                                                      </p>
                                                      <div className="main-contents__codeBox__indent">
                                                        <p>
                                                          {this.punctuationComponent('()')}
                                                          {this.punctuationComponent('=> ')}
                                                          this.
                                                          {this.funcNameComponent('tick')}
                                                          {this.punctuationComponent('(),')}
                                                        </p>
                                                        <p>
                                                          1000
                                                        </p>
                                                      </div>
                                                      <p>
                                                        {this.punctuationComponent(');')}
                                                      </p>
                                                    </div>
                                                    <p>
                                                      {this.punctuationComponent('}')}
                                                    </p>
                                                    <br />

                                                    <p>
                                                      {this.keywordComponent('componentWillUnmount')}
                                                      {this.punctuationComponent('()')}
                                                      {this.punctuationComponent('{')}
                                                    </p>
                                                    <div className="main-contents__codeBox__indent">
                                                      <p>
                                                        {this.funcNameComponent('clearInterval')}
                                                        {this.punctuationComponent('(')}
                                                        this.timerID
                                                        {this.punctuationComponent(');')}
                                                      </p>
                                                    </div>
                                                    <p>
                                                      {this.punctuationComponent('}')}
                                                    </p>
                                                    <br />

                                                    <p>
                                                      {this.keywordComponent('tick')}
                                                      {this.punctuationComponent('()')}
                                                      {this.punctuationComponent('{')}
                                                    </p>
                                                    <div className="main-contents__codeBox__indent">
                                                      <p>
                                                        {this.funcNameComponent('this.setState')}
                                                        {this.punctuationComponent('({')}
                                                      </p>
                                                      <div className="main-contents__codeBox__indent">
                                                        <p>
                                                          date:
                                                          {this.keywordComponent(' new')}
                                                          {this.funcNameComponent('Date')}
                                                          {this.punctuationComponent('()')}
                                                        </p>
                                                      </div>
                                                      <p>
                                                        {this.punctuationComponent('});')}
                                                      </p>
                                                    </div>
                                                    <p>
                                                      {this.punctuationComponent('}')}
                                                    </p>
                                                    <br />

                                                    <p>
                                                      {this.keywordComponent('render')}
                                                      {this.punctuationComponent('()')}
                                                      {this.punctuationComponent('{')}
                                                    </p>
                                                    <div className="main-contents__codeBox__indent">
                                                      <p>
                                                        {this.keywordComponent('return')}
                                                        {this.punctuationComponent('(')}
                                                      </p>
                                                      <div className="main-contents__codeBox__indent">
                                                        <p>
                                                          {this.elementComponent('div')}
                                                        </p>
                                                        <div className="main-contents__codeBox__indent">
                                                          <p>
                                                            {this.elementComponent('h1')}
                                                            Hello, world!
                                                            {this.closeElementComponent('h1')}
                                                          </p>
                                                          <p>
                                                            {this.elementComponent('h2')}
                                                            It is
                                                            {this.punctuationComponent('{')}
                                                            this.state.date.
                                                            {this.funcNameComponent('toLocaleTimeString')}
                                                            {this.punctuationComponent('()}')}
                                                            .
                                                            {this.closeElementComponent('h2')}
                                                          </p>
                                                        </div>
                                                        <p>
                                                          {this.closeElementComponent('div')}
                                                        </p>
                                                      </div>
                                                      <p>
                                                        {this.punctuationComponent(');')}
                                                      </p>
                                                    </div>
                                                    <p>
                                                      {this.punctuationComponent('}')}
                                                    </p>
                                                  </div>
                                                  <p>
                                                    {this.punctuationComponent('}')}
                                                  </p>
                                                  <br />

                                                  <p>
                                                    ReactDOM
                                                    {this.punctuationComponent('.')}
                                                    {this.funcNameComponent('render')}
                                                    {this.punctuationComponent('(')}
                                                  </p>
                                                  <div className="main-contents__codeBox__indent">
                                                    <p>
                                                      {this.simpleComponent('Clock')}
                                                      {this.punctuationComponent(',')}
                                                    </p>
                                                    <p>
                                                      document
                                                      {this.punctuationComponent('.')}
                                                      {this.funcNameComponent('getElementById')}
                                                      {this.punctuationComponent('(')}
                                                      {this.stringComponent('root')}
                                                      {this.punctuationComponent(')')}
                                                    </p>
                                                  </div>
                                                  <p className="main-contents__codeBox__interval">
                                                    {this.punctuationComponent(');')}
                                                  </p>
                                              </code>
                                          </pre>
                                          <p className="main-contents__sentences">
                                            componentDidMount() は、出力が DOM にレンダーされた後に実行されるライフサイクルメソッドです。
                                            componentWillUnmount() はコンポーネントが DOM から削除される時が来たら実行されます。
                                          </p>
                                          <p className="main-contents__sentences">
                                                何かデータフローに影響されないデータを保存したい場合に、追加のフィールドを手動でクラスに追加できます。
                                                それが今回では this.timerID です。
                                                今回は timerID でしたが名前はなんでもいいです。
                                              </p>
                                          <p className="main-contents__sentences">
                                                tick() メソッドの中に this.setState とあります。
                                                これは this.state が持っているデータを更新する時に使います。
                                              </p>
                                          <p className="main-contents__sentences">
                                            簡単にコードの流れを振り返ります。
                                          </p>
                                          <ol className="main-contents__listBox">
                                            <li className="main-contents__numberList">Clock コンポーネントが ReactDOM.render() に渡されます。</li>
                                            <li className="main-contents__numberList">React は Clock コンポーネントの constructor を呼び出します。</li>
                                            <li className="main-contents__numberList">Clock は this.state を初期化（現在時刻セット）します。</li>
                                            <li className="main-contents__numberList">Clock は render() メソッドを呼び出します。</li>
                                            <li className="main-contents__numberList">React は DOM を Clock のレンダー出力と一致するように更新します。</li>
                                            <li className="main-contents__numberList">DOM が更新されると React は componentDidMount() を呼び出し、tick() メソッドが呼び出されます。</li>
                                            <li className="main-contents__numberList">setState() が呼び出されると、 React は state が更新されたことが分かるので再度 render() メソッドを呼び出します。</li>
                                            <li className="main-contents__numberList">React は DOM を更新します。</li>
                                            <li className="main-contents__numberList">この後に Clock コンポーネントが DOM から削除されることがあれば、React は componentWillUnmount() ライフサイクルメソッドを呼び出し、これによりタイマーが停止します。</li>
                                          </ol>
                                          <p className="main-contents__sentences">
                                            多くのコンポーネントを有するアプリケーションでは、コンポーネントが破棄された場合に
                                            占有していたリソースを開放することが重要です。
                                          </p>
                                      </div>
                                  </div>

                                  <div className="main-contents__subChapterBox">
                                      <h4 id="subTitle_4-3">{ titles.react.chapter4.sub3 }</h4>
                                      <div className="main-contents__indent">
                                          <p className="main-contents__sentences">
                                            <strong>state は constructor 以外直接変更してはいけない</strong>
                                          </p>
                                          <p className="main-contents__sentences">
                                            下記コードではコンポーネントは再レンダーされません
                                            代わりに setState() を使用して下さい。
                                          </p>
                                          <pre className="main-contents__codeBox">
                                              <code>
                                                  <p>
                                                    {this.stringComponent('// Wrong')}
                                                  </p>
                                                  <p>
                                                    this.state.comment
                                                    {this.operatorComponent(' = ')}
                                                    {this.stringComponent("'Hello'")}
                                                    {this.punctuationComponent(';')}
                                                  </p>
                                              </code>
                                          </pre>
                                          <p className="main-contents__sentences">
                                            <strong>state の更新は非同期に行われる可能性がある</strong>
                                          </p>
                                          <p className="main-contents__sentences">
                                            this.props と this.state は非同期に更新されるため、
                                            次の state を求める際に、それらの値に依存するべきではありません。
                                          </p>
                                          <p className="main-contents__sentences">
                                            例えば、以下のコードはカウンターの更新に失敗することがあります
                                          </p>
                                          <pre className="main-contents__codeBox">
                                              <code>
                                                  <p>
                                                    {this.stringComponent('// Wrong')}
                                                  </p>
                                                  <p>
                                                    {this.funcNameComponent('this.setState')}
                                                    {this.punctuationComponent('({')}
                                                  </p>
                                                  <div className="main-contents__codeBox__indent">
                                                    <p>
                                                      counter: this.state.counter
                                                      {this.operatorComponent(' + ')}
                                                      this.props.increment,
                                                    </p>
                                                  </div>
                                                  <p>
                                                    {this.punctuationComponent('});')}
                                                  </p>
                                              </code>
                                          </pre>
                                          <p className="main-contents__sentences">
                                            これを修正するために、オブジェクトではなく関数を受け取る setState() の 2 つ目の形を使用します。
                                            その関数は前の state を最初の引数として受け取り、更新が適用される時点での props を第 2 引数として受け取ります
                                          </p>
                                          <pre className="main-contents__codeBox">
                                              <code>
                                                  <p>
                                                    {this.stringComponent('// Correct')}
                                                  </p>
                                                  <p>
                                                    {this.funcNameComponent('this.setState')}
                                                    {this.punctuationComponent('((')}
                                                    state, props
                                                    {this.punctuationComponent(') => ({')}
                                                  </p>
                                                  <div className="main-contents__codeBox__indent">
                                                    <p>
                                                      counter: state.counter
                                                      {this.operatorComponent(' + ')}
                                                      props.increment
                                                    </p>
                                                  </div>
                                                  <p>
                                                    {this.punctuationComponent('}));')}
                                                  </p>
                                              </code>
                                          </pre>
                                          <p className="main-contents__sentences">
                                            上記のコードでは<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">アロー関数</a>
                                            を使いましたが、通常の関数でも動作します
                                          </p>
                                      </div>
                                  </div>

                              </div>

                              {/* --------   Chapter5   ----------------------------------------------------------------------------                    */}
                              <div className="main-contents__chapterBox">
                                  <h3 id="mainTitle5">{ titles.react.chapter5.main }</h3>

                                  <div className="main-contents__subChapterBox">
                                      <h4 id="subTitle_5-1">{ titles.react.chapter5.sub1 }</h4>
                                      <div className="main-contents__indent">
                                          <p className="main-contents__sentences">
                                            React でのイベント処理は DOM 要素のイベント処理にとても似ているので文法的違いを紹介します。
                                          </p>
                                          <p className="main-contents__sentences">
                                            <strong>React のイベントは小文字ではなく camelCase で名付けられています。</strong>
                                          </p>
                                          <pre className="main-contents__codeBox">
                                              <code>
                                                  <p>
                                                    {this.attributeElementComponent('button','onClick','{activateLasers}')}
                                                  </p>
                                                  <div className="main-contents__codeBox__indent">
                                                    <p>
                                                      Activate Lasers
                                                    </p>
                                                  </div>
                                                  <p>
                                                    {this.closeElementComponent('button')}
                                                  </p>
                                              </code>
                                          </pre>
                                          <p className="main-contents__sentences">
                                            <strong>React では false を返してもデフォルトの動作を抑止することができません。</strong>
                                          </p>
                                          <p className="main-contents__sentences">
                                            HTML では、「新しいページを開く」というリンクのデフォルト動作を抑止するために次のように書くことができます。
                                          </p>
                                          <pre className="main-contents__codeBox">
                                              <code>
                                                  <p>
                                                    {this.punctuationComponent('<')}
                                                    <span className="main-contents__codeBox__element">a</span>
                                                    <span className="main-contents__codeBox__attribute"> href</span>
                                                    {this.operatorComponent('=')}
                                                    "#"
                                                    <span className="main-contents__codeBox__attribute"> onclick</span>
                                                    {this.operatorComponent('=')}
                                                    "console.log('The link was clicked.'); return false"
                                                    {this.punctuationComponent('>')}
                                                  </p>
                                                  <div className="main-contents__codeBox__indent">
                                                    <p>
                                                      Click me
                                                    </p>
                                                  </div>
                                                  <p>
                                                    {this.closeElementComponent('a')}
                                                  </p>
                                              </code>
                                          </pre>
                                          <p className="main-contents__sentences">
                                            React では、preventDefault を呼び出す必要があります。
                                          </p>
                                          <pre className="main-contents__codeBox">
                                              <code>
                                                  <p>
                                                    {this.keywordComponent('function')}
                                                    {this.funcNameComponent('ActionLink')}
                                                    {this.punctuationComponent('() {')}
                                                  </p>
                                                  <div className="main-contents__codeBox__indent">
                                                    <p>
                                                      {this.keywordComponent('function')}
                                                      {this.funcNameComponent('handleClick')}
                                                      {this.punctuationComponent('(')}
                                                      e
                                                      {this.punctuationComponent(') {')}
                                                    </p>
                                                    <div className="main-contents__codeBox__indent">
                                                      <p>
                                                        e.
                                                        {this.funcNameComponent(('preventDefault'))}
                                                        {this.punctuationComponent('();')}
                                                      </p>
                                                      <p>
                                                        {this.funcNameComponent(('console.log'))}
                                                        {this.punctuationComponent('(')}
                                                        'The link was clicked.'
                                                        {this.punctuationComponent(');')}
                                                      </p>
                                                    </div>
                                                    <p>
                                                      {this.punctuationComponent('}')}
                                                    </p>
                                                    <br />

                                                    <p>
                                                      {this.keywordComponent('return')}
                                                      {this.punctuationComponent('(')}
                                                    </p>
                                                    <div className="main-contents__codeBox__indent">
                                                      <p>
                                                        {this.punctuationComponent('<')}
                                                        <span className="main-contents__codeBox__element">a</span>
                                                        <span className="main-contents__codeBox__attribute"> href</span>
                                                        {this.operatorComponent('=')}
                                                        "#"
                                                        <span className="main-contents__codeBox__attribute"> onclick</span>
                                                        {this.operatorComponent('=')}
                                                        {this.punctuationComponent('{')}
                                                        handleClick
                                                        {this.punctuationComponent('}')}
                                                        {this.punctuationComponent('>')}
                                                      </p>
                                                      <div className="main-contents__codeBox__indent">
                                                        <p>
                                                          Click me
                                                        </p>
                                                      </div>
                                                      <p>
                                                        {this.closeElementComponent('a')}
                                                      </p>
                                                    </div>
                                                    <p>
                                                      {this.punctuationComponent(');')}
                                                    </p>
                                                  </div>
                                                  <p>
                                                    {this.punctuationComponent('}')}
                                                  </p>
                                              </code>
                                          </pre>
                                          <p className="main-contents__sentences">
                                            イベントハンドラには SyntheticEvent のインスタンスが渡されています。
                                            これによりイベントハンドラは SyntheticEvent オブジェクトが持っている属性、ここでは preventDefault を使えています。
                                          </p>
                                          <p className="main-contents__sentences">
                                            ここで e はイベントの意味ですが e でなければならない訳ではなく、他の単語を置いたとしても動きます。
                                            ただ慣習的に他のエンジニアが見た時に十分伝わるので、特に理由がなければ e のまま使うといいでしょう。
                                          </p>
                                          <p className="main-contents__sentences">
                                            <strong>JSX ではイベントハンドラとして文字列ではなく関数を渡します。</strong>
                                          </p>
                                          <p className="main-contents__sentences">
                                            コンポーネントを ES6 のクラスを使用して定義した場合、一般的なパターンではイベントハンドラはクラスのメソッドになります
                                            例えば、以下の Toggle コンポーネントはユーザが “ON” 状態 “OFF” 状態を切り替えられるようなボタンをレンダーします。
                                          </p>
                                          <pre className="main-contents__codeBox">
                                              <code>
                                                  <p>
                                                    {this.keywordComponent('class')}
                                                    {this.funcNameComponent('Toggle')}
                                                    {this.keywordComponent(' extends')}
                                                    {this.keywordComponent('React.Component')}
                                                    {this.punctuationComponent('{')}
                                                  </p>
                                                  <div className="main-contents__codeBox__indent">
                                                    <p>
                                                      {this.keywordComponent('constructor')}
                                                      {this.punctuationComponent('(')}
                                                      props
                                                      {this.punctuationComponent(')')}
                                                      {this.punctuationComponent('{')}
                                                    </p>
                                                    <div className="main-contents__codeBox__indent">
                                                      <p>
                                                        {this.keywordComponent('super')}
                                                        {this.punctuationComponent('(')}
                                                        props
                                                        {this.punctuationComponent(')')}
                                                        {this.punctuationComponent(';')}
                                                      </p>
                                                      <p>
                                                        this.state
                                                        {this.operatorComponent('=')}
                                                        {this.punctuationComponent('{')}
                                                        isToggleOn:
                                                        {this.keywordComponent(' true')}
                                                        {this.punctuationComponent('};')}
                                                      </p>
                                                      <p>
                                                        this.handleClick
                                                        {this.operatorComponent(' = ')}
                                                        {this.funcNameComponent('this.handleClick.bind')}
                                                        {this.punctuationComponent('(')}
                                                        this
                                                        {this.punctuationComponent(');')}
                                                      </p>
                                                    </div>
                                                    <p>
                                                      {this.punctuationComponent('}')}
                                                    </p>
                                                    <br />
                                                    
                                                    <p>
                                                      {this.keywordComponent('handleClick')}
                                                      {this.punctuationComponent('()')}
                                                      {this.punctuationComponent('{')}
                                                    </p>
                                                    <div className="main-contents__codeBox__indent">
                                                      <p>
                                                        {this.funcNameComponent('this.setState')}
                                                        {this.punctuationComponent('(')}
                                                        state
                                                        {this.punctuationComponent(' => ({')}
                                                      </p>
                                                      <div className="main-contents__codeBox__indent">
                                                        <p>
                                                          isToggleOn: !state.isToggleOn
                                                        </p>
                                                      </div>
                                                      <p>
                                                        {this.punctuationComponent('}));')}
                                                      </p>
                                                    </div>
                                                    <p>
                                                      {this.punctuationComponent('}')}
                                                    </p>
                                                    <br />

                                                    <p>
                                                      {this.keywordComponent('render')}
                                                      {this.punctuationComponent('()')}
                                                      {this.punctuationComponent('{')}
                                                    </p>
                                                    <div className="main-contents__codeBox__indent">
                                                      <p>
                                                        {this.keywordComponent('return')}
                                                        {this.punctuationComponent('(')}
                                                      </p>
                                                      <div className="main-contents__codeBox__indent">
                                                        <p>
                                                          {this.attributeElementComponent('button','onClick','{this.handleClick}')}
                                                        </p>
                                                        <div className="main-contents__codeBox__indent">
                                                          <p>
                                                            {this.punctuationComponent('{')}
                                                            this.state.isToggleOn
                                                            {this.punctuationComponent(' ?')}
                                                            {this.stringComponent("'ON'")}
                                                            {this.punctuationComponent(':')}
                                                            {this.stringComponent("'OFF'")}
                                                            {this.punctuationComponent('}')}
                                                          </p>
                                                        </div>
                                                        <p>
                                                          {this.closeElementComponent('button')}
                                                        </p>
                                                      </div>
                                                      <p>
                                                        {this.punctuationComponent(');')}
                                                      </p>
                                                    </div>
                                                    <p>
                                                      {this.punctuationComponent('}')}
                                                    </p>
                                                  </div>
                                                  <p>
                                                    {this.punctuationComponent('}')}
                                                  </p>
                                                  <br />

                                                  <p>
                                                    ReactDOM
                                                    {this.punctuationComponent('.')}
                                                    {this.funcNameComponent('render')}
                                                    {this.punctuationComponent('(')}
                                                  </p>
                                                  <div className="main-contents__codeBox__indent">
                                                    <p>
                                                      {this.simpleComponent('Toggle')}
                                                      {this.punctuationComponent(',')}
                                                    </p>
                                                    <p>
                                                      document
                                                      {this.punctuationComponent('.')}
                                                      {this.funcNameComponent('getElementById')}
                                                      {this.punctuationComponent('(')}
                                                      {this.stringComponent('root')}
                                                      {this.punctuationComponent(')')}
                                                    </p>
                                                  </div>
                                                  <p className="main-contents__codeBox__interval">
                                                    {this.punctuationComponent(');')}
                                                  </p>
                                              </code>
                                          </pre>
                                          <p className="main-contents__sentences">
                                            JavaScript では、クラスのメソッドはデフォルトではバインドされません。this.handleClick へのバインドを忘れて 
                                            onClick に渡した場合、実際に関数が呼ばれた時に this は undefined となってしまいます。
                                          </p>
                                          <p className="main-contents__sentences">
                                            this.handleClick のように () を末尾に付けずに何らかのメソッドを参照する場合、
                                            そのメソッドはバインドしておく必要があります。
                                          </p>
                                          <p className="main-contents__sentences">
                                            バインドを嫌う場合はメソッドをアロー関数を利用して書くこともできます。
                                          </p>
                                          <pre className="main-contents__codeBox">
                                              <code>
                                                  <p>
                                                    {this.keywordComponent('class')}
                                                    {this.funcNameComponent('LoggingButton')}
                                                    {this.keywordComponent(' extends')}
                                                    {this.keywordComponent('React.Component')}
                                                    {this.punctuationComponent('{')}
                                                  </p>
                                                  <div className="main-contents__codeBox__indent">
                                                    <p>
                                                      handleClick
                                                      {this.operatorComponent(' = ')}
                                                      {this.punctuationComponent('() => {')}
                                                    </p>
                                                    <div className="main-contents__codeBox__indent">
                                                      <p>
                                                        {this.funcNameComponent('console.log')}
                                                        {this.punctuationComponent('(')}
                                                        'this is:', this
                                                        {this.punctuationComponent(');')}
                                                      </p>
                                                    </div>
                                                    <p>
                                                      {this.punctuationComponent('}')}
                                                    </p>
                                                    <br />

                                                    <p>
                                                      {this.keywordComponent('render')}
                                                      {this.punctuationComponent('()')}
                                                      {this.punctuationComponent('{')}
                                                    </p>
                                                    <div className="main-contents__codeBox__indent">
                                                      <p>
                                                        {this.keywordComponent('return')}
                                                        {this.punctuationComponent('(')}
                                                      </p>
                                                      <div className="main-contents__codeBox__indent">
                                                        <p>
                                                          {this.attributeElementComponent('button','onClick','{this.handleClick}')}
                                                        </p>
                                                        <div className="main-contents__codeBox__indent">
                                                          <p>
                                                            Click me
                                                          </p>
                                                        </div>
                                                        <p>
                                                          {this.closeElementComponent('button')}
                                                        </p>
                                                      </div>
                                                      <p>
                                                        {this.punctuationComponent(');')}
                                                      </p>
                                                    </div>
                                                    <p>
                                                      {this.punctuationComponent('}')}
                                                    </p>
                                                  </div>
                                                  <p>
                                                    {this.punctuationComponent('}')}
                                                  </p>
                                              </code>
                                          </pre>
                                      </div>
                                  </div>

                              </div>

                              {/* --------   Chapter6   ----------------------------------------------------------------------------                    */}
                              <div className="main-contents__chapterBox">
                                  <h3 id="mainTitle6">{ titles.react.chapter6.main }</h3>

                                  <div className="main-contents__subChapterBox">
                                    <h4 id="subTitle_6-1">{ titles.react.chapter6.sub1 }</h4>
                                      <div className="main-contents__indent">
                                          <p className="main-contents__sentences">
                                            React では配列を要素のリストに変換することができます。
                                          </p>
                                          <p className="main-contents__sentences">
                                            以下では、JavaScript の map() 関数を利用して、numbers という配列に反復処理を行っています。
                                            それぞれの整数に対して li 要素を返した後に、結果として得られる要素の配列を listItems に格納しています。
                                            listItems を ul 要素の内側に含め、それを DOM へレンダーします。
                                          </p>
                                          <p className="main-contents__sentences">
                                            このコードは、1 から 5 までの数字の箇条書きのリストを表示します。
                                          </p>
                                          <pre className="main-contents__codeBox">
                                              <code>
                                                  <p>
                                                    {this.keywordComponent('const')}
                                                    numbers
                                                    {this.punctuationComponent(' = [')}
                                                    1, 2, 3, 4, 5
                                                    {this.punctuationComponent('];')}
                                                  </p>
                                                  <p>
                                                    {this.keywordComponent('const')}
                                                    listItems
                                                    {this.operatorComponent(' = ')}
                                                    numbers.
                                                    {this.funcNameComponent('map')}
                                                    {this.punctuationComponent('((')}
                                                    number
                                                    {this.punctuationComponent(') =>')}
                                                  </p>
                                                  <div className="main-contents__codeBox__indent">
                                                    <p>
                                                      {this.elementComponent('li')}
                                                      {this.punctuationComponent('{')}
                                                      number
                                                      {this.punctuationComponent('}')}
                                                      {this.closeElementComponent('li')}
                                                    </p>
                                                  </div>
                                                  <p>
                                                    {this.punctuationComponent(');')}
                                                  </p>

                                                  <p>
                                                    ReactDOM
                                                    {this.punctuationComponent('.')}
                                                    {this.funcNameComponent('render')}
                                                    {this.punctuationComponent('(')}
                                                  </p>
                                                  <div className="main-contents__codeBox__indent">
                                                    <p>
                                                      {this.elementComponent('ul')}
                                                      {this.punctuationComponent('{')}
                                                      listItems
                                                      {this.punctuationComponent('}')}
                                                      {this.closeElementComponent('ul')}
                                                      {this.punctuationComponent(',')}
                                                    </p>
                                                    <p>
                                                      document
                                                      {this.punctuationComponent('.')}
                                                      {this.funcNameComponent('getElementById')}
                                                      {this.punctuationComponent('(')}
                                                      {this.stringComponent('root')}
                                                      {this.punctuationComponent(')')}
                                                    </p>
                                                  </div>
                                                  <p className="main-contents__codeBox__interval">
                                                    {this.punctuationComponent(');')}
                                                  </p>
                                              </code>
                                          </pre>
                                          <p className="main-contents__sentences">
                                            コンポーネントにするとこんな感じになります。
                                          </p>
                                          <pre className="main-contents__codeBox">
                                              <code>
                                                  <p>
                                                    {this.keywordComponent('function')}
                                                    {this.funcNameComponent('NumberList')}
                                                    {this.punctuationComponent('(')}
                                                    props
                                                    {this.punctuationComponent(')')}
                                                    {this.punctuationComponent('{')}
                                                  </p>
                                                  <div className="main-contents__codeBox__indent">
                                                    <p>
                                                      {this.keywordComponent('const')}
                                                      numbers
                                                      {this.operatorComponent(' = ')}
                                                      props.numbers
                                                      {this.punctuationComponent(';')}
                                                    </p>
                                                    <p>
                                                      {this.keywordComponent('const')}
                                                      listItems
                                                      {this.operatorComponent(' = ')}
                                                      numbers.
                                                      {this.funcNameComponent('map')}
                                                      {this.punctuationComponent('((')}
                                                      number
                                                      {this.punctuationComponent(') =>')}
                                                    </p>
                                                    <div className="main-contents__codeBox__indent">
                                                      <p>
                                                        {this.elementComponent('li')}
                                                        {this.punctuationComponent('{')}
                                                        number
                                                        {this.punctuationComponent('}')}
                                                        {this.closeElementComponent('li')}
                                                      </p>
                                                    </div>
                                                    <p>
                                                      {this.punctuationComponent(');')}
                                                    </p>

                                                    <p>
                                                      {this.keywordComponent('return')}
                                                      {this.punctuationComponent('(')}
                                                    </p>
                                                    <div className="main-contents__codeBox__indent">
                                                      <p>
                                                        {this.elementComponent('ul')}
                                                        {this.punctuationComponent('{')}
                                                        listItems
                                                        {this.punctuationComponent('}')}
                                                        {this.closeElementComponent('ul')}
                                                      </p>
                                                    </div>
                                                    <p>
                                                      {this.punctuationComponent(');')}
                                                    </p>
                                                  </div>
                                                  <p>
                                                    {this.punctuationComponent('}')}
                                                  </p>
                                                  <br />

                                                  <p>
                                                    {this.keywordComponent('const')}
                                                    numbers
                                                    {this.punctuationComponent(' = [')}
                                                    1, 2, 3, 4, 5
                                                    {this.punctuationComponent('];')}
                                                  </p>
                                                  
                                                  <p>
                                                    ReactDOM
                                                    {this.punctuationComponent('.')}
                                                    {this.funcNameComponent('render')}
                                                    {this.punctuationComponent('(')}
                                                  </p>
                                                  <div className="main-contents__codeBox__indent">
                                                    <p>
                                                      {this.punctuationComponent('<')}
                                                      <span className="main-contents__codeBox__element">NumberList</span>
                                                      <span className="main-contents__codeBox__attribute"> numbers</span>
                                                      {this.operatorComponent('=')}
                                                      {this.punctuationComponent('{')}
                                                      numbers
                                                      {this.punctuationComponent('} />,')}
                                                    </p>
                                                    <p>
                                                      document
                                                      {this.punctuationComponent('.')}
                                                      {this.funcNameComponent('getElementById')}
                                                      {this.punctuationComponent('(')}
                                                      {this.stringComponent("'root'")}
                                                      {this.punctuationComponent(')')}
                                                    </p>
                                                  </div>
                                                  <p className="main-contents__codeBox__interval">
                                                    {this.punctuationComponent(');')}
                                                  </p>
                                              </code>
                                          </pre>
                                          <p className="main-contents__sentences">
                                            このコードを実行すると、「リスト項目には key を与えるべきだ」という警告が出ます。
                                            “key” とは特別な文字列の属性であり、要素のリストを作成する際に含めておく必要があるものです。
                                            なぜ key が重要なのか、次の節で説明します。
                                            ここでは警告を修正します。
                                          </p>
                                          <pre className="main-contents__codeBox">
                                              <code>
                                                  <p>
                                                    {this.attributeElementComponent('li','key','{number.toString()}')}
                                                  </p>
                                                  <div className="main-contents__codeBox__indent">
                                                    <p>
                                                      {this.punctuationComponent('{')}
                                                      number
                                                      {this.punctuationComponent('}')}
                                                    </p>
                                                  </div>
                                                  <p>
                                                    {this.elementComponent('li')}
                                                  </p>
                                              </code>
                                          </pre>
                                      </div>
                                  </div>

                                  <div className="main-contents__subChapterBox">
                                      <h4 id="subTitle_6-2">{ titles.react.chapter6.sub2 }</h4>
                                      <div className="main-contents__indent">
                                          <p className="main-contents__sentences">
                                            Key は、どの要素が変更、追加もしくは削除されたのかを React が識別するのに役立ちます。
                                            配列内の項目に安定した識別性を与えるため、それぞれの項目に key を与えるべきです。
                                          </p>
                                          <pre className="main-contents__codeBox">
                                              <code>
                                                  <p>
                                                    {this.keywordComponent('const')}
                                                    numbers
                                                    {this.punctuationComponent(' = [')}
                                                    1, 2, 3, 4, 5
                                                    {this.punctuationComponent('];')}
                                                  </p>
                                                  <p>
                                                    {this.keywordComponent('const')}
                                                    listItems
                                                    {this.punctuationComponent(' = ')}
                                                    numbers.
                                                    {this.funcNameComponent('map')}
                                                    {this.punctuationComponent('((')}
                                                    number
                                                    {this.punctuationComponent(') =>')}
                                                  </p>
                                                  <div className="main-contents__codeBox__indent">
                                                    <p>
                                                      {this.attributeElementComponent('li','key','{number.toString()}')}
                                                    </p>
                                                    <p>
                                                      {this.punctuationComponent('{')}
                                                      number
                                                      {this.punctuationComponent('}')}
                                                    </p>
                                                    <p>
                                                      {this.closeElementComponent('li')}
                                                    </p>
                                                  </div>
                                                  <p>
                                                    {this.punctuationComponent(');')}
                                                  </p>
                                              </code>
                                          </pre>
                                          <p className="main-contents__sentences">
                                            最良の方法は兄弟間でその項目を一意に特定できるような文字列を key として選ぶことです。
                                            多くの場合、あなたのデータ内にある ID を key として使うことになるでしょう
                                          </p>
                                          <pre className="main-contents__codeBox">
                                              <code>
                                                  <p>
                                                    {this.keywordComponent('const')}
                                                    todoItems
                                                    {this.punctuationComponent(' = ')}
                                                    todos.
                                                    {this.funcNameComponent('map')}
                                                    {this.punctuationComponent('((')}
                                                    todo
                                                    {this.punctuationComponent(') =>')}
                                                  </p>
                                                  <div className="main-contents__codeBox__indent">
                                                    <p>
                                                      {this.attributeElementComponent('li','key','{todo.id}')}
                                                    </p>
                                                    <div className="main-contents__codeBox__indent">
                                                      <p>
                                                        {this.punctuationComponent('{')}
                                                        todo.text
                                                        {this.punctuationComponent('}')}
                                                      </p>
                                                    </div>
                                                    <p>
                                                      {this.closeElementComponent('li')}
                                                    </p>
                                                  </div>
                                                  <p>
                                                    {this.punctuationComponent(');')}
                                                  </p>
                                              </code>
                                          </pre>
                                          <p className="main-contents__sentences">
                                            <strong>key のあるコンポーネントの抽出</strong>
                                          </p>
                                          <p className="main-contents__sentences">
                                            key が意味を持つのは、それをとり囲んでいる配列の側の文脈です。
                                          </p>
                                          <p className="main-contents__sentences">
                                            例えば、ListItem コンポーネントを抽出する際には、key は ListItem 自体の
                                            li 要素に書くのではなく、配列内の ListItem に残しておくべきです。
                                          </p>
                                          <p className="main-contents__sentences">
                                            例： 不適切な key の使用法
                                          </p>
                                          <pre className="main-contents__codeBox">
                                              <code>
                                                  <p>
                                                    {this.keywordComponent('function')}
                                                    {this.funcNameComponent('ListItem')}
                                                    {this.punctuationComponent('(')}
                                                    props
                                                    {this.punctuationComponent(')')}
                                                    {this.punctuationComponent('{')}
                                                  </p>
                                                  <div className="main-contents__codeBox__indent">
                                                    <p>
                                                      {this.keywordComponent('const')}
                                                      value
                                                      {this.operatorComponent(' = ')}
                                                      props.value
                                                      {this.punctuationComponent(';')}
                                                    </p>
                                                    <div className="main-contents__codeBox__indent">
                                                      <p>
                                                        {this.keywordComponent('return')}
                                                        {this.punctuationComponent('(')}
                                                      </p>
                                                      <div className="main-contents__codeBox__indent">
                                                        <p>
                                                          {this.stringComponent('// Wrong! There is no need to specify the key here:')}
                                                        </p>
                                                        <p>
                                                          {this.attributeElementComponent('li','key','{value.toString()}')}
                                                        </p>
                                                        <div className="main-contents__codeBox__indent">
                                                          <p>
                                                            {this.punctuationComponent('{')}
                                                            value
                                                            {this.punctuationComponent('}')}
                                                          </p>
                                                        </div>
                                                        <p>
                                                          {this.closeElementComponent('li')}
                                                        </p>
                                                      </div>
                                                      <p>
                                                        {this.punctuationComponent(');')}
                                                      </p>
                                                    </div>
                                                    <p>
                                                      {this.punctuationComponent('}')}
                                                    </p>
                                                  </div>
                                                  
                                                  <p>
                                                    {this.keywordComponent('function')}
                                                    {this.funcNameComponent('NumberList')}
                                                    {this.punctuationComponent('(')}
                                                    props
                                                    {this.punctuationComponent(')')}
                                                    {this.punctuationComponent('{')}
                                                  </p>
                                                  <div className="main-contents__codeBox__indent">
                                                    <p>
                                                      {this.keywordComponent('const')}
                                                      numbers
                                                      {this.operatorComponent(' = ')}
                                                      props.numbers
                                                      {this.punctuationComponent(';')}
                                                    </p>
                                                    <p>
                                                      {this.keywordComponent('const')}
                                                      listItems
                                                      {this.operatorComponent(' = ')}
                                                      numbers.
                                                      {this.funcNameComponent('map')}
                                                      {this.punctuationComponent('((')}
                                                      number
                                                      {this.punctuationComponent(') =>')}
                                                    </p>
                                                    <div className="main-contents__codeBox__indent">
                                                      <p>
                                                        {this.stringComponent('// Wrong! The key should have been specified here:')}
                                                      </p>
                                                      <p>
                                                        {this.punctuationComponent('<')}
                                                        {this.stringComponent('ListItem ')}
                                                        value
                                                        {this.operatorComponent('=')}
                                                        {this.punctuationComponent('{')}
                                                        number
                                                        {this.punctuationComponent('} />')}
                                                      </p>
                                                    </div>
                                                    <p>
                                                      {this.punctuationComponent(');')}
                                                    </p>

                                                    <p>
                                                      {this.keywordComponent('return')}
                                                      {this.punctuationComponent('(')}
                                                    </p>
                                                    <div className="main-contents__codeBox__indent">
                                                      <p>
                                                        {this.elementComponent('ul')}
                                                      </p>
                                                      <p>
                                                        {this.punctuationComponent('{')}
                                                        listItems
                                                        {this.punctuationComponent('}')}
                                                      </p>
                                                      <p>
                                                        {this.closeElementComponent('ul')}
                                                      </p>
                                                    </div>
                                                    <p>
                                                      {this.punctuationComponent(');')}
                                                    </p>
                                                  </div>
                                                  <p>
                                                    {this.punctuationComponent('}')}
                                                  </p>
                                                  <br />

                                                  <p>
                                                    {this.keywordComponent('const')}
                                                    numbers
                                                    {this.punctuationComponent(' = [')}
                                                    1, 2, 3, 4, 5
                                                    {this.punctuationComponent('];')}
                                                  </p>
                                                  
                                                  <p>
                                                    ReactDOM
                                                    {this.punctuationComponent('.')}
                                                    {this.funcNameComponent('render')}
                                                    {this.punctuationComponent('(')}
                                                  </p>
                                                  <div className="main-contents__codeBox__indent">
                                                    <p>
                                                      {this.punctuationComponent('<')}
                                                      <span className="main-contents__codeBox__element">NumberList</span>
                                                      <span className="main-contents__codeBox__attribute"> numbers</span>
                                                      {this.operatorComponent('=')}
                                                      {this.punctuationComponent('{')}
                                                      numbers
                                                      {this.punctuationComponent('} />,')}
                                                    </p>
                                                    <p>
                                                      document
                                                      {this.punctuationComponent('.')}
                                                      {this.funcNameComponent('getElementById')}
                                                      {this.punctuationComponent('(')}
                                                      {this.stringComponent("'root'")}
                                                      {this.punctuationComponent(')')}
                                                    </p>
                                                  </div>
                                                  <p className="main-contents__codeBox__interval">
                                                    {this.punctuationComponent(');')}
                                                  </p>
                                              </code>
                                          </pre>
                                          <p className="main-contents__sentences">
                                            例： 正しい key の使用法
                                          </p>
                                          <pre className="main-contents__codeBox">
                                              <code>
                                                  <p>
                                                    {this.keywordComponent('function')}
                                                    {this.funcNameComponent('ListItem')}
                                                    {this.punctuationComponent('(')}
                                                    props
                                                    {this.punctuationComponent(')')}
                                                    {this.punctuationComponent('{')}
                                                  </p>
                                                  <div className="main-contents__codeBox__indent">
                                                      <p>
                                                        {this.keywordComponent('return')}
                                                        {this.elementComponent('li')}
                                                        {this.punctuationComponent('{')}
                                                        props.value
                                                        {this.punctuationComponent('}')}
                                                        {this.closeElementComponent('li')}
                                                        {this.punctuationComponent(';')}
                                                      </p>
                                                  </div>
                                                  <p>
                                                    {this.punctuationComponent('}')}
                                                  </p>
                                                  
                                                  <p>
                                                    {this.keywordComponent('function')}
                                                    {this.funcNameComponent('NumberList')}
                                                    {this.punctuationComponent('(')}
                                                    props
                                                    {this.punctuationComponent(')')}
                                                    {this.punctuationComponent('{')}
                                                  </p>
                                                  <div className="main-contents__codeBox__indent">
                                                    <p>
                                                      {this.keywordComponent('const')}
                                                      numbers
                                                      {this.operatorComponent(' = ')}
                                                      props.numbers
                                                      {this.punctuationComponent(';')}
                                                    </p>
                                                    <p>
                                                      {this.keywordComponent('const')}
                                                      listItems
                                                      {this.operatorComponent(' = ')}
                                                      numbers.
                                                      {this.funcNameComponent('map')}
                                                      {this.punctuationComponent('((')}
                                                      number
                                                      {this.punctuationComponent(') =>')}
                                                    </p>
                                                    <div className="main-contents__codeBox__indent">
                                                      <p>
                                                        {this.punctuationComponent('<')}
                                                        {this.stringComponent('ListItem ')}
                                                        key
                                                        {this.operatorComponent('=')}
                                                        {this.punctuationComponent('{')}
                                                        number.toString
                                                        {this.punctuationComponent('()} ')}
                                                        value
                                                        {this.operatorComponent('=')}
                                                        {this.punctuationComponent('{')}
                                                        number
                                                        {this.punctuationComponent('} />')}
                                                      </p>
                                                    </div>
                                                    <p>
                                                      {this.punctuationComponent(');')}
                                                    </p>
                                                    <p>
                                                      {this.keywordComponent('return')}
                                                      {this.punctuationComponent('(')}
                                                    </p>
                                                    <div className="main-contents__codeBox__indent">
                                                      <p>
                                                        {this.elementComponent('ul')}
                                                      </p>
                                                      <div className="main-contents__codeBox__indent">
                                                        <p>
                                                          {this.punctuationComponent('{')}
                                                          listItems
                                                          {this.punctuationComponent('}')}
                                                        </p>
                                                      </div>
                                                      <p>
                                                        {this.closeElementComponent('ul')}
                                                      </p>
                                                    </div>
                                                    <p>
                                                      {this.punctuationComponent(');')}
                                                    </p>
                                                  </div>
                                                  <p>
                                                    {this.punctuationComponent('}')}
                                                  </p>
                                                  <br />

                                                  <p>
                                                    {this.keywordComponent('const')}
                                                    numbers
                                                    {this.punctuationComponent(' = [')}
                                                    1, 2, 3, 4, 5
                                                    {this.punctuationComponent('];')}
                                                  </p>
                                                  
                                                  <p>
                                                    ReactDOM
                                                    {this.punctuationComponent('.')}
                                                    {this.funcNameComponent('render')}
                                                    {this.punctuationComponent('(')}
                                                  </p>
                                                  <div className="main-contents__codeBox__indent">
                                                    <p>
                                                      {this.punctuationComponent('<')}
                                                      <span className="main-contents__codeBox__element">NumberList</span>
                                                      <span className="main-contents__codeBox__attribute"> numbers</span>
                                                      {this.operatorComponent('=')}
                                                      {this.punctuationComponent('{')}
                                                      numbers
                                                      {this.punctuationComponent('} />,')}
                                                    </p>
                                                    <p>
                                                      document
                                                      {this.punctuationComponent('.')}
                                                      {this.funcNameComponent('getElementById')}
                                                      {this.punctuationComponent('(')}
                                                      {this.stringComponent("'root'")}
                                                      {this.punctuationComponent(')')}
                                                    </p>
                                                  </div>
                                                  <p className="main-contents__codeBox__interval">
                                                    {this.punctuationComponent(');')}
                                                  </p>
                                              </code>
                                          </pre>
                                          <p className="main-contents__sentences">
                                            基本ルールとしては、map() 呼び出しの中に現れる要素に key が必要です。
                                          </p>
                                          <p className="main-contents__sentences">
                                            <strong>key は兄弟要素の中で一意であればよい</strong>
                                          </p>
                                          <p className="main-contents__sentences">
                                            配列内で使われる key はその兄弟要素の中で一意である必要があります。
                                            しかし全体でユニークである必要はありません。2 つの異なる配列を作る場合は、同一の key が使われても構いません
                                          </p>
                                          <p className="main-contents__sentences">
                                            key は React へのヒントとして使われますが、コンポーネントには渡されません。
                                            同じ値をコンポーネントの中でも必要としている場合は、別の名前の prop として明示的に渡してください
                                          </p>
                                          <pre className="main-contents__codeBox">
                                              <code>
                                                  <p>
                                                    {this.keywordComponent('const')}
                                                    content
                                                    {this.operatorComponent(' = ')}
                                                    post.
                                                    {this.funcNameComponent('map')}
                                                    {this.punctuationComponent('((')}
                                                    post
                                                    {this.punctuationComponent(') =>')}
                                                  </p>
                                                  <p>
                                                    {this.punctuationComponent('<')}
                                                    {this.stringComponent('Post')}
                                                  </p>
                                                  <div className="main-contents__codeBox__indent">
                                                    <p>
                                                      <span className="main-contents__codeBox__attribute"> key</span>
                                                      {this.operatorComponent('=')}
                                                      {this.punctuationComponent('{')}
                                                      post.id
                                                      {this.punctuationComponent('}')}
                                                    </p>
                                                    <p>
                                                      <span className="main-contents__codeBox__attribute"> id</span>
                                                      {this.operatorComponent('=')}
                                                      {this.punctuationComponent('{')}
                                                      post.id
                                                      {this.punctuationComponent('}')}
                                                    </p>
                                                    <p>
                                                      <span className="main-contents__codeBox__attribute"> title</span>
                                                      {this.operatorComponent('=')}
                                                      {this.punctuationComponent('{')}
                                                      post.title
                                                      {this.punctuationComponent('} />')}
                                                    </p>
                                                  </div>
                                                  <p>
                                                    {this.punctuationComponent(');')}
                                                  </p>
                                              </code>
                                          </pre>
                                          <p className="main-contents__sentences">
                                            上記の例では、Post コンポーネントは props.id を読み取ることができますが、props.key は読み取れません。
                                          </p>
                                      </div>
                                  </div>

                              </div>

                              {/* --------   Chapter7   ----------------------------------------------------------------------------                    */}
                              <div className="main-contents__chapterBox">
                                  <h3 id="mainTitle7">{ titles.react.chapter7.main }</h3>

                                  <div className="main-contents__subChapterBox">
                                      <h4 id="subTitle_7-1">{ titles.react.chapter7.sub1 }</h4>
                                      <div className="main-contents__indent">
                                          <p className="main-contents__sentences">
                                            HTML では input、textarea、そして select のようなフォーム要素は通常、自身で状態を保持しており、ユーザの入力に基づいてそれを更新します。
                                            React では、変更されうる状態はコンポーネントの state プロパティに保持され、setState() 関数でのみ更新されます。
                                          </p>
                                          <pre className="main-contents__codeBox">
                                              <code>
                                                  <p>
                                                    {this.keywordComponent('class')}
                                                    {this.funcNameComponent('App')}
                                                    {this.keywordComponent(' extends')}
                                                    {this.keywordComponent('React.Component')}
                                                    {this.punctuationComponent('{')}
                                                  </p>
                                                  <div className="main-contents__codeBox__indent">
                                                    <p>
                                                      {this.keywordComponent('constructor')}
                                                      {this.punctuationComponent('(')}
                                                      props
                                                      {this.punctuationComponent(')')}
                                                      {this.punctuationComponent('{')}
                                                    </p>
                                                    <div className="main-contents__codeBox__indent">
                                                      <p>
                                                        {this.keywordComponent('super')}
                                                        {this.punctuationComponent('(')}
                                                        props
                                                        {this.punctuationComponent(')')}
                                                        {this.punctuationComponent(';')}
                                                      </p>
                                                      <p>
                                                        this.state
                                                        {this.operatorComponent('=')}
                                                        {this.punctuationComponent('{')}
                                                      </p>
                                                      <div className="main-contents__codeBox__indent">
                                                        <p>
                                                          name:
                                                          {this.keywordComponent(" ''")},
                                                        </p>
                                                        <p>
                                                          flavor:
                                                          {this.keywordComponent(" 'coconut'")},
                                                        </p>
                                                        <p>
                                                          essay:
                                                          {this.keywordComponent(" 'Please write an essay about your favorite DOM element.'")},
                                                        </p>
                                                      </div>
                                                      <p>
                                                        {this.punctuationComponent('};')}
                                                      </p>
                                                      <br />

                                                      <p>
                                                        this.handleChangeName
                                                        {this.operatorComponent(' = ')}
                                                        {this.funcNameComponent('this.handleChangeName.bind')}
                                                        {this.punctuationComponent('(')}
                                                        this
                                                        {this.punctuationComponent(');')}
                                                      </p>
                                                      <p>
                                                        this.handleChangeFlavor
                                                        {this.operatorComponent(' = ')}
                                                        {this.funcNameComponent('this.handleChangeFlavor.bind')}
                                                        {this.punctuationComponent('(')}
                                                        this
                                                        {this.punctuationComponent(');')}
                                                      </p>
                                                      <p>
                                                        this.handleChangeEssay
                                                        {this.operatorComponent(' = ')}
                                                        {this.funcNameComponent('this.handleChangeEssay.bind')}
                                                        {this.punctuationComponent('(')}
                                                        this
                                                        {this.punctuationComponent(');')}
                                                      </p>
                                                      <p>
                                                        this.handleChangeSubmit
                                                        {this.operatorComponent(' = ')}
                                                        {this.funcNameComponent('this.handleChangeSubmit.bind')}
                                                        {this.punctuationComponent('(')}
                                                        this
                                                        {this.punctuationComponent(');')}
                                                      </p>
                                                    </div>
                                                    <p>
                                                      {this.punctuationComponent('}')}
                                                    </p>
                                                    <br />
                                                    
                                                    <p>
                                                      {this.keywordComponent('handleChangeName')}
                                                      {this.punctuationComponent('(')}
                                                      event
                                                      {this.punctuationComponent(') {')}
                                                    </p>
                                                    <div className="main-contents__codeBox__indent">
                                                      <p>
                                                       {this.funcNameComponent('this.setState')}
                                                        {this.punctuationComponent('({')}
                                                        name: event.target.value
                                                        {this.punctuationComponent('});')}
                                                      </p>
                                                    </div>
                                                    <p>
                                                      {this.punctuationComponent('}')}
                                                    </p>
                                                    <br />

                                                    <p>
                                                      {this.keywordComponent('handleChangeFlavor')}
                                                      {this.punctuationComponent('(')}
                                                      event
                                                      {this.punctuationComponent(') {')}
                                                    </p>
                                                    <div className="main-contents__codeBox__indent">
                                                      <p>
                                                        {this.funcNameComponent('this.setState')}
                                                        {this.punctuationComponent('({')}
                                                        flavor: event.target.value
                                                        {this.punctuationComponent('});')}
                                                      </p>
                                                    </div>
                                                    <p>
                                                      {this.punctuationComponent('}')}
                                                    </p>
                                                    <br />

                                                    <p>
                                                      {this.keywordComponent('handleChangeEssay')}
                                                      {this.punctuationComponent('(')}
                                                      event
                                                      {this.punctuationComponent(') {')}
                                                    </p>
                                                    <div className="main-contents__codeBox__indent">
                                                      <p>
                                                        {this.funcNameComponent('this.setState')}
                                                        {this.punctuationComponent('({')}
                                                        essay: event.target.value
                                                        {this.punctuationComponent('});')}
                                                      </p>
                                                    </div>
                                                    <p>
                                                      {this.punctuationComponent('}')}
                                                    </p>
                                                    <br />

                                                    <p>
                                                      {this.keywordComponent('handleSubmit')}
                                                      {this.punctuationComponent('(')}
                                                      event
                                                      {this.punctuationComponent(') {')}
                                                    </p>
                                                    <div className="main-contents__codeBox__indent">
                                                      <p>
                                                        {this.funcNameComponent('alert')}
                                                        {this.punctuationComponent('(')}
                                                        'A name was submitted: ' + this.state.name
                                                        {this.punctuationComponent(');')}
                                                      </p>
                                                      <p>
                                                        {this.funcNameComponent('alert')}
                                                        {this.punctuationComponent('(')}
                                                        'Your favorite flavor is: ' + this.state.flavor
                                                        {this.punctuationComponent(');')}
                                                      </p>
                                                      <p>
                                                        {this.funcNameComponent('alert')}
                                                        {this.punctuationComponent('(')}
                                                        'An essay was submitted: ' + this.state.essay
                                                        {this.punctuationComponent(');')}
                                                      </p>
                                                      <p>
                                                        event.
                                                        {this.funcNameComponent('preventDefault')}
                                                        {this.punctuationComponent('();')}
                                                      </p>
                                                    </div>
                                                    <p>
                                                      {this.punctuationComponent('}')}
                                                    </p>
                                                    <br />

                                                    <p>
                                                      {this.keywordComponent('render')}
                                                      {this.punctuationComponent('()')}
                                                      {this.punctuationComponent('{')}
                                                    </p>
                                                    <div className="main-contents__codeBox__indent">
                                                      <p>
                                                        {this.keywordComponent('return')}
                                                        {this.punctuationComponent('(')}
                                                      </p>
                                                      <div className="main-contents__codeBox__indent">
                                                        <p>
                                                          {this.attributeElementComponent('form','onSubmit','{this.handleSubmit}')}
                                                        </p>
                                                        <div className="main-contents__codeBox__indent">
                                                          <p>
                                                            {this.elementComponent('label')}
                                                          </p>
                                                          <div className="main-contents__codeBox__indent">
                                                            <p>
                                                              Name:
                                                            </p>
                                                            <p>
                                                              {this.punctuationComponent('<')}
                                                              {this.stringComponent('input')}

                                                              <span className="main-contents__codeBox__attribute"> type</span>
                                                              {this.operatorComponent('=')}
                                                              "text"

                                                              <span className="main-contents__codeBox__attribute"> value</span>
                                                              {this.operatorComponent('=')}
                                                              {this.punctuationComponent('{')}
                                                              this.state.name
                                                              {this.punctuationComponent('}')}

                                                              <span className="main-contents__codeBox__attribute"> onChange</span>
                                                              {this.operatorComponent('=')}
                                                              {this.punctuationComponent('{')}
                                                              this.handleChangeName
                                                              {this.punctuationComponent('} />')}
                                                            </p>
                                                          </div>
                                                          <p>
                                                            {this.closeElementComponent('label')}
                                                          </p>

                                                          <p>
                                                            {this.elementComponent('label')}
                                                          </p>
                                                          <div className="main-contents__codeBox__indent">
                                                            <p>
                                                              Pick your favorite flavor:
                                                            </p>
                                                            <p>
                                                              {this.punctuationComponent('<')}
                                                              {this.stringComponent('select')}

                                                              <span className="main-contents__codeBox__attribute"> value</span>
                                                              {this.operatorComponent('=')}
                                                              {this.punctuationComponent('{')}
                                                              this.state.flavor
                                                              {this.punctuationComponent('}')}

                                                              <span className="main-contents__codeBox__attribute"> onChange</span>
                                                              {this.operatorComponent('=')}
                                                              {this.punctuationComponent('{')}
                                                              this.handleChangeFlavor
                                                              {this.punctuationComponent('} >')}
                                                            </p>
                                                            <div className="main-contents__codeBox__indent">
                                                              <p>
                                                                {this.attributeElementComponent('option','value','"grapefruit"')}
                                                                Grapefruit
                                                                {this.closeElementComponent('option')}
                                                              </p>
                                                              <p>
                                                                {this.attributeElementComponent('option','value','"lime"')}
                                                                Lime
                                                                {this.closeElementComponent('option')}
                                                              </p>
                                                              <p>
                                                                {this.attributeElementComponent('option','value','"coconut"')}
                                                                Coconut
                                                                {this.closeElementComponent('option')}
                                                              </p>
                                                              <p>
                                                                {this.attributeElementComponent('option','value','"mango"')}
                                                                Mango
                                                                {this.closeElementComponent('option')}
                                                              </p>
                                                            </div>
                                                            <p>
                                                              {this.closeElementComponent('select')}
                                                            </p>
                                                          </div>
                                                          <p>
                                                            {this.closeElementComponent('label')}
                                                          </p>

                                                          <p>
                                                            {this.elementComponent('label')}
                                                          </p>
                                                          <div className="main-contents__codeBox__indent">
                                                            <p>
                                                              Essay:
                                                            </p>
                                                            <p>
                                                              {this.punctuationComponent('<')}
                                                              {this.stringComponent('textarea')}

                                                              <span className="main-contents__codeBox__attribute"> value</span>
                                                              {this.operatorComponent('=')}
                                                              {this.punctuationComponent('{')}
                                                              this.state.essay
                                                              {this.punctuationComponent('}')}

                                                              <span className="main-contents__codeBox__attribute"> onChange</span>
                                                              {this.operatorComponent('=')}
                                                              {this.punctuationComponent('{')}
                                                              this.handleChangeEssay
                                                              {this.punctuationComponent('} />')}
                                                            </p>
                                                          </div>
                                                          <p>
                                                            {this.closeElementComponent('label')}
                                                          </p>
                                                          <p>
                                                            {this.punctuationComponent('<')}
                                                            {this.stringComponent('input')}

                                                            <span className="main-contents__codeBox__attribute"> type</span>
                                                            {this.operatorComponent('=')}
                                                            "submit"

                                                            <span className="main-contents__codeBox__attribute"> value</span>
                                                            {this.operatorComponent('=')}
                                                            "Submit"
                                                            {this.punctuationComponent(' />')}
                                                          </p>
                                                        </div>
                                                        <p>
                                                          {this.closeElementComponent('form')}
                                                        </p>
                                                      </div>
                                                      <p>
                                                        {this.punctuationComponent(');')}
                                                      </p>
                                                    </div>
                                                    <p>
                                                      {this.punctuationComponent('}')}
                                                    </p>
                                                    <p>
                                                      {this.punctuationComponent('}')}
                                                    </p>
                                                    <p>
                                                      {this.punctuationComponent(') {')}
                                                    </p>
                                                    <div className="main-contents__codeBox__indent">
                                                      <p>
                                                        {this.funcNameComponent('this.setState')}
                                                        {this.punctuationComponent('({')}
                                                        name: event.target.value
                                                        {this.punctuationComponent('});')}
                                                      </p>
                                                    </div>
                                                    <p>
                                                      {this.punctuationComponent('}')}
                                                    </p>
                                                    <br />

                                                    <p>
                                                      {this.keywordComponent('handleChangeFlavor')}
                                                      {this.punctuationComponent('(')}
                                                      event
                                                      {this.punctuationComponent(') {')}
                                                    </p>
                                                    <div className="main-contents__codeBox__indent">
                                                      <p>
                                                        {this.funcNameComponent('this.setState')}
                                                        {this.punctuationComponent('({')}
                                                        flavor: event.target.value
                                                        {this.punctuationComponent('});')}
                                                      </p>
                                                    </div>
                                                    <p>
                                                      {this.punctuationComponent('}')}
                                                    </p>
                                                    <br />

                                                    <p>
                                                      {this.keywordComponent('handleChangeEssay')}
                                                      {this.punctuationComponent('(')}
                                                      event
                                                      {this.punctuationComponent(') {')}
                                                    </p>
                                                    <div className="main-contents__codeBox__indent">
                                                      <p>
                                                        {this.funcNameComponent('this.setState')}
                                                        {this.punctuationComponent('({')}
                                                        essay: event.target.value
                                                        {this.punctuationComponent('});')}
                                                      </p>
                                                    </div>
                                                    <p>
                                                      {this.punctuationComponent('}')}
                                                    </p>
                                                    <br />

                                                    <p>
                                                      {this.keywordComponent('handleSubmit')}
                                                      {this.punctuationComponent('(')}
                                                      event
                                                      {this.punctuationComponent(') {')}
                                                    </p>
                                                    <div className="main-contents__codeBox__indent">
                                                      <p>
                                                        {this.funcNameComponent('alert')}
                                                        {this.punctuationComponent('(')}
                                                        'A name was submitted: ' + this.state.name
                                                        {this.punctuationComponent(');')}
                                                      </p>
                                                      <p>
                                                        {this.funcNameComponent('alert')}
                                                        {this.punctuationComponent('(')}
                                                        'Your favorite flavor is: ' + this.state.flavor
                                                        {this.punctuationComponent(');')}
                                                      </p>
                                                      <p>
                                                        {this.funcNameComponent('alert')}
                                                        {this.punctuationComponent('(')}
                                                        'An essay was submitted: ' + this.state.essay
                                                        {this.punctuationComponent(');')}
                                                      </p>
                                                      <p>
                                                        event.
                                                        {this.funcNameComponent('preventDefault')}
                                                        {this.punctuationComponent('();')}
                                                      </p>
                                                    </div>
                                                    <p>
                                                      {this.punctuationComponent('}')}
                                                    </p>
                                                    <br />

                                                    <p>
                                                      {this.keywordComponent('render')}
                                                      {this.punctuationComponent('()')}
                                                      {this.punctuationComponent('{')}
                                                    </p>
                                                    <div className="main-contents__codeBox__indent">
                                                      <p>
                                                        {this.keywordComponent('return')}
                                                        {this.punctuationComponent('(')}
                                                      </p>
                                                      <div className="main-contents__codeBox__indent">
                                                        <p>
                                                          {this.attributeElementComponent('form','onSubmit','{this.handleSubmit}')}
                                                        </p>
                                                        <div className="main-contents__codeBox__indent">
                                                          <p>
                                                            {this.elementComponent('label')}
                                                          </p>
                                                          <div className="main-contents__codeBox__indent">
                                                            <p>
                                                              Name:
                                                            </p>
                                                            <p>
                                                              {this.punctuationComponent('<')}
                                                              {this.stringComponent('input')}

                                                              <span className="main-contents__codeBox__attribute"> type</span>
                                                              {this.operatorComponent('=')}
                                                              "text"

                                                              <span className="main-contents__codeBox__attribute"> value</span>
                                                              {this.operatorComponent('=')}
                                                              {this.punctuationComponent('{')}
                                                              this.state.name
                                                              {this.punctuationComponent('}')}

                                                              <span className="main-contents__codeBox__attribute"> onChange</span>
                                                              {this.operatorComponent('=')}
                                                              {this.punctuationComponent('{')}
                                                              this.handleChangeName
                                                              {this.punctuationComponent('} />')}
                                                            </p>
                                                          </div>
                                                          <p>
                                                            {this.closeElementComponent('label')}
                                                          </p>

                                                          <p>
                                                            {this.elementComponent('label')}
                                                          </p>
                                                          <div className="main-contents__codeBox__indent">
                                                            <p>
                                                              Pick your favorite flavor:
                                                            </p>
                                                            <p>
                                                              {this.punctuationComponent('<')}
                                                              {this.stringComponent('select')}

                                                              <span className="main-contents__codeBox__attribute"> value</span>
                                                              {this.operatorComponent('=')}
                                                              {this.punctuationComponent('{')}
                                                              this.state.flavor
                                                              {this.punctuationComponent('}')}

                                                              <span className="main-contents__codeBox__attribute"> onChange</span>
                                                              {this.operatorComponent('=')}
                                                              {this.punctuationComponent('{')}
                                                              this.handleChangeFlavor
                                                              {this.punctuationComponent('} >')}
                                                            </p>
                                                            <div className="main-contents__codeBox__indent">
                                                              <p>
                                                                {this.attributeElementComponent('option','value','"grapefruit"')}
                                                                Grapefruit
                                                                {this.closeElementComponent('option')}
                                                              </p>
                                                              <p>
                                                                {this.attributeElementComponent('option','value','"lime"')}
                                                                Lime
                                                                {this.closeElementComponent('option')}
                                                              </p>
                                                              <p>
                                                                {this.attributeElementComponent('option','value','"coconut"')}
                                                                Coconut
                                                                {this.closeElementComponent('option')}
                                                              </p>
                                                              <p>
                                                                {this.attributeElementComponent('option','value','"mango"')}
                                                                Mango
                                                                {this.closeElementComponent('option')}
                                                              </p>
                                                            </div>
                                                            <p>
                                                              {this.closeElementComponent('select')}
                                                            </p>
                                                          </div>
                                                          <p>
                                                            {this.closeElementComponent('label')}
                                                          </p>

                                                          <p>
                                                            {this.elementComponent('label')}
                                                          </p>
                                                          <div className="main-contents__codeBox__indent">
                                                            <p>
                                                              Essay:
                                                            </p>
                                                            <p>
                                                              {this.punctuationComponent('<')}
                                                              {this.stringComponent('textarea')}

                                                              <span className="main-contents__codeBox__attribute"> value</span>
                                                              {this.operatorComponent('=')}
                                                              {this.punctuationComponent('{')}
                                                              this.state.essay
                                                              {this.punctuationComponent('}')}

                                                              <span className="main-contents__codeBox__attribute"> onChange</span>
                                                              {this.operatorComponent('=')}
                                                              {this.punctuationComponent('{')}
                                                              this.handleChangeEssay
                                                              {this.punctuationComponent('} />')}
                                                            </p>
                                                          </div>
                                                          <p>
                                                            {this.closeElementComponent('label')}
                                                          </p>
                                                          <p>
                                                            {this.punctuationComponent('<')}
                                                            {this.stringComponent('input')}

                                                            <span className="main-contents__codeBox__attribute"> type</span>
                                                            {this.operatorComponent('=')}
                                                            "submit"

                                                            <span className="main-contents__codeBox__attribute"> value</span>
                                                            {this.operatorComponent('=')}
                                                            "Submit"
                                                            {this.punctuationComponent(' />')}
                                                          </p>
                                                        </div>
                                                        <p>
                                                          {this.closeElementComponent('form')}
                                                        </p>
                                                      </div>
                                                      <p>
                                                        {this.punctuationComponent(');')}
                                                      </p>
                                                    </div>
                                                    <p>
                                                      {this.punctuationComponent('}')}
                                                    </p>
                                                  </div>
                                                  <p>
                                                    {this.punctuationComponent('}')}
                                                  </p>
                                              </code>
                                          </pre>
                                          <p className="main-contents__sentences">
                                            フォーム要素の value 属性が設定されているので、表示される値は常に this.state.??? となります。
                                            handleChange はキーストロークごとに実行されて React の state を更新するので、表示される値はユーザがタイプするたびに更新されます。
                                          </p>
                                          <p className="main-contents__sentences">
                                            React での textarea はテキストを子要素として持つ代わりに value 属性を使用します。
                                          </p>
                                      </div>
                                  </div>

                                  <div className="main-contents__subChapterBox">
                                      <h4 id="subTitle_7-2">{ titles.react.chapter7.sub2 }</h4>
                                      <div className="main-contents__indent">
                                          <p className="main-contents__sentences">
                                            複数の制御された input 要素を処理する必要がある場合、それぞれの入力要素に name 属性を追加すれば、
                                            ハンドラ関数に event.target.name に基づいて処理を選択させるようにできます。
                                          </p>
                                          <pre className="main-contents__codeBox">
                                              <code>
                                                  <p>
                                                    {this.keywordComponent('class')}
                                                    {this.funcNameComponent('App')}
                                                    {this.keywordComponent(' extends')}
                                                    {this.keywordComponent('React.Component')}
                                                    {this.punctuationComponent('{')}
                                                  </p>
                                                  <div className="main-contents__codeBox__indent">
                                                    <p>
                                                      {this.keywordComponent('constructor')}
                                                      {this.punctuationComponent('(')}
                                                      props
                                                      {this.punctuationComponent(')')}
                                                      {this.punctuationComponent('{')}
                                                    </p>
                                                    <div className="main-contents__codeBox__indent">
                                                      <p>
                                                        {this.keywordComponent('super')}
                                                        {this.punctuationComponent('(')}
                                                        props
                                                        {this.punctuationComponent(')')}
                                                        {this.punctuationComponent(';')}
                                                      </p>
                                                      <p>
                                                        this.state
                                                        {this.operatorComponent('=')}
                                                        {this.punctuationComponent('{')}
                                                      </p>
                                                      <div className="main-contents__codeBox__indent">
                                                        <p>
                                                          name:
                                                          {this.keywordComponent(" ''")},
                                                        </p>
                                                        <p>
                                                          flavor:
                                                          {this.keywordComponent(" 'coconut'")},
                                                        </p>
                                                        <p>
                                                          essay:
                                                          {this.keywordComponent(" 'Please write an essay about your favorite DOM element.'")},
                                                        </p>
                                                      </div>
                                                      <p>
                                                        {this.punctuationComponent('};')}
                                                      </p>
                                                      <br />

                                                      <p>
                                                        this.handleInputChange
                                                        {this.operatorComponent(' = ')}
                                                        {this.funcNameComponent('this.handleInputChange.bind')}
                                                        {this.punctuationComponent('(')}
                                                        this
                                                        {this.punctuationComponent(');')}
                                                      </p>
                                                      <p>
                                                        this.handleSubmit
                                                        {this.operatorComponent(' = ')}
                                                        {this.funcNameComponent('this.handleSubmit.bind')}
                                                        {this.punctuationComponent('(')}
                                                        this
                                                        {this.punctuationComponent(');')}
                                                      </p>
                                                    </div>
                                                    <p>
                                                      {this.punctuationComponent('}')}
                                                    </p>
                                                    <br />
                                                    
                                                    <p>
                                                      {this.keywordComponent('handleInputChange')}
                                                      {this.punctuationComponent('(')}
                                                      event
                                                      {this.punctuationComponent(') {')}
                                                      <div className="main-contents__codeBox__indent">
                                                        <p>
                                                          {this.keywordComponent('const')}
                                                          target
                                                          {this.operatorComponent(' = ')}
                                                          event.target
                                                          {this.punctuationComponent(';')}
                                                        </p>
                                                        <p>
                                                          {this.keywordComponent('const')}
                                                          value
                                                          {this.operatorComponent(' = ')}
                                                          event.value
                                                          {this.punctuationComponent(';')}
                                                        </p>
                                                        <p>
                                                          {this.keywordComponent('const')}
                                                          name
                                                          {this.operatorComponent(' = ')}
                                                          target.name
                                                          {this.punctuationComponent(';')}
                                                        </p>
                                                        <br />

                                                        <p>
                                                          {this.funcNameComponent('this.setState')}
                                                          {this.punctuationComponent('({')}
                                                        </p>
                                                        <div className="main-contents__codeBox__indent">
                                                          <p>
                                                            {this.punctuationComponent('[')}
                                                            name
                                                            {this.punctuationComponent(']: ')}
                                                            event.target.value
                                                          </p>
                                                        </div>
                                                        <p>
                                                          {this.punctuationComponent('});')}
                                                        </p>
                                                      </div>
                                                    </p>
                                                    <p>
                                                      {this.punctuationComponent('}')}
                                                    </p>
                                                    <br />

                                                    <p>
                                                      {this.keywordComponent('handleSubmit')}
                                                      {this.punctuationComponent('(')}
                                                      event
                                                      {this.punctuationComponent(') {')}
                                                    </p>
                                                    <div className="main-contents__codeBox__indent">
                                                      <p>
                                                        {this.funcNameComponent('alert')}
                                                        {this.punctuationComponent('(')}
                                                        'A name was submitted: ' + this.state.name
                                                        {this.punctuationComponent(');')}
                                                      </p>
                                                      <p>
                                                        {this.funcNameComponent('alert')}
                                                        {this.punctuationComponent('(')}
                                                        'Your favorite flavor is: ' + this.state.flavor
                                                        {this.punctuationComponent(');')}
                                                      </p>
                                                      <p>
                                                        {this.funcNameComponent('alert')}
                                                        {this.punctuationComponent('(')}
                                                        'An essay was submitted: ' + this.state.essay
                                                        {this.punctuationComponent(');')}
                                                      </p>
                                                      <p>
                                                        event.
                                                        {this.funcNameComponent('preventDefault')}
                                                        {this.punctuationComponent('();')}
                                                      </p>
                                                    </div>
                                                    <p>
                                                      {this.punctuationComponent('}')}
                                                    </p>
                                                    <br />

                                                    <p>
                                                      {this.keywordComponent('render')}
                                                      {this.punctuationComponent('()')}
                                                      {this.punctuationComponent('{')}
                                                    </p>
                                                    <div className="main-contents__codeBox__indent">
                                                      <p>
                                                        {this.keywordComponent('return')}
                                                        {this.punctuationComponent('(')}
                                                      </p>
                                                      <div className="main-contents__codeBox__indent">
                                                        <p>
                                                          {this.attributeElementComponent('form','onSubmit','{this.handleSubmit}')}
                                                        </p>
                                                        <div className="main-contents__codeBox__indent">
                                                          <p>
                                                            {this.elementComponent('label')}
                                                          </p>
                                                          <div className="main-contents__codeBox__indent">
                                                            <p>
                                                              Name:
                                                            </p>
                                                            <p>
                                                              {this.punctuationComponent('<')}
                                                              {this.stringComponent('input')}

                                                              <span className="main-contents__codeBox__attribute"> name</span>
                                                              {this.operatorComponent('=')}
                                                              "name"

                                                              <span className="main-contents__codeBox__attribute"> type</span>
                                                              {this.operatorComponent('=')}
                                                              "text"

                                                              <span className="main-contents__codeBox__attribute"> value</span>
                                                              {this.operatorComponent('=')}
                                                              {this.punctuationComponent('{')}
                                                              this.state.name
                                                              {this.punctuationComponent('}')}

                                                              <span className="main-contents__codeBox__attribute"> onChange</span>
                                                              {this.operatorComponent('=')}
                                                              {this.punctuationComponent('{')}
                                                              this.handleInputChange
                                                              {this.punctuationComponent('} />')}
                                                            </p>
                                                          </div>
                                                          <p>
                                                            {this.closeElementComponent('label')}
                                                          </p>

                                                          <p>
                                                            {this.elementComponent('label')}
                                                          </p>
                                                          <div className="main-contents__codeBox__indent">
                                                            <p>
                                                              Pick your favorite flavor:
                                                            </p>
                                                            <p>
                                                              {this.punctuationComponent('<')}
                                                              {this.stringComponent('select')}

                                                              <span className="main-contents__codeBox__attribute"> name</span>
                                                              {this.operatorComponent('=')}
                                                              "flavor"

                                                              <span className="main-contents__codeBox__attribute"> value</span>
                                                              {this.operatorComponent('=')}
                                                              {this.punctuationComponent('{')}
                                                              this.state.flavor
                                                              {this.punctuationComponent('}')}

                                                              <span className="main-contents__codeBox__attribute"> onChange</span>
                                                              {this.operatorComponent('=')}
                                                              {this.punctuationComponent('{')}
                                                              this.handleInputChange
                                                              {this.punctuationComponent('} >')}
                                                            </p>
                                                            <div className="main-contents__codeBox__indent">
                                                              <p>
                                                                {this.attributeElementComponent('option','value','"grapefruit"')}
                                                                Grapefruit
                                                                {this.closeElementComponent('option')}
                                                              </p>
                                                              <p>
                                                                {this.attributeElementComponent('option','value','"lime"')}
                                                                Lime
                                                                {this.closeElementComponent('option')}
                                                              </p>
                                                              <p>
                                                                {this.attributeElementComponent('option','value','"coconut"')}
                                                                Coconut
                                                                {this.closeElementComponent('option')}
                                                              </p>
                                                              <p>
                                                                {this.attributeElementComponent('option','value','"mango"')}
                                                                Mango
                                                                {this.closeElementComponent('option')}
                                                              </p>
                                                            </div>
                                                            <p>
                                                              {this.closeElementComponent('select')}
                                                            </p>
                                                          </div>
                                                          <p>
                                                            {this.closeElementComponent('label')}
                                                          </p>

                                                          <p>
                                                            {this.elementComponent('label')}
                                                          </p>
                                                          <div className="main-contents__codeBox__indent">
                                                            <p>
                                                              Essay:
                                                            </p>
                                                            <p>
                                                              {this.punctuationComponent('<')}
                                                              {this.stringComponent('textarea')}

                                                              <span className="main-contents__codeBox__attribute"> name</span>
                                                              {this.operatorComponent('=')}
                                                              "essay"

                                                              <span className="main-contents__codeBox__attribute"> value</span>
                                                              {this.operatorComponent('=')}
                                                              {this.punctuationComponent('{')}
                                                              this.state.essay
                                                              {this.punctuationComponent('}')}

                                                              <span className="main-contents__codeBox__attribute"> onChange</span>
                                                              {this.operatorComponent('=')}
                                                              {this.punctuationComponent('{')}
                                                              this.handleInputChange
                                                              {this.punctuationComponent('} />')}
                                                            </p>
                                                          </div>
                                                          <p>
                                                            {this.closeElementComponent('label')}
                                                          </p>
                                                          <p>
                                                            {this.punctuationComponent('<')}
                                                            {this.stringComponent('input')}

                                                            <span className="main-contents__codeBox__attribute"> type</span>
                                                            {this.operatorComponent('=')}
                                                            "submit"

                                                            <span className="main-contents__codeBox__attribute"> value</span>
                                                            {this.operatorComponent('=')}
                                                            "Submit"
                                                            {this.punctuationComponent(' />')}
                                                          </p>
                                                        </div>
                                                        <p>
                                                          {this.closeElementComponent('form')}
                                                        </p>
                                                      </div>
                                                      <p>
                                                        {this.punctuationComponent(');')}
                                                      </p>
                                                    </div>
                                                    <p>
                                                      {this.punctuationComponent('}')}
                                                    </p>
                                                  </div>
                                                  <p>
                                                    {this.punctuationComponent('}')}
                                                  </p>
                                              </code>
                                          </pre>
                                      </div>
                                  </div>
                              </div>

                              {/* --------   Chapter8   ----------------------------------------------------------------------------                    */}
                              <div className="main-contents__chapterBox">
                                  <h3 id="mainTitle8">{ titles.react.chapter8.main }</h3>

                                  <div className="main-contents__subChapterBox">
                                      <h4 id="subTitle_8-1">{ titles.react.chapter8.sub1 }</h4>
                                      <div className="main-contents__indent">
                                          <p className="main-contents__sentences">
                                            コンポーネントの中には事前には子要素を知らないものもあります。
                                            これは Sidebar や Dialog のような汎用的な “入れ物” をあらわすコンポーネントではよく使われています。
                                          </p>
                                          <p className="main-contents__sentences">
                                            このようなコンポーネントでは特別な children という props を使い、
                                            以下のようにして受け取った子要素を出力することができます。
                                          </p>
                                          <pre className="main-contents__codeBox">
                                              <code>
                                                  <p>
                                                    {this.keywordComponent('function')}
                                                    {this.funcNameComponent('FancyBorder')}
                                                    {this.punctuationComponent('(')}
                                                    props
                                                    {this.punctuationComponent(') {')}
                                                  </p>
                                                  <div className="main-contents__codeBox__indent">
                                                    <p>
                                                      {this.keywordComponent('return')}
                                                      {this.punctuationComponent('(')}
                                                    </p>
                                                    <div className="main-contents__codeBox__indent">
                                                      <p>
                                                        {this.attributeElementComponent('div','className',"{'FancyBorder FancyBorder-' + props.color}")}
                                                      </p>
                                                      <div className="main-contents__codeBox__indent">
                                                        <p>
                                                          {this.punctuationComponent('{')}
                                                          props.children
                                                          {this.punctuationComponent('}')}
                                                        </p>
                                                      </div>
                                                      <p>
                                                        {this.closeElementComponent('div')}
                                                      </p>
                                                    </div>
                                                    <p>
                                                    {this.punctuationComponent(');')}
                                                  </p>
                                                  </div>
                                                  <p>
                                                    {this.punctuationComponent('}')}
                                                  </p>

                                                  <p>
                                                    {this.keywordComponent('function')}
                                                    {this.funcNameComponent('WelcomeDialog')}
                                                    {this.punctuationComponent('() {')}
                                                  </p>
                                                  <div className="main-contents__codeBox__indent">
                                                    <p>
                                                      {this.keywordComponent('return')}
                                                      {this.punctuationComponent('(')}
                                                    </p>
                                                    <div className="main-contents__codeBox__indent">
                                                      <p>
                                                        {this.attributeElementComponent('FancyBorder','color','"blue"')}
                                                      </p>
                                                      <div className="main-contents__codeBox__indent">
                                                        <p>
                                                          {this.attributeElementComponent('h1','className','"Dialog-title"')}
                                                        </p>
                                                        <div className="main-contents__codeBox__indent">
                                                          <p>
                                                            Welcome
                                                          </p>
                                                        </div>
                                                        <p>
                                                        {this.closeElementComponent('h1')}
                                                        </p>

                                                        <p>
                                                          {this.attributeElementComponent('p','className','"Dialog-message"')}
                                                        </p>
                                                        <div className="main-contents__codeBox__indent">
                                                          <p>
                                                            Thank you for visiting our spacecraft!
                                                          </p>
                                                        </div>
                                                        <p>
                                                        {this.closeElementComponent('p')}
                                                        </p>

                                                      </div>
                                                      <p>
                                                        {this.closeElementComponent('FancyBorder')}
                                                      </p>
                                                    </div>
                                                    <p>
                                                      {this.punctuationComponent(');')}
                                                    </p>
                                                  </div>
                                                  <p>
                                                    {this.punctuationComponent('}')}
                                                  </p>
                                              </code>
                                          </pre>
                                          <p className="main-contents__sentences">
                                            FancyBorder の内側のあらゆる要素は FancyBorder に children という props として渡されます。FancyBorder は 
                                            div の内側に props.children をレンダリングするので、渡された要素が出力されます。
                                          </p>
                                      </div>
                                  </div>
                              </div>
                            
                          </div>

    const routerContents = <div className="main-contents">
                              <h2 id="topTitle">{ titles.router.title }</h2>

                              {/* --------   Chapter1   ----------------------------------------------------------------------------                    */}
                              <div className="main-contents__chapterBox">
                                  <h3 id="mainTitle1">{ titles.router.chapter1.main }</h3>

                                  <div className="main-contents__subChapterBox">
                                      <h4 id="subTitle_1-1">{ titles.router.chapter1.sub1 }</h4>
                                      <div className="main-contents__indent">
                                          <p className="main-contents__sentences">
                                            全てのReact Routerアプリケーションの中心には、ルーターコンポーネントが必要です。
                                            react-router-dom 提供の BrowserRouter をしようすることでルーティングできます。
                                          </p>
                                          <pre className="main-contents__codeBox">
                                              <code>
                                                  <p>
                                                    {this.keywordComponent('import')}
                                                    React
                                                    {this.keywordComponent(' from')}
                                                    {this.stringComponent("'react'")}
                                                    {this.punctuationComponent(';')}
                                                  </p>
                                                  <p>
                                                    {this.keywordComponent('import')}
                                                    ReactDOM
                                                    {this.keywordComponent(' from')}
                                                    {this.stringComponent("'react-dom'")}
                                                    {this.punctuationComponent(';')}
                                                  </p>
                                                  <p>
                                                    {this.keywordComponent('import')}
                                                    {this.punctuationComponent('{')}
                                                    BrowserRouter
                                                    {this.punctuationComponent('}')}
                                                    {this.keywordComponent(' from')}
                                                    {this.stringComponent("'react-router-dom'")}
                                                    {this.punctuationComponent(';')}
                                                  </p>
                                                  <p>
                                                    {this.keywordComponent('import')}
                                                    App
                                                    {this.keywordComponent(' from')}
                                                    {this.stringComponent("'./app'")}
                                                    {this.punctuationComponent(';')}
                                                  </p>
                                                  <br />
                                                  <p>
                                                    ReactDOM
                                                    {this.punctuationComponent('.')}
                                                    {this.funcNameComponent('render')}
                                                    {this.punctuationComponent('(')}
                                                    <br />
                                                  </p>
                                                  <div className="main-contents__codeBox__indent">
                                                    <p>
                                                      {this.punctuationComponent('<')}
                                                      BrowserRouter
                                                      {this.punctuationComponent('>')}
                                                      <div className="main-contents__codeBox__indent">
                                                        {this.punctuationComponent('<')}
                                                        App
                                                        {this.punctuationComponent(' />')}
                                                      </div>
                                                      {this.punctuationComponent('</')}
                                                      BrowserRouter
                                                      {this.punctuationComponent('>')}
                                                      {this.punctuationComponent(',')}
                                                      <br />
                                                    </p>
                                                    <p>
                                                      document
                                                      {this.punctuationComponent('.')}
                                                      {this.funcNameComponent('getElementById')}
                                                      {this.punctuationComponent('(')}
                                                      {this.stringComponent('root')}
                                                      {this.punctuationComponent(')')}
                                                      <br />
                                                    </p>
                                                  </div>
                                                  <p className="main-contents__codeBox__interval">
                                                    {this.punctuationComponent(')')}
                                                    {this.punctuationComponent(';')}
                                                    <br />
                                                  </p>
                                              </code>
                                          </pre>
                                      </div>
                                  </div>

                                  <div className="main-contents__subChapterBox">
                                      <h4 id="subTitle_1-2">{ titles.router.chapter1.sub2 }</h4>
                                      <div className="main-contents__indent">
                                          <p className="main-contents__sentences">
                                            ルートマッチングコンポーネントには Route と Switch があります。
                                             Route はぞれぞれ path を持ち、URL が Route の path にマッチした場合に描画するコンポーネントをラップします。
                                            マッチ判定は path の先頭に一致するだけでマッチとみなされます。
                                            これにより path="/" は常に一致することになるので、通常この path を持つ Route は最後に配置します。
                                            先頭に配置したい場合は exact path として下さい。
                                            こうすることで exact を使用した Route のみマッチ判定は全体一致となり、配置の順番を考える必要はなくなります。
                                          </p>
                                          <p className="main-contents__sentences">
                                            複数の Route にマッチした場合に意図せず複数の Route が描画されることを防ぐために Switch を使います。
                                            Switch は現在の URL と一致する path を持っている Route を探し、見つけた段階で他の Route を無視します。
                                            これにより意図せず複数 Route が描画されることを防ぐことができますが、特定性の高い Route は特定性の低い
                                            Route よりも前に配置する必要があります。
                                          </p>
                                          <pre className="main-contents__codeBox">
                                              <code>
                                                  <p>
                                                    {this.keywordComponent('import')}
                                                    React
                                                    {this.keywordComponent(' from')}
                                                    {this.stringComponent("'react'")}
                                                    {this.punctuationComponent(';')}
                                                  </p>
                                                  <p>
                                                    {this.keywordComponent('import')}
                                                    ReactDOM
                                                    {this.keywordComponent(' from')}
                                                    {this.stringComponent("'react-dom'")}
                                                    {this.punctuationComponent(';')}
                                                  </p>
                                                  <p>
                                                    {this.keywordComponent('import')}
                                                    {this.punctuationComponent('{')}<br />
                                                    BrowserRouter
                                                    {this.keywordComponent(' as')}
                                                    Router, Switch, Route<br />
                                                    {this.punctuationComponent('}')}
                                                    {this.keywordComponent(' from')}
                                                    {this.stringComponent("'react-router-dom'")}
                                                    {this.punctuationComponent(';')}
                                                  </p>
                                                  <p>
                                                    {this.keywordComponent('import')}
                                                    {this.punctuationComponent('{')}<br />
                                                    Home, About, Friends<br />
                                                    {this.punctuationComponent('}')}
                                                    {this.keywordComponent(' from')}
                                                    {this.stringComponent("'./component'")}
                                                    {this.punctuationComponent(';')}
                                                  </p>
                                                  <br />
                                                  <p>
                                                    {this.keywordComponent('const')}
                                                    App
                                                    {this.operatorComponent('=')}
                                                    {this.punctuationComponent('()')}
                                                    {this.operatorComponent('=>')}
                                                    {this.punctuationComponent('(')}
                                                  </p>
                                                  <div className="main-contents__codeBox__indent">
                                                    <p>
                                                      {this.elementComponent('div')}
                                                    </p>
                                                    <div className="main-contents__codeBox__indent">
                                                      <p>
                                                        {this.elementComponent('Switch')}
                                                      </p>
                                                      <div className="main-contents__codeBox__indent">
                                                        <p>
                                                          {this.routeElementComponent('Route', '"/about"')}
                                                        </p>
                                                        <div className="main-contents__codeBox__indent">
                                                          <p>
                                                            {this.somethingComponent('About')}
                                                          </p>
                                                        </div>
                                                        <p>
                                                          {this.closeElementComponent('Route')}
                                                        </p>
                                                        <p>
                                                          {this.routeElementComponent('Route', '"/contact/:id"')}
                                                        </p>
                                                        <div className="main-contents__codeBox__indent">
                                                          <p>
                                                            {this.somethingComponent('About')}
                                                          </p>
                                                        </div>
                                                        <p>
                                                          {this.closeElementComponent('Route')}
                                                        </p>
                                                        <p>
                                                          {this.closeElementComponent('Route')}
                                                        </p>
                                                        <p>
                                                          {this.routeElementComponent('Route', '"/contact"')}
                                                        </p>
                                                        <div className="main-contents__codeBox__indent">
                                                          <p>
                                                            {this.somethingComponent('Friends')}
                                                          </p>
                                                        </div>
                                                        <p>
                                                          {this.closeElementComponent('Route')}
                                                        </p>
                                                        <p>
                                                          {this.routeElementComponent('Route', '"/"')}
                                                        </p>
                                                        <div className="main-contents__codeBox__indent">
                                                          <p>
                                                            {this.somethingComponent('Home')}
                                                          </p>
                                                        </div>
                                                        <p>
                                                          {this.closeElementComponent('Route')}
                                                        </p>
                                                      </div>
                                                      <p>
                                                        {this.closeElementComponent('Switch')}
                                                      </p>
                                                    </div>
                                                    <p>
                                                      {this.closeElementComponent('div')}
                                                    </p>
                                                  </div>
                                                  <p>
                                                    {this.punctuationComponent(')')}
                                                    <br />
                                                  </p>
                                                  <p>
                                                    ReactDOM
                                                    {this.punctuationComponent('.')}
                                                    {this.funcNameComponent('render')}
                                                    {this.punctuationComponent('(')}
                                                    <br />
                                                  </p>
                                                  <div className="main-contents__codeBox__indent">
                                                    <p>
                                                      {this.punctuationComponent('<')}
                                                      Router
                                                      {this.punctuationComponent('>')}
                                                      <div className="main-contents__codeBox__indent">
                                                        {this.punctuationComponent('<')}
                                                        App
                                                        {this.punctuationComponent(' />')}
                                                      </div>
                                                      {this.punctuationComponent('</')}
                                                      Router
                                                      {this.punctuationComponent('>')}
                                                      {this.punctuationComponent(',')}
                                                      <br />
                                                    </p>
                                                    <p>
                                                      document
                                                      {this.punctuationComponent('.')}
                                                      {this.funcNameComponent('getElementById')}
                                                      {this.punctuationComponent('(')}
                                                      {this.stringComponent("'root'")}
                                                      {this.punctuationComponent(')')}
                                                      <br />
                                                    </p>
                                                  </div>
                                                  <p className="main-contents__codeBox__interval">
                                                    {this.punctuationComponent(')')}
                                                    {this.punctuationComponent(';')}
                                                    <br />
                                                  </p>
                                              </code>
                                          </pre>
                                      </div>
                                  </div>

                                  <div className="main-contents__subChapterBox">
                                      <h4 id="subTitle_1-3">{ titles.router.chapter1.sub3 }</h4>
                                      <div className="main-contents__indent">
                                          <p className="main-contents__sentences">
                                            Link は レンダリングされると HTML の a 要素となります。
                                          </p>
                                          <pre className="main-contents__codeBox">
                                              <code>
                                                  <p>
                                                    {this.linkElementComponent('"/"')}
                                                    Home
                                                    {this.closeElementComponent('Link')}
                                                  </p>
                                              </code>
                                          </pre>
                                          <p className="main-contents__sentences">
                                            NavLink は Link と同じ働きをしますが、
                                            描画されているコンポーネントに対応するリンクにスタイリングをすることができます。
                                          </p>
                                          <pre className="main-contents__codeBox">
                                              <code>
                                                  <p>
                                                    {this.navLinkElementComponent("{ color: 'red' }", '"/"')}
                                                    Home
                                                    {this.closeElementComponent('NavLink')}
                                                  </p>
                                              </code>
                                          </pre>
                                          <p className="main-contents__sentences">
                                            Redirect を使うことでナビゲーションを強制することができます。
                                          </p>
                                          <pre className="main-contents__codeBox">
                                              <code>
                                                  <p>
                                                    {this.redirectElementComponent('"/login"')}
                                                    Home
                                                    {this.closeElementComponent('Redirect')}
                                                  </p>
                                              </code>
                                          </pre>
                                      </div>
                                  </div>

                              </div>
                           </div>

    return (
      
      <>
      {setContents === 'scss'
          ? (
            <>{scssContents}</>
          )
          : setContents === 'js'
            ? (
            <>{jsContents}</>
            )
            : setContents === 'react'
              ? (
                <>{reactContents}</>
              )
              : setContents === 'router'
                    && (
                    <>{routerContents}</>
                    )}
    </>
    );
  }
}

export default Content;
