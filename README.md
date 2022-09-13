# rgb2ase

RGB array to ASE file converter

## Installation

`pnpm add rgb2ase`

## Usage

- `const converter = new Rgb2Ase();` - create a new converter instance

- `createAse()` accepts an object with shape `{ title: string, data: number[][] }`, and a size (default `12`).

- `getAse()` (optional) to get the contents of the ASE buffer.

- `writeAse()` - writes a new file using the `title` passed into the `quantizeData` method. `writeAse` accepts an options object: `{ path: string }`).

## In full

```
const converter = new Rgb2Ase();

converter.createAse(data, 12)
converter.writeAse({ path: './' });

const ase = converter.getAse();

## Licence

[![CC BY-NC-SA 4.0][cc-by-nc-sa-shield]][cc-by-nc-sa]

This work is licensed under a
[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License][cc-by-nc-sa].

[![CC BY-NC-SA 4.0][cc-by-nc-sa-image]][cc-by-nc-sa]

[cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/4.0/
[cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg
