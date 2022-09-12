import fs from 'fs/promises';

import { createAse, quantizeData } from './lib';

export default class RBGToASEConverter {

  constructor() {
    this.errors = [];
  }

  quantiseData({ title, data }, size) {
    this.title = title;
    this.swatch = { title, data: quantizeData(data, size) };
    return this;
  }

  createAse() {
    this.ase = createAse(this.swatch);
    return this;
  }

  writeAse() {
    fs.writeFile(`${this.title}.ase`, this.ase);
  }

}
