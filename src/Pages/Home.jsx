import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import CraftItemSection from "../components/CraftItemSection";


const Home = () => {

    const crafts=useLoaderData()

    return (
        <div>
        <Banner></Banner>
       
       <div className="grid md:grid-cols-2 gap-5 mt-10">
       {
            crafts.slice(0,6).map(craft=> <CraftItemSection key={craft._id} craft={craft}></CraftItemSection> )
        }
       </div>
        </div>
    );
};

export default Home;