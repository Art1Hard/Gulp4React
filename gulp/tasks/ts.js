import webpack from "webpack-stream";

export const ts = () => {
	return app.gulp.src(app.path.src.ts, { sourcemaps: app.isDev })
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "TS",
				message: "Error: <%= error.message %>"
			})
		))
		.pipe(webpack({
			mode: app.isBuild ? 'production' : 'development',
			module: {
				rules: [
					{
						test: /\.tsx?$/,
						use: 'ts-loader',
						exclude: /node_modules/,
					},
					{
						test: /\.jsx?$/,
						exclude: /node_modules/,
						use: {
							loader: 'babel-loader',
							options: {
								presets: [
									'@babel/preset-env',
									'@babel/preset-react',
									'@babel/preset-typescript'
								]
							}
						}
					},
					{
						test: /\.css$/,
						use: ['style-loader', 'css-loader']
					}
				]
			},
			resolve: {
				extensions: ['.tsx', '.ts', '.js', '.jsx']
			},
			output: {
				filename: `app.min.js`
			}
		}))
		.pipe(app.plugins.replace(/@img\//g, 'img/'))
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(app.plugins.browsersync.stream());
}