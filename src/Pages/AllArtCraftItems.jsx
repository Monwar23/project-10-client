import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";

const AllArtCraftItems = () => {
    const crafts = useLoaderData();

    return (
        <div>
             <Helmet>
                <title>ArtHive || All Art & Craft Item</title>
            </Helmet>
            <Fade>
            <div className="container mx-auto py-8">
                <h2 className="text-3xl font-bold mb-8 text-center text-blue-500">All Art and Craft Items</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 text-left border text-blue-500">Item Name</th>
                                <th className="px-4 py-2 text-left border text-blue-500">Description</th>
                                <th className="px-4 py-2 text-left border text-blue-500">Category</th>
                                <th className="px-4 py-2 text-left border text-blue-500">Price</th>
                                <th className="px-4 py-2"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {crafts.map((craft, index) => (
                                <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                                    <td className="border px-4 py-2 text-black">{craft.item_name}</td>
                                    <td className="border px-4 py-2 text-black">{craft.short_description}</td>
                                    <td className="border px-4 py-2 text-black">{craft.subcategory_name}</td>
                                    <td className="border px-4 py-2 text-black">${craft.price}</td>
                                    <td className="border px-4 py-2 text-black">
                                        <Link to={`/details/${craft._id}`}>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                                                <span className="text-blue-100">View Details</span>
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Fade>
        </div>
    );
};

export default AllArtCraftItems;
