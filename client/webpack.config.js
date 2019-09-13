const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
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
        publicPath: '/',
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
                        options: {
                            modules: true,
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: path.join(__dirname, 'postcss.config.js')
                            }
                        }
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
            {
                loader: 'file-loader',
                test: /\.svg$/,
                options: {
                    name: c.devMode
                        ? '[name].[ext]'
                        : '[name]-[hash].[ext]'
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['./dist/**']
        }),
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
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'dist'),
        stats: {
            assets: false,
            chunks: false
        }
    }
};