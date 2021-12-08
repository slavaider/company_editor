import { IPerson } from "@store/model/PersonModel";

import {
  ADD_PERSON,
  EDIT_PERSON,
  REMOVE_PERSON,
  SELECT_PERSON_ID,
} from "./actions/actionTypes";

// Store

export interface IPersons {
  persons: IPerson[];
  selectedPersonId: null | string;
}

// Actions

interface ISelectPerson {
  type: typeof SELECT_PERSON_ID;
  payload: string | null;
}

interface IAddPerson {
  type: typeof ADD_PERSON;
  payload: IPerson;
}

interface IEditPerson {
  type: typeof EDIT_PERSON;
  payload: IPerson;
}
interface IRemovePerson {
  type: typeof REMOVE_PERSON;
  payload: string | null;
}

export type PersonsActionTypes =
  | ISelectPerson
  | IAddPerson
  | IEditPerson
  | IRemovePerson;
