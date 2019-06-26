const countDecimals = (num) => {
  if (Math.floor(num.valueOf()) === num.valueOf()) return 0;
  return num.toString().split(".")[1].length || 0;
}

export const calculateTypeSize = (base, multiplier) => base * multiplier;

export const calculateFontSizeEms = (typeScaleValue, numDecimals, round) => `${roundOutput(typeScaleValue, numDecimals, round)}em`;

export const calculateFontSizePx = (baseSizeValue, numDecimals, round=false) => `${roundOutput(baseSizeValue, numDecimals, round)}px`;

export const roundOutput = (val, decimals, round=false) => {
  if (round) {
    return Math.round(val)
  } else {
    return (countDecimals(val) > decimals ? val.toFixed(decimals) : val)
  }
};

