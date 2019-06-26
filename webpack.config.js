const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, "./src/index.tsx"),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: "bundle.js",
    },
   
    // デバッグ用にソースマップの出力を有効にします。
    devtool: "source-map",
   
    resolve: {
      // 解決可能な拡張子として、'.ts' と '.tsx' を追加します。
      extensions: [".ts", ".tsx", ".js", ".json"]
    },  
    module: {
      rules: [
        // 拡張子が .ts と .tsx のファイル を 'awesome-typescript-loader' で扱うようにします。
        { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
   
        // 出力されるすべての .js ファイルは、'source-map-loader' で再加工されたソースマップを持ちます。
        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
      ]
    }
}