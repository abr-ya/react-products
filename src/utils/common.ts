export const strCut = (str: string, n: number) => {
  if (!str) return "";
  if (str.length <= n) return str;

  return `${str.substring(0, n)}...`;
};

export const getArraySum = (data: number[]) => data.reduce((acc, el) => acc + el, 0);

export const getArray1ToN = (length: number) => Array.from({ length }, (_, i) => i + 1);
