import { IEating } from "./eatings/eatingContracts";

export interface IHiking {
  id: string;
  name: string;
  daysTotal: number;
  membersTotal: number;
  userId: string;
  eatings: IEating[];
}

export interface IGetHikingsPayload {
  page: number;
}

export interface IHikingCreatePayload {
  name: string;
  daysTotal: number;
  membersTotal: number;
  userId: string;
}
