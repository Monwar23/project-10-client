import { Bounce, Slide } from "react-awesome-reveal";
import {  FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const CraftItemSection = ({ craft }) => {

    const { 
        _id,
        photo,
        item_name,
        subcategory_name,
        short_description,
        rating,
        } = craft;


    return (
        <Slide direction="left">
            <div className="card relative bg-blue-100 shadow-xl p-4 rounded-lg transition-transform hover:scale-105">
              
                    <img src={photo} className="w-full h-72 mb-4 rounded-md" alt={item_name} />
                <h2 className="text-xl font-semibold mb-2">{item_name}</h2>
                <p className="text-gray-600 mb-2">{subcategory_name}</p>
                <p className="text-base mb-4">{short_description}</p>
                <div className="flex items-center">
                    <Bounce>
                        <FaStar className="text-yellow-500" />
                    </Bounce>
                    <span className="ml-2">{rating} </span>
                </div>
                <Link to={`/details/${_id}`}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl mt-2">
                        View Details
                    </button>
                </Link>
            </div>
        </Slide>
    );
};

export default CraftItemSection;