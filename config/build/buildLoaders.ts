import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const assetLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        type: 'asset/resource',
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: /\.module\./,
                        localIdentName: options.isDev
                            ? '[name]__[local]'
                            : '[hash:base64:8]',
                    },
                },
            },
            'sass-loader',
        ],
    };
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        assetLoader,
        cssLoader,
        tsLoader,
        svgLoader,
    ];
}
