import User from "./User";
import { useLocation } from "react-router";

const Detail = () => {
  const user = useLocation().state.user;
  console.log(user);

  return (
    <div className="detail">
      <User className="detail-user" user={user} />
      <fieldset >
        <legend>Adresse</legend>
        <p>
          <span>City</span>
          <span>{user.address.city}</span>
        </p>
        <p>
          <span>Rue</span>
          <span>{user.address.street}</span>
        </p>
        <p>
          <span>Suite</span>
          <span>{user.address.suite}</span>
        </p>
        <p>
          <span>Zipcode</span>
          <span>{user.address.zipcode}</span>
        </p>
        <fieldset>
          <legend>Localisation geographique</legend>
          <p>
            <span>Lat</span>
            <span>{user.address.geo.lat}</span>
          </p>
          <p>
            <span>Lng</span>
            <span>{user.address.geo.lng}</span>
          </p>
        </fieldset>
      </fieldset>
      <fieldset>
          <legend>Compagnie</legend>
          <p>
            <span>Name</span>
            <span>{user.company.name}</span>
          </p>
          <p>
            <span>catchPhrase</span>
            <span>{user.company.catchPhrase}</span>
          </p>
            <p>
            <span>bs</span>
            <span>{user.company.bs}</span>
          </p>
        </fieldset>

    </div>
  );
};

export default Detail;
/**
{
  "id": 2,
  "name": "Ervin Howell",
  "username": "Antonette",
  "email": "Shanna@melissa.tv",
  "address": {
    "street": "Victor Plains",
    "suite": "Suite 879",
    "city": "Wisokyburgh",
    "zipcode": "90566-7771",
    "geo": {
      "lat": "-43.9509",
      "lng": "-34.4618"
    }
  },
  "phone": "010-692-6593 x09125",
  "website": "anastasia.net",
  "company": {
    "name": "Deckow-Crist",
    "catchPhrase": "Proactive didactic contingency",
    "bs": "synergize scalable supply-chains"
  }
}
 */
