import {
  ADD_PERSON,
  EDIT_PERSON,
  REMOVE_PERSON,
  SELECT_PERSON_ID,
} from "../actions/actionTypes";
import { IPersons, PersonsActionTypes } from "../types";
import mockPersons from "./mockPersons";

export const initialState: IPersons = {
  persons: mockPersons,
  selectedPersonId: null,
};

export default function personsReducer(
  state = initialState,
  action: PersonsActionTypes | undefined
): IPersons {
  switch (action?.type) {
    case SELECT_PERSON_ID: {
      return {
        ...state,
        selectedPersonId: action.payload,
      };
    }
    case ADD_PERSON: {
      return {
        selectedPersonId: action?.payload.id,
        persons: [...state.persons, action?.payload],
      };
    }
    case EDIT_PERSON: {
      const newPersons = [...state.persons];

      const index = newPersons.findIndex(
        (person) => person.id === state.selectedPersonId
      );
      newPersons[index] = action?.payload;

      return {
        ...state,
        persons: newPersons,
      };
    }
    case REMOVE_PERSON: {
      const newPersons = [...state.persons];
      const index = newPersons.findIndex(
        (person) => person.id === state.selectedPersonId
      );
      newPersons.splice(index, 1);
      return {
        selectedPersonId: null,
        persons: newPersons,
      };
    }
    default:
      return state;
  }
}
