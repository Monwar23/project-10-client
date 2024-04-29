import { Fade } from "react-awesome-reveal";
import UseAuth from "../Hooks/UseAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";



const AddCraftItem = () => {

    const { user } = UseAuth() || {}

    const handleAddCraft = e => {
        e.preventDefault()

        const form = e.target;
        const photo = form.photo.value
        const item_name = form.item_name.value
        const subcategory_name = form.subcategory_name.value
        const short_description = form.short_description.value
        const price = form.price.value
        const rating = form.rating.value
        const customization = form.customization.value
        const processing_time = form.processing_time.value
        const stock_status = form.stock_status.value
        const email = user.email
        const name = user.displayName

        const info = { photo, item_name, subcategory_name, short_description, price, rating, customization, processing_time, stock_status, email, name }
        console.log(info);

        fetch('https://project-10-server-gray.vercel.app/addArt&Craft', {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.insertedId) {
                    toast('Craft Item Added Successfully')
                }
                form.reset()
            })

    }



    return (
        <div>
             <Helmet>
                <title>ArtHive || Add Craft Item</title>
            </Helmet>
            <div className=" p-8 mt-10 " style={{ backgroundImage: `url(https://i.ibb.co/ydc4L4r/pexels-polina-kovaleva-6109124.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', }}>
            <div className="lg:max-w-5xl max-w-xl mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-white text-center"><Fade>Add Craft Item</Fade></h2>
                <form onSubmit={handleAddCraft}>
                    <div className="grid lg:grid-cols-2 gap-x-10">
                        <div className="mb-3">
                            <label htmlFor="image" className="block font-medium text-white">Image URL</label>
                            <input type="url" id="photo" name="photo" placeholder="Image URL" className="mt-1 block w-full rounded-md border-4 border-blue-400 shadow-sm h-10 px-2" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="item_name" className="block font-medium text-white">Item Name</label>
                            <input type="text" id="item_name" name="item_name" placeholder="Item Name" className="mt-1 block w-full rounded-md shadow-sm h-10 px-2 border-4 border-blue-400" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="subcategory_name" className="text-white block font-medium">Subcategory Name</label>
                            <select id="subcategory_name" name="subcategory_name" className="mt-1 block w-full rounded-md shadow-sm h-10 px-2 border-4 border-blue-400">
                                <option value="Landscape Painting">Landscape Painting</option>
                                <option value="Portrait Drawing">Portrait Drawing</option>
                                <option value="Portrait Canvas">Portrait Canvas</option>
                                <option value="Watercolour Painting">Watercolour Painting</option>
                                <option value="Oil Painting">Oil Painting</option>
                                <option value="Charcoal Sketching">Charcoal Sketching</option>
                                <option value="Cartoon Drawing">Cartoon Drawing</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="short_description" className="block font-medium text-white">Short Description</label>
                            <textarea id="short_description" name="short_description" placeholder="Short Description" rows="3" className="mt-1 block w-full  rounded-md shadow-sm px-2 border-4 border-blue-400"></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="block font-medium text-white">Price</label>
                            <input type="number" id="price" name="price" placeholder="Price" step="0.01" className="mt-1 block w-full  rounded-md shadow-sm h-10 px-2 border-4 border-blue-400" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="rating" className="block font-medium text-white">Rating</label>
                            <input type="number" id="rating" name="rating" placeholder="Rating" step="0.1" className="mt-1 block w-full  rounded-md shadow-sm h-10 px-2 border-4 border-blue-400" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="customization" className="block font-medium text-white">Customization</label>
                            <select id="customization" name="customization" className="mt-1 block w-full  rounded-md shadow-sm h-10 px-2 border-4 border-blue-400">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="processing_time" className="block font-medium text-white">Processing Time</label>
                            <input type="text" id="processing_time" name="processing_time" placeholder="Processing Time" className="mt-1 block w-full  rounded-md shadow-sm h-10 px-2 border-4 border-blue-400" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="stock_status" className="block font-medium text-white">Stock Status</label>
                            <select id="stock_status" name="stock_status" className="mt-1 block w-full  rounded-md shadow-sm h-10 px-2 border-4 border-blue-400">
                                <option value="In stock">In stock</option>
                                <option value="Made to Order">Made to order</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="user_email" className="block font-medium text-white">User Email</label>
                            <input type="email" id="email" name="email" defaultValue={user.
                                email} readOnly className="mt-1 block w-full  rounded-md shadow-sm h-10 px-2 border-4 border-blue-400" />
                        </div>
                        

                    </div>
                 
                  <div className="mb-3">
                        <label htmlFor="name" className="block font-medium text-white">User Name</label>
                        <input type="text" id="name" name="name" defaultValue={user.displayName} readOnly className="mt-1 block w-full  rounded-md shadow-sm h-10 px-2 border-4 border-blue-400" />
                  </div>
                    <div className="mb-3 flex justify-center">
                        <button type="submit" className="bg-blue-600 text-white py-2 px-5 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 mt-10">Add</button>
                    </div>
                </form>
                <ToastContainer></ToastContainer>
            </div>
        </div>
        </div>
    );
};

export default AddCraftItem;