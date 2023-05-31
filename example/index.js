import RBGToASEConverter from '../src/index.js';

import data from './data.js';

const converter = new RBGToASEConverter();

converter.createAse(data, 12);
converter.writeAse({ path: './ase' });
