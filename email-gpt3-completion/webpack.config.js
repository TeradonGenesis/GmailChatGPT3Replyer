const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    publicPath: '',
    path: path.resolve(__dirname, "..", "extension"),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          
          options: {
            "presets": [
                "@babel/preset-env",
               ["@babel/preset-react", {"runtime": "automatic"}]
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
