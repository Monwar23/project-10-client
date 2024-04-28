import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import CraftItemSection from "../components/CraftItemSection";
import ArtCraftSection from "../components/ArtCraftSection";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";


const Home = () => {

    const [arts,setArts]=useState([])

    const crafts=useLoaderData()

    useEffect(() => {

        fetch('http://localhost:5000/artSection')
          .then(res => res.json())
          .then(data => {
            setArts(data)
          })
      }, []);

    return (
        <div>
        <Banner></Banner>

        <Fade>
        <div className="mt-10">
            <h2 className="text-3xl text-blue-400 font-bold text-center">Welcome to our Craft Items section! </h2>
            <p className="text-center mt-4"> Explore a variety of beautifully crafted items that will spark your creativity and add a touch of charm to your projects. </p>
        </div>
        </Fade>
       
       <div className="grid md:grid-cols-2 gap-5 mt-10">
       {
            crafts.slice(0,6).map(craft=> <CraftItemSection key={craft._id} craft={craft}></CraftItemSection> )
        }
       </div>
       <Fade>
        <div className="mt-14">
            <h2 className="text-3xl text-blue-400 font-bold text-center">
Explore Art & Craft Subcategories</h2>
            <p className="text-center mt-4">Dive into the world of creativity with our diverse range of art & craft subcategories. Each subcategory offers unique opportunities for expression and discovery.</p>
        </div>
        </Fade>
       <div className="grid md:grid-cols-2 gap-5 mt-10">
        {
            arts.slice(0,6).map(art=><ArtCraftSection key={art._id} art={art}></ArtCraftSection>)
        }
       </div>
        </div>
    );
};

export default Home;