import UseAuth from "../Hooks/UseAuth";
import { useState, useEffect } from "react";


const MyArtCraftLists = () => {

  const {user}=UseAuth()
  const [crafts, setCrafts] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
   
    fetch(`http://localhost:5000/craftSection/email/${user?.email}`)
    .then(res=>res.json())
    .then(data=>{
      setCrafts(data)
    })
  }, [user]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };


  

    return (
      <div>
      <select value={filter} onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="yes">Customization: Yes</option>
        <option value="no">Customization: No</option>
      </select>
      <div className="card-container">
        {crafts
          .filter((craft) => {
            if (filter === "all") return true;
            return craft.customization === filter;
          })
          .map((craft) => (
            <div className="card" key={craft._id}>
              <img src={craft.photo} alt={craft.item_name} />
              <h3>{craft.item_name}</h3>
              <p>Price: {craft.price}</p>
              <p>Rating: {craft.rating}</p>
              <p>Customization: {craft.customization}</p>
              <p>Stock Status: {craft.
stock_status}</p>
              <button>Update</button>
              <button>Delete</button>
            </div>
          ))}
      </div>
    </div>
    );
};

export default MyArtCraftLists;