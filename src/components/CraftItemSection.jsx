import { FaCheckCircle, FaCogs, FaStar, FaTimesCircle } from "react-icons/fa";
import { Link } from "react-router-dom";


const CraftItemSection = ({ craft }) => {

    const { 
        photo,
        item_name,
        subcategory_name,
        short_description,
        price,
        rating,
        customization,
        processing_time,
        stock_status,
        } = craft;


    return (
        <div className="card bg-blue-100 shadow-xl p-4 rounded-lg">
        <img src={photo} className="w-full h-72 mb-4 rounded-md" alt={item_name} />
        <h2 className="text-xl font-semibold mb-2">{item_name}</h2>
        <p className="text-gray-600 mb-2">{subcategory_name}</p>
        <p className="text-base mb-4">{short_description}</p>
        <div className="flex justify-between items-center mb-4">
            <p className="text-lg font-semibold">${price}</p>
            <div className="flex items-center">
                <FaStar className="text-yellow-500" />
                <span className="ml-2">{rating} stars</span>
                <span className="ml-4">{customization ? "Customizable" :  "Not customizable"}</span>
            </div>
        </div>
        <p className="text-sm text-gray-500 mb-2">Processing Time: {processing_time}</p>
        <p className={`text-sm ${stock_status === 'In Stock' ? 'text-green-500' : 'text-red-500'}`}>
            {stock_status === 'In Stock' ? <><FaCheckCircle className="text-green-500" /> {stock_status}</> : <><FaTimesCircle className="text-red-500" /> {stock_status}</>}
        </p>
        <Link to="details">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
                View Details
            </button>
        </Link>
    </div>
    );
};

export default CraftItemSection;