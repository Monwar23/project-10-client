import { BsPencilSquare, BsTrash } from "react-icons/bs";
import UseAuth from "../Hooks/UseAuth";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdCheckbox, IoMdCheckboxOutline } from "react-icons/io";
import { RiPriceTag3Line } from "react-icons/ri";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Swal from "sweetalert2";


const MyArtCraftLists = () => {

  const { user } = UseAuth()
  const [crafts, setCrafts] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {

    fetch(`http://localhost:5000/craftSection/email/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setCrafts(data)
      })
  }, [user]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };


  const handleDelete = _id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {


        fetch(`http://localhost:5000/craftSection/${_id}`,{
          method:'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          })
      }
    });
  }



  return (
    <div className="container mx-auto mt-10">
      <div className="flex justify-center mt-4 mb-8">
        <select
          value={filter}
          onChange={handleFilterChange}
          className="p-2 rounded border mr-2"
        >
          <option value="all">All</option>
          <option value="yes">Customization: Yes</option>
          <option value="no">Customization: No</option>
        </select>
      </div>
      <div className="grid lg:grid-cols-2 gap-4">
        {crafts
          .filter((craft) => {
            if (filter === "all") return true;
            return craft.customization === filter;
          })
          .map((craft) => (
            <div
              key={craft._id}
              className="relative overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <img
                src={craft.photo}
                alt={craft.item_name}
                className="w-full h-96 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">{craft.item_name}</h3>
                <div className="flex items-center">
                  {craft.rating >= 1 ? (
                    <AiFillStar className="text-yellow-500 mr-1" />
                  ) : (
                    <AiOutlineStar className="text-yellow-500 mr-1" />
                  )}
                  {craft.rating >= 2 ? (
                    <AiFillStar className="text-yellow-500 mr-1" />
                  ) : (
                    <AiOutlineStar className="text-yellow-500 mr-1" />
                  )}
                  {craft.rating >= 3 ? (
                    <AiFillStar className="text-yellow-500 mr-1" />
                  ) : (
                    <AiOutlineStar className="text-yellow-500 mr-1" />
                  )}
                  {craft.rating >= 4 ? (
                    <AiFillStar className="text-yellow-500 mr-1" />
                  ) : (
                    <AiOutlineStar className="text-yellow-500 mr-1" />
                  )}
                  {craft.rating >= 5 ? (
                    <AiFillStar className="text-yellow-500 mr-1" />
                  ) : (
                    <AiOutlineStar className="text-yellow-500 mr-1" />
                  )}
                </div>
                <p className="text-gray-600 flex items-center">
                  <span className="mr-1">
                    {craft.customization === "yes" ? (
                      <FaToggleOn className="text-green-500" />
                    ) : (
                      <FaToggleOff className="text-red-500" />
                    )}
                  </span>
                  Customization
                </p>
                <p className="text-gray-600">
                  <RiPriceTag3Line className="text-gray-600 mr-1 inline-block" />
                  Price: {craft.price}
                </p>
                <p className="text-gray-600 flex items-center">
                  <span className="mr-1">
                    {craft.stock_status === "available" ? (
                      <IoMdCheckbox className="text-green-500" />
                    ) : (
                      <IoMdCheckboxOutline className="text-red-500" />
                    )}
                  </span>
                  Stock Status: {craft.stock_status}
                </p>
                <div className="absolute bottom-4 right-4 flex">
                  <Link >
                    <button className="mr-2 text-blue-500 hover:text-blue-600 transition duration-300">
                      <BsPencilSquare />
                      <span className="tooltip">Edit</span>
                    </button>
                  </Link>
                  <button onClick={() => {
                    handleDelete(craft._id)
                  }} className="text-red-500 hover:text-red-600 transition duration-300">
                    <BsTrash />
                    <span className="tooltip">Delete</span>
                  </button>
                </div>
                <Link to={`/details/${craft._id}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded-2xl">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MyArtCraftLists;