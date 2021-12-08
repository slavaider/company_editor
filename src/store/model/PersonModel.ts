export enum Position {
  junior = "junior",
  middle = "middle",
  senior = "senior",
}

export interface IPerson {
  id: string;
  username: string;
  position: Position;
  birthday: Date;
  gender: boolean;
  retired: boolean;
  collages: string[];
}
