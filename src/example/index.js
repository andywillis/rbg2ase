import RBGToASEConverter from '../index';

import rootname from '../../rootname';

import data from './data';

const converter = new RBGToASEConverter();

converter.createAse(data, 12);
converter.writeAse({ path: `${rootname}/ase` });
