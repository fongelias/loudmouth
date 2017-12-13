//Dependencies
import babel from 'rollup-plugin-babel';
import localResolve from 'rollup-plugin-local-resolve';

//Module
export default {
	entry: 'src/index.js',
	format: 'cjs',
	dest: 'loudmouth.js',
	plugins: [
		localResolve(),
		babel({
			exclude: 'node_modules/**',
		}),
	],
};