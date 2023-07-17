/**
 * Auxiliary function to truncateNumber.
 * Divides the given value by 10**zeros and reformats
 * the value to a format with a suffix representing
 * order of magnitude. Example 1234 -> 1.2k.
 * @param {number} value - Value that is formatted.
 * @param {number} zeros - default: 3. 
 * @param {string} suffix - default: 'k' 
 * @returns {string}
 */
const nonScientificNotation = (value, zeros=3, suffix='k') => {
  const divider = 10**zeros;
  const fixedValue = (value/divider).toFixed(1).toString();
  // check if the number has .0, if so, remove the zero
  return fixedValue.split('.')[1] === '0'
    ? fixedValue.split('.')[0].concat(suffix)
    : fixedValue.concat(suffix);
};

/**
 * Uses function nonScientificNotation() to reformat
 * given value to a truncated string version with
 * order of magnitude represented by a letter.
 * For example: 1234 -> 1.2k or 1234567 -> 1.2M.
 * @param {number} value - Integer to be truncated. 
 * @returns {string}
 */
export const truncateNumber = value => {
  if (value >= 1000 && value < 1e6) {
    return nonScientificNotation(value);
  } else if (value >= 1e6 && value < 1e9) {
    return nonScientificNotation(value, 6, 'M');
  } else if (value >= 1e9 && value < 1e12) {
    return nonScientificNotation(value, 9, 'G');
  } else if (value >= 1e12 && value < 1e15) {
    return nonScientificNotation(value, 12, 'T');
  } else {// (value < 1000) {
    return "∞";
  } 
};
