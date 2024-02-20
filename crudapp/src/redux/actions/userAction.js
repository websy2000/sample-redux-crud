import { ActionTypes } from "../actiontypes";
import { getUsers, getUserById, AddUserData, updateUserById } from "../../services/service";


export const UserAction = () => {
    return async (dispatch) => {
        const data = await getUsers();
        dispatch({ type: ActionTypes.GET_USERS, resp: data });
    }
}

export const userDetailsById = (id) => {
    return async (dispatch) => {
        const data = await getUserById(id);
        dispatch({ type: ActionTypes.GET_USER_BY_ID, dataById: data });
    }
}

export const AddNewUserToUsers = (name, email, password, avatar) => {
    return async (dispatch) => {
        const data = await AddUserData(name, email, password, avatar);
        dispatch({ type: ActionTypes.CREATE_USER, createUser: data });
    }

}

export const updateUserByData = (id, editEmail, editName) => {
    return async (dispatch) => {
        const data = await updateUserById(id, editEmail, editName);
        dispatch({ type: ActionTypes.UPDATE_USER, user: data })
    }
}