import { Fade } from "react-awesome-reveal";


const AddCraftItem = () => {
    return (
       <div className="bg-blue-400 p-8 mt-10">
         <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-white text-center"><Fade>Add Craft Items</Fade></h2>
        <form>
            <div className="mb-3">
                <label htmlFor="image" className="block font-medium text-white">Image URL</label>
                <input type="url" id="photo" name="photo" className="mt-1 block w-full rounded-md shadow-sm h-8 "/>
            </div>
            <div className="mb-3">
                <label htmlFor="item_name" className="block font-medium text-white">Item Name</label>
                <input type="text" id="item_name" name="item_name" className="mt-1 block w-full rounded-md shadow-sm h-8"/>
            </div>
            <div className="mb-3">
                <label htmlFor="subcategory_name" className="text-white block font-medium">Subcategory Name</label>
                <input type="text" id="subcategory_name" name="subcategory_name" className="mt-1 block w-full  rounded-md shadow-sm h-8"/>
            </div>
            <div className="mb-3">
                <label htmlFor="short_description" className="block font-medium text-white">Short Description</label>
                <textarea id="short_description" name="short_description" rows="3" className="mt-1 block w-full  rounded-md shadow-sm "></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="price" className="block font-medium text-white">Price</label>
                <input type="number" id="price" name="price" step="0.01" className="mt-1 block w-full  rounded-md shadow-sm h-8"/>
            </div>
            <div className="mb-3">
                <label htmlFor="rating" className="block font-medium text-white">Rating</label>
                <input type="number" id="rating" name="rating" step="0.1" className="mt-1 block w-full  rounded-md shadow-sm h-8"/>
            </div>
            <div className="mb-3">
                <label htmlFor="customization" className="block font-medium text-white">Customization</label>
                <select id="customization" name="customization" className="mt-1 block w-full  rounded-md shadow-sm h-8">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="processing_time" className="block font-medium text-white">Processing Time</label>
                <input type="text" id="processing_time" name="processing_time" className="mt-1 block w-full  rounded-md shadow-sm h-8"/>
            </div>
            <div className="mb-3">
                <label htmlFor="stock_status" className="block font-medium text-white">Stock Status</label>
                <select id="stock_status" name="stock_status" className="mt-1 block w-full  rounded-md shadow-sm h-8">
                    <option value="In stock">In stock</option>
                    <option value="Made to Order">Made to order</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="user_email" className="block font-medium text-white">User Email</label>
                <input type="email" id="user_email" name="user_email" className="mt-1 block w-full  rounded-md shadow-sm h-8"/>
            </div>
            <div className="mb-3">
                <label htmlFor="user_name" className="block font-medium text-white">User Name</label>
                <input type="text" id="user_name" name="user_name" className="mt-1 block w-full  rounded-md shadow-sm h-8"/>
            </div>
            <div className="mb-3 flex justify-center">
                <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Add</button>
            </div>
        </form>
    </div>
       </div>
    );
};

export default AddCraftItem;