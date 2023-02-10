import { useContext, useState } from "react";
import UserContext from "../store/User/user-context";
import classes from "./List.module.css";
import OrderButton from "./OrderButton";

const List = () => {
    const { users } = useContext(UserContext);
    const [headers, setHeaders] = useState({
        name: { value: "name", state: "up" },
        lastName: { value: "lastName", state: "up" },
        age: { value: "age", state: "up" },
        gender: { value: "gender", state: "up" },
        email: { value: "email", state: "up" },
        nat: { value: "nat", state: "up" },
    })

    const handleChangeHeader = (key) => {
        setHeaders((prev) => (
            {
                ...prev,
                [key]: {
                    value: key,
                    state: prev[key].state === "up" ? "down" : "up",
                }
            }
        ));
    }
    return (
        <div className={classes.container}>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th>N
                        </th>
                        <th>
                            <div>Nombre <OrderButton onChange={handleChangeHeader} value={headers.name} /></div>
                        </th>
                        <th><div>Apellido  <OrderButton onChange={handleChangeHeader} value={headers.lastName} /></div></th>
                        <th><div>Edad  <OrderButton onChange={handleChangeHeader} value={headers.age} /></div></th>
                        <th><div>Genero  <OrderButton onChange={handleChangeHeader} value={headers.gender} /></div></th>
                        <th><div>Email  <OrderButton onChange={handleChangeHeader} value={headers.email} /></div></th>
                        <th><div>Nacionalidad  <OrderButton onChange={handleChangeHeader} value={headers.nat} /></div></th>
                        <th>Foto</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id}>
                            <td className={classes.num_order}>{++index}</td>
                            <td>{user.name}</td>
                            <td>{user.lastName}</td>
                            <td>{user.age}</td>
                            <td>{user.gender}</td>
                            <td>{user.email}</td>
                            <td>{user.nat}</td>
                            <td className={classes.image_container}>
                                <img src={user.photo} alt={user.name} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default List;
