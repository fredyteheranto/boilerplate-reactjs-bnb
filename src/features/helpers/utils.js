const valueWit = 1000000000000000000;

export const convertWeitToBnb = (val) => {
  return val / valueWit;
};
export const converBnbToWeit = (val) => {
  return val * valueWit;
};
