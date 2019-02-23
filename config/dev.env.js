'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
	NODE_ENV: '"development"',
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
				'vue-style-loader',
				'css-loader',
				'sass-loader'
				]
			},
			{
				test: /\.pug$/,
				loader: 'pug-plain-loader'
			},
			{
				test: /\.yaml$/,
				loader: 'yaml-loader'
			},
		]
	},
})
