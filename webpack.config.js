const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')  //HTMLを生成するためのplugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

//絶対パスを設定
const outputPath = path.resolve(__dirname, 'dist')

module.exports = {
  //モジュールバンドルの対象をentryで設定
  entry: './src/js/index.js',
  //jsのバンドルしたファイルの出力先を指定
  output: {
    filename: 'main.js',
    path: outputPath
  },
  module:{
    rules:[ //rule,loaderは下から動く
      {
        enforce: "pre",         //ruleの順番を無視して、最も早く実行する
        test: /\jsx?$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,  //transfileの対象から外す
        loader: "babel-loader"    //モダンがjsの記法をブラウザが解釈できる記法にトランスファイルする
      },
      {
        test: /\.(sc|c)ss$/,  //loaderを適用させるファイルの拡張子を指定
        use:[
          MiniCssExtractPlugin.loader,  //cssを別ファイルに出力する
          // 'style-loader',   //jsに埋め込まれたcssをhtmlのstyleタグに加える
          'css-loader',      //cssをjsのコードとして扱えるようにする
          'sass-loader'     //sassをcssに変換
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,  //?は前の文字の有無を含む。/iは大文字許容
        loader:'url-loader',           //画像データをbase64エンコードして、jsで扱えるようにする
        options:{                     //optionsを追加することでfile-loaderを有効化できる
          limit: 2048,                  //2kbを超えるファイルにfile-loaderを適用
          name: './images/[name].[ext]'
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'  //reactによるUIを埋め込む丈のhtmlの雛形を利用するために必要
      }
    ]
  },
  //webpack-dev-server起動時のrootディレクトリを指定
  devServer:{
    contentBase: outputPath
  },
  plugins:[
    new HtmlWebPackPlugin({
      template: './src/index.html',    //htmlの雛形を設定
      filename: './index.html'         //雛形をベースに出力するファイル
    }),
    new MiniCssExtractPlugin({
      //[name] はデフォルトでmainが適用される
      //[hash] はユニークな値がてきようされ、ブラウザにキャッシュされることを回避する。更新を適用させるため
      filename: '[name].[hash].css'
    })
  ],
  optimization:{
    minimizer: [ new UglifyJsPlugin({
      uglifyOptions:{
        compress:{  //trueでconsole.logをビルド時に削除してくれる
          drop_console: true
        }
      }
    }),
    //cssの圧縮
    new OptimizeCSSAssetsPlugin({})
   ]
  },
  //バンドル前後の対応を管理するファイルをマップファイルという
  //マップファイルがバンドル前のエラー箇所を教えてくれる
  devtool: 'eval-source-map'
}