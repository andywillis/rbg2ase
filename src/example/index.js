import RBGToASEConverter from '../index';

import data from './data';

const converter = new RBGToASEConverter();

converter
  .quantiseData(data, 12)
  .createAse()
  .writeAse();
