import { ActionTypes } from "../actiontypes";

const initialState = {
  getAllUserData: [],
  getUserDataById: {}
}


export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_USERS:
      return {
        ...state,
        getAllUserData: action.resp
      }

    case ActionTypes.GET_USER_BY_ID:
      return {
        ...state,
        getUserDataById: action.dataById
      }

    case ActionTypes.CREATE_USER:
      return {
        ...state,
        getAllUserData: [...state.getAllUserData, action.createUser]
      }

    case ActionTypes.UPDATE_USER:
      const filterUpdatedData = state.getAllUserData.map(users => users.id === action.user.id ? { ...users, email: action.user.email, name: action.user.name } : users);
      return {
        ...state,
        getAllUserData: filterUpdatedData
      }

    default:
      return state

  }
}

