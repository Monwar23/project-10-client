import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ArtCraftSection = ({ art }) => {
    const {
        _id,
        photo,
        item_name,
        subcategory_name,
        short_description,
    } = art;

    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const textToType = item_name;
        const interval = setInterval(() => {
            if (index < textToType.length) {
                setText((prevText) => prevText + textToType.charAt(index));
                setIndex((prevIndex) => prevIndex + 1);
            } else {
                clearInterval(interval);
            }
        }, 100); 

        return () => clearInterval(interval);
    }, [index, item_name]);

    return (
        <Link to={`/subcategory_name/${subcategory_name}`}>
        <div className="rounded overflow-hidden shadow-lg border border-gray-300">
            <img src={photo} alt={item_name} className="w-full h-72 object-cover" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-blue-600">{text}</div>
                <p className=" text-sm">{short_description}</p> 
                <p className="text-purple-700 text-base mt-2">Category : {subcategory_name}</p>
            </div>
        </div>
        </Link>
    );
};

export default ArtCraftSection;
