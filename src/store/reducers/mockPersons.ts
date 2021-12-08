import { Position } from "@store/model/PersonModel";
import { v4 } from "uuid";

export default [
  {
    id: v4(),
    username: "Jhon",
    birthday: new Date(1990, 1, 1),
    gender: false,
    position: Position.junior,
    retired: false,
    collages: ["Female"],
  },
  {
    id: v4(),
    username: "Jhon2",
    birthday: new Date(1990, 1, 1),
    gender: false,
    position: Position.junior,
    retired: false,
    collages: [],
  },
  {
    id: v4(),
    username: "Female",
    birthday: new Date(1990, 1, 1),
    gender: true,
    position: Position.junior,
    retired: true,
    collages: [],
  },
  {
    id: v4(),
    username: "Jhon4",
    birthday: new Date(1990, 1, 1),
    gender: false,
    position: Position.junior,
    retired: false,
    collages: [],
  },
];
