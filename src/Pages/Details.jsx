import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import { AiFillClockCircle, AiFillStar } from "react-icons/ai";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { BsCircleFill } from "react-icons/bs";
import Reveal from "react-awesome-reveal";
import { Helmet } from "react-helmet";

const Details = () => {


    const craft = useLoaderData()

    const {
        photo,
        item_name,
        subcategory_name,
        short_description,
        rating,
        customization,
        processing_time,
        stock_status

    } = craft;

    return (
        <div>
             <Helmet>
                <title>ArtHive || Details</title>
            </Helmet>
            <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg"
    >
        <Reveal cascade damping={0.2} direction="up">
            <h1 className="text-3xl font-semibold mb-4">{item_name}</h1>
            <img src={photo} alt={item_name} className="mb-4 rounded-lg" />
            <p className="text-gray-700 mb-2">Category: {subcategory_name}</p>
            <p className="text-gray-700 mb-2">Description: {short_description}</p>
            <div className="flex items-center mb-2">
                <AiFillStar className="text-yellow-500 mr-1" />
                <p className="text-gray-700">Rating: {rating}</p>
            </div>
            <p className="text-gray-700 mb-2">Customization: {customization}</p>
            <div className="flex items-center mb-2">
                <AiFillClockCircle className="text-blue-500 mr-1" />
                <p className="text-gray-700">Processing Time: {processing_time}</p>
            </div>
            <div className="flex items-center mb-2">
                {stock_status ? (
                    <IoIosCheckmarkCircle className="text-green-500 mr-1" />
                ) : (
                    <BsCircleFill className="text-red-500 mr-1" />
                )}
                <p className="text-gray-700">
                    Stock Status: {stock_status ? "In Stock" : "Out of Stock"}
                </p>
            </div>
        </Reveal>
    </motion.div>
        </div>
    );
};

export default Details;