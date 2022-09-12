import fs from 'fs/promises';

import quantize from 'quantize';

import createAse from './lib/createAse';
import data from './example/data';

// export default function rgb2AdobeSwatch(obj, callback) {
//   processData(obj)
//     .then(getQuantizedData())
//     .then(createAse())
//     .done(callback());
// }

class RGB2ASE {

  constructor({ title, data }, size) {
    this.title = title;
    this.data = data;
    this.size = size;
  }

  init() {
    this.swatch = {
      title: this.title,
      data: this.quantizeData(this.size)
    };
    this.ase = createAse(this.swatch);
    this.writeFile(this.ase);
  }

  quantizeData(size) {
    const cmap = quantize(this.data, size || 12);
    const set = new Set(this.data.map(p => cmap.map(p)));
    return [ ...set ];
  }

  writeFile(ase) {
    fs.writeFile(`${this.title}.ase`, ase);
  }

}

const rgb2ase = new RGB2ASE(data, 12);
rgb2ase.init();
