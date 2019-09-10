const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const c = require('./config');
const tsconfig = path.join(__dirname, 'tsconfig.json');

module.exports = {
    mode: 'development',
    context: __dirname,
    entry: [
        '@babel/polyfill',
        path.join(__dirname, 'src/index.tsx')
    ],
    node: {
        __dirname: true,
        __filename: true
    },
    optimization: {
        minimize: true
    },
    output: {
        filename: 'index.js',
        chunkFilename: '[id].js?v=' + c.v,
        path: path.join(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.jsx', '.css'],
        plugins: [
            new TSConfigPathsPlugin({
                baseUrl: 'src',
                configFile: tsconfig
            })
        ]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: { modules: true }
                    }
                ]
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: { compact: false }
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    configFile: tsconfig
                }
            },
            {
                loader: 'url-loader',
                test: /\.(woff2?)|(ttf)$/,
                options: {
                    name: c.devMode
                        ? '[name].[ext]'
                        : '[name]-[hash].[ext]'
                }
            },
        ]
    },
    plugins: [
        new CopyPlugin([
            {
                from: 'src/index.html'
            },
            {
                flatten: true,
                from: 'assets/img/favicon.ico'
            }
        ])
    ],
    devServer: {
        port: 9009,
        compress: true,
        contentBase: path.join(__dirname, 'dist'),
        stats: {
            assets: false,
            chunks: false
        }
    }
};