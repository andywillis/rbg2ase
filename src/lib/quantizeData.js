import quantize from 'quantize';

export default function quantizeData(data, size) {
  const cmap = quantize(data, size || 12);
  const set = new Set(data.map(p => cmap.map(p)));
  return [ ...set ];
}
