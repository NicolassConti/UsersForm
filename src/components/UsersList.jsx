import React from 'react';

const UsersList = ({userslist, deleteUsers, selectUsers}) => {
    return (
        <div className='users-list'>
            <h1>Users List </h1>
            <ul>
                {userslist.map( user =>(
                    <li key = {user.id}>
                        
                        <h4><b> Firstname:</b>{user.first_name}</h4>
                        <div>
                        <b> Lastname :</b>{user.last_name}
                        </div>

                        <div>
                        <b> Email :</b>{user.email}
                        </div>

                        <div>
                        <b> Password: </b>{user.password}
                        </div>

                        <div>
                        <b> Birthday :</b>{user.birthday}
                        </div>
                        <button className='delete' onClick={() => deleteUsers(user)}>Delete</button>

                        <button className='select' onClick={() =>selectUsers(user)} >Select</button>

                     </li>
                

                ))}
            </ul>
        </div>
    );
};

export default UsersList;