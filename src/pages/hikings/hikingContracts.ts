export interface IHiking {
  id: string;
  name: string;
  daysTotal: number;
  membersTotal: number;
  userId: string;
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