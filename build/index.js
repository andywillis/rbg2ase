import quantize from 'quantize';
import data from './example/data';
// export default function rgb2AdobeSwatch(obj, callback) {
//   processData(obj)
//     .then(getQuantizedData())
//     .then(createAse())
//     .done(callback());
// }
class RGB2ASE {
    data;
    swatchData;
    constructor({ title, data }) {
        console.log(title);
        this.data = data;
        this.swatchData = { title };
    }
    quantizeData(size) {
        const cmap = quantize(this.data, size || 12);
        console.log(cmap);
        // const set = new Set(this.rgbData.map(p => cmap.map(p)));
        // this.swatchData.data = [ ...set ];
    }
}
const rgb2ase = new RGB2ASE(data);
rgb2ase.quantizeData(12);
