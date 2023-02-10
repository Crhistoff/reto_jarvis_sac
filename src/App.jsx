import { useContext, useEffect, useState } from 'react';
import classes from "./App.module.css";
import UserContext from './store/User/user-context';
import { v4 as uuidv4 } from "uuid";

function App() {
  const { users, loadUsers } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [responseError, setResponseError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("https://randomuser.me/api/?results=15");
      if (!response.ok) {
        throw new Error("Algo salio mal...");
      }
      const data = await response.json();
      if (!data) {
        throw new Error("Data no encontrada...");
      }
      const loadedData = [];
      for (const user of data.results) {
        loadedData.push({
          id: uuidv4(),
          name: user.name.first,
          lastName: user.name.last,
          age: user.registered.age,
          gender: user.gender,
          email: user.email,
          nat: user.nat.toUpperCase(),
          photo: user.picture.medium
        })
      }
      loadUsers(loadedData);
      setIsLoading(false);
    }

    fetchUsers().catch((error) => {
      setIsLoading(false);
      setResponseError(error.message);
    });
  }, [])

  if (isLoading) {
    return (<div>
      <h1>Loading...</h1>
    </div>)
  }

  if (responseError) {
    return (<div>
      <h1>{responseError}</h1>
    </div>)
  }

  return (
    <div className={classes.app}>
    </div>
  )
}

export default App