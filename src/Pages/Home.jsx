import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import CraftItemSection from "../components/CraftItemSection";
import ArtCraftSection from "../components/ArtCraftSection";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import ArtGallery from "../components/ArtGallery";
import Review from "../components/Review";
import { GoStarFill } from "react-icons/go";
import { MdOutlineStarHalf } from "react-icons/md";
import Extra from "../components/Extra";


const Home = () => {

    const [arts, setArts] = useState([])

    const crafts = useLoaderData()

    useEffect(() => {

        fetch('http://localhost:5000/artSection')
            .then(res => res.json())
            .then(data => {
                setArts(data)
            })
    }, []);

    return (
        <div>
            <Helmet>
                <title>ArtHive || Home</title>
            </Helmet>
            <Banner></Banner>

            <Fade>
                <div className="mt-10">
                    <h2 className="text-3xl text-blue-400 font-bold text-center">Our Craft Items ! </h2>
                    <p className="text-center mt-4"> Explore a variety of beautifully crafted items that will spark your creativity and add a touch of charm to your projects. </p>
                </div>
            </Fade>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                {
                    crafts.slice(0, 6).map(craft => <CraftItemSection key={craft._id} craft={craft}></CraftItemSection>)
                }
            </div>
            <Fade>
                <div className="mt-14">
                    <h2 className="text-3xl text-blue-400 font-bold text-center">
                        Explore Art & Craft Subcategories</h2>
                    <p className="text-center mt-4">Dive into the world of creativity with our diverse range of art & craft subcategories. <br /> Each subcategory offers unique  opportunities for expression and discovery.</p>
                </div>
            </Fade>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                {
                    arts.slice(0, 6).map(art => <ArtCraftSection key={art._id} art={art}></ArtCraftSection>)
                }
            </div>

            <Fade>
                <div className="mt-14">
                    <h2 className="text-3xl text-blue-400 font-bold text-center">
                    OUR BRANDS !</h2>
                    <p className="text-center mt-4">From basketmakers to weavers and everything in between, we have got you <br /> covered. Browse the Directory to find artists from across the country and discover something new.</p>
                </div>
            </Fade>
            <ArtGallery></ArtGallery>
            <Extra></Extra>
            <Fade>
                <div className="mt-14 border-b-2 border-blue-300 pb-4">
                    <h2 className="text-3xl text-blue-400 font-bold text-center">
                    OUR CUSTOMERS REVIEWS</h2>
                    
                </div>
            </Fade>
           <div className="flex justify-center items-center gap-20">
            <div className="w-1/4 text-center">
                <h2 className="text-3xl font-bold mt-6 mb-2">Excellent</h2>
                <div className=" flex gap-1 justify-center text-blue-500 text-3xl">
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />   
                </div>
                <p className="mt-2">Based on 8,731 reviews</p>
                <div className="flex text-2xl justify-center text-blue-500 items-center gap-2">
                <GoStarFill />
                <p className="text-xl text-black font-bold">Trustpilot</p>
                </div>
            </div>
           <div className="w-3/4 ">
           <Review></Review>
           </div>
           </div>
        </div>
    );
};

export default Home;