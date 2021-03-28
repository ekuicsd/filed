import * as  UserDeatilsAction from "./user-details.action";

const initialState = {
  users: []
}

export function UserDetailsReducers(state = initialState, action: UserDeatilsAction.AddUser) {
  switch (action.type) {
    case UserDeatilsAction.ADD_USER: return {
      ...state, users: [...state.users, action.payload]
    }
    default: return state;
  }
}