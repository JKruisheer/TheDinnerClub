import React, {useState, useEffect} from 'react'
import UserService from '../services/userService';


const UserComponent = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        UserService.getUsers().then(users =>{
            console.log(users.data)
            setUsers(users.data);
        })
    },[]);

    return (
        <div>
            <h1 className="text-center"> Users List </h1>
            <table className = "table table-striped">
                <thead>
                    <tr>
                        <td>User Id</td>
                        <td>User first Name</td>
                        <td>User Last name</td>
                        <td>User Email Id</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => 
                            <tr key = { user.id}>
                                <td>{user.id}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UserComponent
