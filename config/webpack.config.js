// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const path = require('path')

// eslint-disable-next-line no-undef
module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, '../dist/umd'),
    filename: 'index.js',
    library: '@cloudaffle/mongoose-faker',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.ts(x*)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: 'config/tsconfig.umd.json',
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx'],
  },
}
