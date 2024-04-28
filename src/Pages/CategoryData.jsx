import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {  FaStar } from 'react-icons/fa';
import 'animate.css';
import { Fade } from 'react-awesome-reveal';


const CategoryData = () => {
    const { subcategory_name } = useParams();
    const [arts, setArts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/craftSection/subcategory_name/${subcategory_name}`)
            .then(res => res.json())
            .then(arts => {
                setArts(arts);
            })
    }, [subcategory_name]);

    return (
        <div className='mt-10'>
           <Fade>
           <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">{subcategory_name}</h2>
           </Fade>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6  ">
                {arts.map((art) => (
                    <div key={art._id} className="bg-white rounded-lg shadow-md p-4 animate__animated animate__fadeInRight">
                        <img src={art.photo} alt={art.item_name} className="w-full h-72 object-cover mb-4 rounded-md" />
                        <h3 className="text-xl font-semibold mb-2 text-blue-900">{art.item_name}</h3>
                        <p className="text-gray-700 mb-2">Category: {art.subcategory_name}</p>
                        <p className="text-gray-700 mb-2">Description: {art.short_description}</p>
                        <p className="text-gray-700 mb-2">Price: {art.price}</p>
                        <p className="text-gray-700 mb-2 flex items-center">
                            <FaStar className="mr-1 text-yellow-400" /> Rating: {art.rating}
                        </p>
                        <p className="text-gray-700 mb-2">Processing Time: {art.processing_time}</p>
                        <div className="flex justify-center items-center">
                            <Link to={`/details/${art._id}`}>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mr-4">
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

export default CategoryData;
