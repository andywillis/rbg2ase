# rgb2ase

RGB array to ASE file converter.

## Disclaimer

Please note the core code was for this package was written in 2012 and was tested with a version of Adobe Illustrator that was available at that time. The author cannot guarantee that it still works properly today.

## Installation

`pnpm add rgb2ase`

## Usage

- `const converter = new Rgb2Ase();` - create a new converter instance

- `createAse()` accepts an object with shape `{ title: string, data: number[][] }`, and a size (default `12`).

- `getAse()` (optional) to get the contents of the ASE buffer.

- `writeAse()` - writes a new file using the `title` passed into the `quantizeData` method. `writeAse` accepts an options object: `{ path: string }`).

## In full

```
import Rgb2Ase from 'rgb2ase';

const converter = new Rgb2Ase();

converter.createAse(data, 12)
converter.writeAse({ path: './' });

const ase = converter.getAse();
```

## Example

This runs an example of the code using the data in `./data`, and adding an output file (`Mordred.ase`) to the `./example/ase` folder, creating one if it doesn't exist.

```
cd example
node index.js
```