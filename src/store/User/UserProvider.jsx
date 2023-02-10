import { useReducer } from "react";
import UserContext from "./user-context";

const initialState = {
    data: [],
}

const userReducer = (state, action) => {
    if (action.type === "LOAD") {
        return {
            data: action.payload,
        }
    }

    if (action.type === "ORDER") {
        let orderData = [...state.data];


        const attr = action.payload.value;
        const direction = action.payload.state;
        if (attr === "age") {
            if (direction === "up") {
                return {
                    data: orderData.sort((a, b) => parseInt(b[attr], 10) - parseInt(a[attr], 10))
                }
            }
            return {
                data: orderData.sort((a, b) => parseInt(a[attr], 10) - parseInt(b[attr], 10))
            }

        }

        if (direction === "up") {
            return {
                data: orderData.sort((a, b) => b[attr].localeCompare(a[attr]))
            }
        }
        return {
            data: orderData.sort((a, b) => a[attr].localeCompare(b[attr]))
        }

    }
    return state;
}

const UsersProvider = ({ children }) => {
    const [usersState, dispatchUsers] = useReducer(userReducer, initialState);

    const loadUsers = (data = []) => {
        dispatchUsers({ type: "LOAD", payload: data })
    }

    const orderBy = (value = "name") => {
        dispatchUsers({ type: "ORDER", payload: value })
    }

    const value = {
        users: usersState.data,
        loadUsers: loadUsers,
        orderBy: orderBy
    }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UsersProvider;
