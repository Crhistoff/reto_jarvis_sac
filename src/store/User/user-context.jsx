import { createContext } from "react";

const UserContext = createContext({
    users: [],
    loadUsers: () => { },
    orderBy: () => { }
});

export default UserContext;