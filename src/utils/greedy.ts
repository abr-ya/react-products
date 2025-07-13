import { getArraySum } from "./common";

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

export const packsToUsers = (packs: Array<number[]>) => {
  const usersPacks: Array<number[]> = Array.from({ length: packs[0].length }, () => []);

  packs.forEach((day) => {
    usersPacks.sort((a: number[], b: number[]) => getArraySum(a) - getArraySum(b));
    usersPacks.forEach((user, index) => user.push(day[index]));
  });

  return usersPacks;
};
