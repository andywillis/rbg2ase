# rgb2ase

RGB array to ASE file converter

## Installation

`pnpm add Rgb2Ase`

## Usage

1) Create a new converter instance

`const converter = new Rgb2Ase();`

2) Quantize the data

`quantizeData()` accepts an object with shape `{ title: string, data: number[][] }`, and a size.

3) Write an ASE file

`writeAse()`

### In full

```
converter
  .quantiseData(data, 12)
  .createAse()
  .writeAse();
```

## Licence

[![CC BY-NC-SA 4.0][cc-by-nc-sa-shield]][cc-by-nc-sa]

This work is licensed under a
[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License][cc-by-nc-sa].

[![CC BY-NC-SA 4.0][cc-by-nc-sa-image]][cc-by-nc-sa]

[cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/4.0/
[cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg
