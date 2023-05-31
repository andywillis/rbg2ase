import fs from 'fs/promises';

import { createAse, quantizeData } from './lib/index.js';
// import quantizeData from './lib/quantizeData.js';

/**
 * RBGToASEConverter
 *
 * @class RBGToASEConverter
 */
class RBGToASEConverter {

	constructor(path = './') {
		this.path = path;
		this.errors = [];
	}

	getAse() {
		return this.ase;
	}

	createAse({ title, data }, size) {
		this.title = title;
		this.swatch = { title, data: quantizeData(data, size) };
		this.ase = createAse(this.swatch);
		return this;
	}

	async writeFile(path) {
		await fs.writeFile(`${path}/${this.title}.ase`, this.ase);
		console.log(`${this.title}: file written to ${path}`);
	}

	async writeAse({ path = './' }) {
		try {
			await fs.access(path);
			this.writeFile(path);
		} catch (err) {
			console.log(`Creating output folder: ${path}`);
			await fs.mkdir(path);
			this.writeFile(path);
		}
	}

}

export default RBGToASEConverter;
