const path = require('path')

module.exports = {
	entry: './src/index.ts', // файл который подается на вход
	mode: 'production', // в каком режиме делать сборку
	output: {
		filename: 'index.js', // что подается на выход
		path: path.resolve(__dirname, 'dist'), // путь к папке где будет сборка приложения
		clean: true, // папка при каждой сборке будет очищаться
		libraryTarget: 'umd' // позволяет пользователям использовать обычный импорт или require
	},


	// настройки импорта
	resolve: {
		extensions: ['.ts', '.tsx'] // import './Button.tsx - импорт без этой настройки. import './Button.ts - с настройкой 
	},

	// модули которые нужно исключить из бандла
	externals: {
		react: 'react'
	},

	// установка лоадеров. Сначала пишем регулярное выражение чтобы найти файлы с нужным расширением, затем указываем лоадер для него
	// в exclude пишем исключения
	module: {
		rules: [
			{
				test: /\.css/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(ts|tsx)?$/,
				use: ['ts-loader'],
				exclude: /node_modules/
			},

		]
	}
}