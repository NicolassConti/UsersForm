import React, { useEffect, useState } from 'react';


const UsersForm = ({addUsers, usersSelected, updateUser}) => {

    const [firstname, setFirstname] = useState ("")
    const [lastname, setLastname]= useState ("")
    const [email, setEmail]=useState ("")
    const [password, setPassword]=useState ("")
    const [birthday, setBirthday]=useState ("")

    useEffect(() => {
        if(usersSelected !== null) {
            setFirstname(usersSelected?.first_name)
            setLastname(usersSelected?.last_name)
            setEmail(usersSelected?.email)
            setPassword(usersSelected?.password)
            setBirthday(usersSelected?.birthday)
        } else{
            setFirstname("")
            setLastname("")
            setEmail("")
            setPassword("")
            setBirthday("")
        }

    }, [usersSelected])

    const submit = e => {
        e.preventDefault();

        const user = {
            id : Date.now(), 
            first_name : firstname,
            last_name : lastname,
            email : email,
            password : password,
            birthday: birthday
         }

        console.log(user)
        if(usersSelected){
            updateUser(user)
        } else{
            addUsers(user)
            setFirstname("")
            setLastname("")
            setEmail("")
            setPassword("")
            setBirthday("")
        }
        
    }
    return (
        <form onSubmit={submit}>

             <h1>Users Form</h1>

           <div>
               <label htmlFor='firstname'>Firstname : </label>
                <input type="text" id = "firstname"  value={firstname} onChange={e =>setFirstname(e.target.value)} required></input>
           </div>

           <div>
               <label htmlFor='lastname'>Lastname : </label>
                <input type="text" id = "lastname" value={lastname} onChange={e =>setLastname(e.target.value)} required></input>
           </div>

           <div>
               <label htmlFor='email'>Email : </label>
                <input type="text" id = "email"  value={email} onChange={e =>setEmail(e.target.value)} required></input>
           </div>
           
           <div>
               <label htmlFor='password'>Password : </label>
                <input type="password" id = "password" value={password} onChange={e =>setPassword(e.target.value)} required></input>
           </div>

           <div>
               <label htmlFor='birthday'>Birthday : </label>
                <input type="date" id = "birthday" value={birthday} onChange={e =>setBirthday(e.target.value)} required></input>
           </div>
           <br/>

             <button>Upload</button>
           
           
           


            

            
        </form>
    );
};

export default UsersForm;