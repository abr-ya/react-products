import { getPackSum } from "./common";

export interface IProductPack {
  name: string;
  value: number;
}

export const oneDayToPacks = (weights: IProductPack[], numPacks: number) => {
  weights.sort((a, b) => b.value - a.value);
  const packs: Array<IProductPack[]> = Array.from({ length: numPacks }, () => []);
  const packWeights = Array(numPacks).fill(0);

  for (const weight of weights) {
    const minIndex = packWeights.indexOf(Math.min(...packWeights));
    packs[minIndex].push(weight);
    packWeights[minIndex] += weight.value;
  }

  return packs;
};

export const packsToUsers = (packs: Array<IProductPack[]>) => {
  const usersPacks: Array<IProductPack[]> = Array.from({ length: packs[0].length }, () => []);

  packs.forEach((day) => {
    day.sort((a: IProductPack, b: IProductPack) => b.value - a.value);
    usersPacks.sort((a: IProductPack[], b: IProductPack[]) => getPackSum(a) - getPackSum(b));
    usersPacks.forEach((user, index) => user.push(day[index]));
  });

  return usersPacks;
};
