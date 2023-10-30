


const User=({user})=>{
    console.log('user',user)

    return <div className="user">
        <p><span>Prenom</span><span>{user.username}</span></p>
        <p><span>Nom</span><span>{user.name}</span></p>
        <p><span>Email</span><span>{user.email}</span></p>
        <p><span>Telephone</span><span>{user.phone}</span></p>
    </div>
}

export default User
/**
 *   "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
 */