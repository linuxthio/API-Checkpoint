import { useEffect, useState } from "react";
import axios from "axios";
import User from "./User";
import { Link } from "react-router-dom";

const UserList = () => {
  const [listOfUSer,setUser] = useState([]);
  
  useEffect(()=>{
      axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
          // handle success
        //   console.log(response.data);
        if (response.status===200){
            setUser(response.data)
        }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
        
    },[])

  return <div className="lists">
    {listOfUSer.map((u) =>  <div key={u.id}  className="user-list"> <User  user={u}/><Link className="link-detail" to={'/detail'} state={{user:u}}>Details...</Link></div>)}
  </div>;
};


export default UserList