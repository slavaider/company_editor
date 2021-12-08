import { IPerson } from "@store/model/PersonModel";
import { v4 } from "uuid";

import { PersonsActionTypes } from "../types";
import {
  ADD_PERSON,
  EDIT_PERSON,
  REMOVE_PERSON,
  SELECT_PERSON_ID,
} from "./actionTypes";

export function selectPerson(newId: string | null): PersonsActionTypes {
  return {
    type: SELECT_PERSON_ID,
    payload: newId,
  };
}

export function addPerson(newData: IPerson): PersonsActionTypes {
  return {
    type: ADD_PERSON,
    payload: {
      ...newData,
      id: v4(),
      birthday: new Date(newData.birthday.toString()),
    },
  };
}

export function editPerson(newData: IPerson): PersonsActionTypes {
  return {
    type: EDIT_PERSON,
    payload: {
      ...newData,
      birthday: new Date(newData.birthday.toString()),
    },
  };
}

export function removePerson(id: string | null): PersonsActionTypes {
  return {
    type: REMOVE_PERSON,
    payload: id,
  };
}
