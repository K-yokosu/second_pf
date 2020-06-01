import React from 'react';

class Content extends React.Component {
  render() {
    // reactできたら他のContentsにコピーする
    // 最後にコメント確認する
    // 文章のインデントつける
    // codeはconst or component化して返す。
    const { titles } = this.props;

    return (
      <div className="main-contents">
          <h2 id="topTitle">{ titles.title }</h2>


          {/* --------   Chapter1   ---------------------------------------------------------------------------- */}
          <div className="main-contents__chapterBox">
              <h3 id="mainTitle1">{ titles.chapter1.main }</h3>

              <div className="main-contents__subChapterBox">
                  <h4 id="subTitle_1-1">{ titles.chapter1.sub1 }</h4>
                  <div className="main-contents__indent">
                      <p className="main-contents__sentences">
                        JSXとはマークアップとロジック(プログラム)を同ファイルに集約できるJavaScript構文の拡張言語です。
                        これまでの開発ではHTMLファイルとJSファイルで役割を分けていましたが、JSXを使うことによりそれら
                        が統合され、理解しやすく見やすいコードを書くことができます。
                      </p>
                  </div>
              </div>

              <div className="main-contents__subChapterBox">
                  <h4 id="subTitle_1-2">{ titles.chapter1.sub2 }</h4>
                  <div className="main-contents__indent">
                      <p className="main-contents__sentences">
                        JavaScriptの式を中括弧で囲むことで、JSXに埋め込むことができます。
                        下記例では関数を埋め込んでいます。
                      </p>
                      <pre className="main-contents__codeBox">
                          <code>
                              <p>
                                <span className="main-contents__codeBox__keyword">function</span>
                                <span className="main-contents__codeBox__function">formatName</span>
                                <span className="main-contents__codeBox__punctuation">(</span>
                                <span>user</span>
                                <span className="main-contents__codeBox__punctuation">)</span>
                                <span className="main-contents__codeBox__punctuation">{'{'}</span>
                              </p>
                              <div className="main-contents__codeBox__indent">
                                <p>
                                  <span className="main-contents__codeBox__keyword">return</span>
                                  user
                                  <span className="main-contents__codeBox__punctuation">.</span>
                                  firstName
                                  <span className="main-contents__codeBox__operator">+</span>
                                  <span className="main-contents__codeBox__string">' '</span>
                                  <span className="main-contents__codeBox__operator">+</span>
                                  user
                                  <span className="main-contents__codeBox__punctuation">.</span>
                                  lastName
                                  <span className="main-contents__codeBox__punctuation">;</span>
                                  <br />
                                </p>
                              </div>
                              <p className="main-contents__codeBox__interval">
                                <span className="main-contents__codeBox__punctuation">{'}'}</span>
                                <br />
                              </p>
                              <p>
                                <span className="main-contents__codeBox__keyword">const</span>
                                user
                                <span className="main-contents__codeBox__operator">=</span>
                                <span className="main-contents__codeBox__punctuation">{'{'}</span>
                                <br />
                              </p>
                              <div className="main-contents__codeBox__indent">
                                <p>
                                  firstName
                                  <span className="main-contents__codeBox__operator">:</span>
                                  <span className="main-contents__codeBox__string">'Harper'</span>
                                  <span className="main-contents__codeBox__punctuation">,</span>
                                  <br />
                                </p>
                                <p>
                                  lastName
                                  <span className="main-contents__codeBox__operator">:</span>
                                  <span className="main-contents__codeBox__string">'Perez'</span>
                                  <br />
                                </p>
                              </div>
                              <p className="main-contents__codeBox__interval">
                                <span className="main-contents__codeBox__punctuation">{'}'}</span>
                                <span className="main-contents__codeBox__punctuation">;</span>
                                <br />
                              </p>
                              <p>
                                <span className="main-contents__codeBox__keyword">const</span>
                                element
                                <span className="main-contents__codeBox__operator">=</span>
                                <span className="main-contents__codeBox__punctuation">(</span>
                                <br />
                              </p>
                              <div className="main-contents__codeBox__indent">
                                <p>
                                  <span className="main-contents__codeBox__punctuation">{'<'}</span>
                                  h1
                                  <span className="main-contents__codeBox__punctuation">{'>'}</span>
                                  <br />
                                </p>
                                <p>
                                  <div className="main-contents__codeBox__indent">
                                    Hello,
                                    <span className="main-contents__codeBox__punctuation">｛</span>
                                    <span className="main-contents__codeBox__function">formatName</span>
                                    <span className="main-contents__codeBox__punctuation">(</span>
                                    user
                                    <span className="main-contents__codeBox__punctuation">)</span>
                                    <span className="main-contents__codeBox__punctuation">}</span>
                                    <span className="main-contents__codeBox__punctuation">!</span>
                                    <br />
                                  </div>
                                </p>
                                <p>
                                  <span className="main-contents__codeBox__punctuation">{'<'}</span>
                                  /h1
                                  <span className="main-contents__codeBox__punctuation">{'>'}</span>
                                  <br />
                                </p>
                              </div>
                              <p className="main-contents__codeBox__interval">
                                <span className="main-contents__codeBox__punctuation">)</span>
                                <span className="main-contents__codeBox__punctuation">;</span>
                                <br />
                              </p>
                              <p>
                                ReactDOM
                                <span className="main-contents__codeBox__punctuation">.</span>
                                <span className="main-contents__codeBox__function">render</span>
                                <span className="main-contents__codeBox__punctuation">(</span>
                                <br />
                              </p>
                              <div className="main-contents__codeBox__indent">
                                <p>
                                  element
                                  <span className="main-contents__codeBox__punctuation">,</span>
                                  <br />
                                </p>
                                <p>
                                  document
                                  <span className="main-contents__codeBox__punctuation">.</span>
                                  <span className="main-contents__codeBox__function">getElementById</span>
                                  <span className="main-contents__codeBox__punctuation">(</span>
                                  <span className="main-contents__codeBox__string">'root'</span>
                                  <span className="main-contents__codeBox__punctuation">)</span>
                                  <br />
                                </p>
                              </div>
                              <p className="main-contents__codeBox__interval">
                                <span className="main-contents__codeBox__punctuation">)</span>
                                <span className="main-contents__codeBox__punctuation">;</span>
                                <br />
                              </p>
                          </code>
                      </pre>
                  </div>
              </div>

              <div className="main-contents__subChapterBox">
                  <h4 id="subTitle_1-3">{ titles.chapter1.sub3 }</h4>
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
                                後ほど修正
                                {/* const element = <div className="name"></div>;
                                const element = <div className="name" {adress} ></div>; //parsing error ...
                                const element = <input type="text" />; */}
                              </p>
                          </code>
                      </pre>
                  </div>
              </div>

              <div  className="main-contents__subChapterBox">
                  <h4 id="subTitle_1-4">{ titles.chapter1.sub4 }</h4>
                  <div className="main-contents__indent">
                      <p className="main-contents__sentences">
                        <a href="https://babeljs.io/repl#?browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=MYewdgzgLgBAZiEBeGAeAJgSwG4D4AWApgDbEioD0WeAUEA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=7.9.6&externalPlugins=">Babel</a>
                         は JSX を React.createElement() の呼び出しへとコンパイルします。
                         以下の 2 つの例は等価です：
                      </p>
                      <pre className="main-contents__codeBox">
                          <code>
                              <p>
                                後ほど修正
                                {/* const element = (
                                  <h1 className="greeting">
                                    Hello, world!
                                  </h1>
                                ); */}
                              </p>
                          </code>
                      </pre>
                      <pre className="main-contents__codeBox">
                          <code>
                              <p>
                                後ほど修正
                                {/* const element = React.createElement(
                                  'h1',
                                  {className: 'greeting'},
                                  'Hello, world!'
                                ); */}
                              </p>
                          </code>
                      </pre>
                      <p className="main-contents__sentences">
                        React.createElement() は以下のようなオブジェクトを生成します：
                      </p>
                      <pre className="main-contents__codeBox">
                          <code>
                              <p>
                                後ほど修正
                                {/* const element = {
                                  type: 'h1',
                                  props: {
                                    className: 'greeting',
                                    children: 'Hello, world!'
                                  }
                                }; */}
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

          {/* --------   Chapter2   ---------------------------------------------------------------------------- */}                   
          <div className="main-contents__chapterBox">
              <h3 id="mainTitle2">{ titles.chapter2.main }</h3>

              <div className="main-contents__subChapterBox">
                  <h4 id="subTitle_2-1">{ titles.chapter2.sub1 }</h4>
                  <div className="main-contents__indent">
                      <p className="main-contents__sentences">
                        1章で見たように、JSXは最終的には React要素と呼ばれるオブジェクトに変換され、
                        React は React要素を元に DOM を構築します。
                        React は通常この DOM を HTMLファイルの下記のような要素に持たせています。
                      </p>
                      <pre className="main-contents__codeBox">
                          <code>
                              <p>
                                後ほど修正
                                {/* <div id="root"></div> */}
                              </p>
                          </code>
                      </pre>
                      <p className="main-contents__sentences">
                        React要素をルートDOM ノードにレンダリングするには、その 2 つを ReactDOM.render() に渡すことで実現します。
                      </p>
                      <pre className="main-contents__codeBox">
                          <code>
                              <p>
                                後ほど修正
                                {/* const element = <h1>Hello, world</h1>;
                                ReactDOM.render(element, document.getElementById('root')); */}
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
              <h3 id="mainTitle3">{ titles.chapter3.main }</h3>

              <div className="main-contents__subChapterBox">
                  <h4 id="subTitle_3-1">{ titles.chapter3.sub1 }</h4>
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
                                後ほど修正
                                {/* function Welcome(props) {
                                  return <h1>Hello, {props.name}</h1>;
                                } */}
                              </p>
                          </code>
                      </pre>
                      <pre className="main-contents__codeBox">
                          <code>
                              <p>
                                後ほど修正
                                {/* class Welcome extends React.Component {
                                  render() {
                                    return <h1>Hello, {this.props.name}</h1>;
                                  }
                                } */}
                              </p>
                          </code>
                      </pre>
                  </div>
              </div>

              <div className="main-contents__subChapterBox">
                  <h4 id="subTitle_3-2">{ titles.chapter3.sub2 }</h4>
                  <div className="main-contents__indent">
                      <p className="main-contents__sentences">
                        前節では、DOM のタグを表す React要素のみを扱いましたがコンポーネントを表すこともできます。
                      </p>
                      <pre className="main-contents__codeBox">
                          <code>
                              <p>
                                後ほど修正
                                {/* const element = <Welcome name="Sara" />; */}
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
                                後ほど修正
                                {/* function Welcome(props) {
                                  return <h1>Hello, {props.name}</h1>;
                                }

                                const element = <Welcome name="Sara" />;
                                ReactDOM.render(
                                  element,
                                  document.getElementById('root')
                                ); */}
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
                        {/* <div />  */}？？？
                        は HTML の div タグを表しますが、
                        {/* <Welcome /> */}？？？
                         はコンポーネントを表しており、
                         <span className="main-contents__no">スコープ内に Welcome が存在する必要</span>があります。
                      </p>
                  </div>
              </div>

              <div className="main-contents__subChapterBox">
                  <h4 id="subTitle_3-3">{ titles.chapter3.sub3 }</h4>
                  <div className="main-contents__indent">
                      <p className="main-contents__sentences">
                        コンポーネントを関数で宣言するかクラスで宣言するかに関わらず、
                        自分自身の props は決して変更してはいけません。
                        この sum 関数を見てみましょう
                      </p>
                      <pre className="main-contents__codeBox">
                          <code>
                              <p>
                                後ほど修正
                                {/* function sum(a, b) {
                                  return a + b;
                                } */}
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
                                後ほど修正
                                {/* function withdraw(account, amount) {
                                  account.total -= amount;
                                } */}
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
              <h3 id="mainTitle4">{ titles.chapter4.main }</h3>

              <div className="main-contents__subChapterBox">
                  <h4 id="subTitle_4-1">{ titles.chapter4.sub1 }</h4>
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
                                後ほど修正
                                {/* class Clock extends React.Component {
                                  constructor(props) {
                                    super(props);
                                    this.state = {date: new Date()};
                                  }

                                  render() {
                                    return (
                                      <div>
                                        <h1>Hello, world!</h1>
                                        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                                      </div>
                                    );
                                  }
                                }

                                ReactDOM.render(
                                  <Clock />,
                                  document.getElementById('root')
                                ); */}
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
                  <h4 id="subTitle_4-2">{ titles.chapter4.sub2 }</h4>
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
                                後ほど修正
                                {/* class Clock extends React.Component {
                                  constructor(props) {
                                    super(props);
                                    this.state = {date: new Date()};
                                  }

                                  componentDidMount() {
                                    this.timerID = setInterval(
                                      () => this.tick(),
                                      1000
                                    );
                                  }

                                  componentWillUnmount() {
                                    clearInterval(this.timerID);
                                  }

                                  tick() {
                                    this.setState({
                                      date: new Date()
                                    });
                                  }

                                  render() {
                                    return (
                                      <div>
                                        <h1>Hello, world!</h1>
                                        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                                      </div>
                                    );
                                  }
                                }

                                ReactDOM.render(
                                  <Clock />,
                                  document.getElementById('root')
                                ); */}
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
                  <h4 id="subTitle_4-3">{ titles.chapter4.sub3 }</h4>
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
                                後ほど修正
                                {/* // Wrong
                                this.state.comment = 'Hello'; */}
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
                                後ほど修正
                                {/* // Wrong
                                this.setState({
                                  counter: this.state.counter + this.props.increment,
                                }); */}
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
                                後ほど修正
                                {/* // Correct
                                this.setState((state, props) => ({
                                  counter: state.counter + props.increment
                                })); */}
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
              <h3 id="mainTitle5">{ titles.chapter5.main }</h3>

              <div className="main-contents__subChapterBox">
                  <h4 id="subTitle_5-1">{ titles.chapter5.sub1 }</h4>
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
                                後ほど修正
                                {/* <button onClick={activateLasers}>
                                  Activate Lasers
                                </button> */}
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
                                後ほど修正
                                {/* <a href="#" onclick="console.log('The link was clicked.'); return false">
                                  Click me
                                </a> */}
                              </p>
                          </code>
                      </pre>
                      <p className="main-contents__sentences">
                        React では、preventDefault を呼び出す必要があります。
                      </p>
                      <pre className="main-contents__codeBox">
                          <code>
                              <p>
                                後ほど修正
                                {/* function ActionLink() {
                                  function handleClick(e) {
                                    e.preventDefault();
                                    console.log('The link was clicked.');
                                  }

                                  return (
                                    <a href="#" onClick={handleClick}>
                                      Click me
                                    </a>
                                  );
                                } */}
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
                                後ほど修正
                                {/* class Toggle extends React.Component {
                                  constructor(props) {
                                    super(props);
                                    this.state = {isToggleOn: true};

                                    // This binding is necessary to make `this` work in the callback
                                    this.handleClick = this.handleClick.bind(this);
                                  }

                                  handleClick() {
                                    this.setState(state => ({
                                      isToggleOn: !state.isToggleOn
                                    }));
                                  }

                                  render() {
                                    return (
                                      <button onClick={this.handleClick}>
                                        {this.state.isToggleOn ? 'ON' : 'OFF'}
                                      </button>
                                    );
                                  }
                                }

                                ReactDOM.render(
                                  <Toggle />,
                                  document.getElementById('root')
                                ); */}
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
                                後ほど修正
                                {/* class LoggingButton extends React.Component {
                                  handleClick = () => {
                                    console.log('this is:', this);
                                  }

                                  render() {
                                    return (
                                      <button onClick={this.handleClick}>
                                        Click me
                                      </button>
                                    );
                                  }
                                } */}
                              </p>
                          </code>
                      </pre>
                  </div>
              </div>

          </div>

          {/* --------   Chapter6   ----------------------------------------------------------------------------                    */}
          <div className="main-contents__chapterBox">
              <h3 id="mainTitle6">{ titles.chapter6.main }</h3>

              <div className="main-contents__subChapterBox">
                <h4 id="subTitle_6-1">{ titles.chapter6.sub1 }</h4>
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
                                後ほど修正
                                {/* const numbers = [1, 2, 3, 4, 5];
                                const listItems = numbers.map((number) =>
                                  <li>{number}</li>
                                );
                                ReactDOM.render(
                                  <ul>{listItems}</ul>,
                                  document.getElementById('root')
                                ); */}
                              </p>
                          </code>
                      </pre>
                      <p className="main-contents__sentences">
                        コンポーネントにするとこんな感じになります。
                      </p>
                      <pre className="main-contents__codeBox">
                          <code>
                              <p>
                                後ほど修正
                                {/* function NumberList(props) {
                                  const numbers = props.numbers;
                                  const listItems = numbers.map((number) =>
                                    <li>{number}</li>
                                  );
                                  return (
                                    <ul>{listItems}</ul>
                                  );
                                }

                                const numbers = [1, 2, 3, 4, 5];
                                ReactDOM.render(
                                  <NumberList numbers={numbers} />,
                                  document.getElementById('root')
                                ); */}
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
                                後ほど修正
                                {/* <li key={number.toString()}>
                                  {number}
                                </li> */}
                              </p>
                          </code>
                      </pre>
                  </div>
              </div>

              <div className="main-contents__subChapterBox">
                  <h4 id="subTitle_6-2">{ titles.chapter6.sub2 }</h4>
                  <div className="main-contents__indent">
                      <p className="main-contents__sentences">
                        Key は、どの要素が変更、追加もしくは削除されたのかを React が識別するのに役立ちます。
                        配列内の項目に安定した識別性を与えるため、それぞれの項目に key を与えるべきです。
                      </p>
                      <pre className="main-contents__codeBox">
                          <code>
                              <p>
                                後ほど修正
                                {/* const numbers = [1, 2, 3, 4, 5];
                                const listItems = numbers.map((number) =>
                                  <li key={number.toString()}>
                                    {number}
                                  </li>
                                ); */}
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
                                後ほど修正
                                {/* const todoItems = todos.map((todo) =>
                                  <li key={todo.id}>
                                    {todo.text}
                                  </li>
                                ); */}
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
                                後ほど修正
                                {/* function ListItem(props) {
                                  const value = props.value;
                                  return (
                                    // Wrong! There is no need to specify the key here:
                                    <li key={value.toString()}>
                                      {value}
                                    </li>
                                  );
                                }

                                function NumberList(props) {
                                  const numbers = props.numbers;
                                  const listItems = numbers.map((number) =>
                                    // Wrong! The key should have been specified here:
                                    <ListItem value={number} />
                                  );
                                  return (
                                    <ul>
                                      {listItems}
                                    </ul>
                                  );
                                }

                                const numbers = [1, 2, 3, 4, 5];
                                ReactDOM.render(
                                  <NumberList numbers={numbers} />,
                                  document.getElementById('root')
                                ); */}
                              </p>
                          </code>
                      </pre>
                      <p className="main-contents__sentences">
                        例： 正しい key の使用法
                      </p>
                      <pre className="main-contents__codeBox">
                          <code>
                              <p>
                                後ほど修正
                                {/* function ListItem(props) {
                                  return <li>{props.value}</li>;
                                }

                                function NumberList(props) {
                                  const numbers = props.numbers;
                                  const listItems = numbers.map((number) =>
                                    <ListItem key={number.toString()} value={number} />
                                  );
                                  return (
                                    <ul>
                                      {listItems}
                                    </ul>
                                  );
                                }

                                const numbers = [1, 2, 3, 4, 5];
                                ReactDOM.render(
                                  <NumberList numbers={numbers} />,
                                  document.getElementById('root')
                                );

                                const numbers = [1, 2, 3, 4, 5];
                                ReactDOM.render(
                                  <NumberList numbers={numbers} />,
                                  document.getElementById('root')
                                ); */}
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
                                後ほど修正
                                {/* const content = posts.map((post) =>
                                  <Post
                                    key={post.id}
                                    id={post.id}
                                    title={post.title} />
                                ); */}
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
              <h3 id="mainTitle7">{ titles.chapter7.main }</h3>

              <div className="main-contents__subChapterBox">
                  <h4 id="subTitle_7-1">{ titles.chapter7.sub1 }</h4>
                  <div className="main-contents__indent">
                      <p className="main-contents__sentences">
                        HTML では input、textarea、そして select のようなフォーム要素は通常、自身で状態を保持しており、ユーザの入力に基づいてそれを更新します。
                        React では、変更されうる状態はコンポーネントの state プロパティに保持され、setState() 関数でのみ更新されます。
                      </p>
                      <pre className="main-contents__codeBox">
                          <code>
                              <p>
                                後ほど修正
                                {/* class App extends React.Component {
                                  constructor(props) {
                                    super(props);
                                    this.state = {
                                      name: '',
                                      flavor: 'coconut',
                                      essay: 'Please write an essay about your favorite DOM element.',
                                    };

                                    this.handleChangeName = this.handleChangeName.bind(this);
                                    this.handleChangeFlavor = this.handleChangeFlavor.bind(this);
                                    this.handleChangeEssay = this.handleChangeEssay.bind(this);
                                    this.handleSubmit = this.handleSubmit.bind(this);
                                  }

                                  handleChangeName(event) {
                                    this.setState({name: event.target.value});
                                  }

                                  handleChangeFlavor(event) {
                                    this.setState({flavor: event.target.value});
                                  }

                                  handleChangeEssay(event) {
                                    this.setState({essay: event.target.value});
                                  }

                                  handleSubmit(event) {
                                    alert('A name was submitted: ' + this.state.name);
                                    alert('Your favorite flavor is: ' + this.state.flavor);
                                    alert('An essay was submitted: ' + this.state.essay);
                                    event.preventDefault();
                                  }

                                  render() {
                                    return (
                                      <form onSubmit={this.handleSubmit}>
                                        <label>
                                          Name:
                                          <input type="text" value={this.state.name} onChange={this.handleChangeName} />
                                        </label>
                                        <label>
                                          Pick your favorite flavor:
                                          <select value={this.state.flavor} onChange={this.handleChangeFlavor}>
                                            <option value="grapefruit">Grapefruit</option>
                                            <option value="lime">Lime</option>
                                            <option value="coconut">Coconut</option>
                                            <option value="mango">Mango</option>
                                          </select>
                                        </label>
                                        <label>
                                          Essay:
                                          <textarea value={this.state.essay} onChange={this.handleChangeEssay} />
                                        </label>
                                        <input type="submit" value="Submit" />
                                      </form>
                                    );
                                  }
                                } */}
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
                  <h4 id="subTitle_7-2">{ titles.chapter7.sub2 }</h4>
                  <div className="main-contents__indent">
                      <p className="main-contents__sentences">
                        複数の制御された input 要素を処理する必要がある場合、それぞれの入力要素に name 属性を追加すれば、
                        ハンドラ関数に event.target.name に基づいて処理を選択させるようにできます。
                      </p>
                      <pre className="main-contents__codeBox">
                          <code>
                              <p>
                                後ほど修正
                                {/* class App extends React.Component {
                                  constructor(props) {
                                    super(props);
                                    this.state = {
                                      name: '',
                                      flavor: 'coconut',
                                      essay: 'Please write an essay about your favorite DOM element.',
                                    };

                                    this.handleInputChange = this.handleInputChange.bind(this);
                                    this.handleSubmit = this.handleSubmit.bind(this);
                                  }

                                  handleInputChange(event) {
                                    const target = event.target;
                                    const value = target.value;
                                    const name = target.name;

                                    this.setState({
                                      [name]: value
                                    });
                                  }

                                  handleSubmit(event) {
                                    alert('A name was submitted: ' + this.state.name);
                                    alert('Your favorite flavor is: ' + this.state.flavor);
                                    alert('An essay was submitted: ' + this.state.essay);
                                    event.preventDefault();
                                  }

                                  render() {
                                    return (
                                      <form onSubmit={this.handleSubmit}>
                                        <label>
                                          Name:
                                          <input name="name" type="text" value={this.state.name} onChange={this.handleInputChange} />
                                        </label>
                                        <label>
                                          Pick your favorite flavor:
                                          <select name="flavor" value={this.state.flavor} onChange={this.handleInputChange}>
                                            <option value="grapefruit">Grapefruit</option>
                                            <option value="lime">Lime</option>
                                            <option value="coconut">Coconut</option>
                                            <option value="mango">Mango</option>
                                          </select>
                                        </label>
                                        <label>
                                          Essay:
                                          <textarea name="essay" value={this.state.essay} onChange={this.handleInputChange} />
                                        </label>
                                        <input type="submit" value="Submit" />
                                      </form>
                                    );
                                  }
                                } */}
                              </p>
                          </code>
                      </pre>
                  </div>
              </div>

          </div>

           {/* --------   Chapter8   ----------------------------------------------------------------------------                    */}
          <div className="main-contents__chapterBox">
              <h3 id="mainTitle8">{ titles.chapter8.main }</h3>

              <div className="main-contents__subChapterBox">
                  <h4 id="subTitle_8-1">{ titles.chapter8.sub1 }</h4>
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
                                後ほど修正
                                {/* function FancyBorder(props) {
                                  return (
                                    <div className={'FancyBorder FancyBorder-' + props.color}>
                                      {props.children}
                                    </div>
                                  );
                                }
                                function WelcomeDialog() {
                                  return (
                                    <FancyBorder color="blue">
                                      <h1 className="Dialog-title">
                                        Welcome
                                      </h1>
                                      <p className="Dialog-message">
                                        Thank you for visiting our spacecraft!
                                      </p>
                                    </FancyBorder>
                                  );
                                } */}
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
    );
  }
}

export default Content;
