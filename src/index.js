import { addFolder, writeFile, pathExists } from './lib/io';

import { createAse, quantizeData } from './lib';

export default class RBGToASEConverter {

  constructor() {
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

  async writeAse({ path = './' }) {
    if (!await pathExists(path)) await addFolder(path);
    writeFile(`${path}/${this.title}.ase`, this.ase);
  }

}
