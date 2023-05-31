import quantize from 'quantize';

/**
 * quantizeData
 *
 * @param {array} data
 * @param {number} [size=12]
 * @return {array}
 */
function quantizeData(data, size = 12) {
	const cmap = quantize(data, size);
	const set = new Set(data.map(p => cmap.map(p)));
	return [...set];
}

export default quantizeData;
