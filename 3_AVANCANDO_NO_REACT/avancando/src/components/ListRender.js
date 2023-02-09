import { useState } from 'react';
 
const ListRender = () => {

    const [list] = useState(["Dani", "Bob", "Felipe"]);

    const [users, setUsers] = useState([
        { id: 1, name: "Matheus", age: 31 },
        { id: 2, name: "Jones", age: 19 },
        { id: 3, name: "Scorpion", age: 201 },
      ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber!== user.id);
        });
    };

    return (
        <div>
            <ul>   
                {list.map((item, i) =>( //Utilização de key por index, pratica pouco usada por gerar bug's pois usa a posição i da array 
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => ( //Utilização de key por id unica a array, pratica mais utilizada por gerar uma key unica para aquele elemento idependentemente de sua posição na array.
                    <li key={user.id}>
                    {user.name} - {user.age}                
                </li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete random user</button>
        </div>
    )
}

export default ListRender