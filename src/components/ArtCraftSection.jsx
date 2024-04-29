import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

const ArtCraftSection = ({ art }) => {
    const {
        _id,
        photo,
        item_name,
        subcategory_name,
        short_description,
    } = art;

    return (
      <Fade>
          <Link to={`/subcategory_name/${subcategory_name}`}>
        <div className="relative rounded-lg overflow-hidden shadow-lg border border-gray-300 transition-transform hover:scale-105">
            <img src={photo} alt={item_name} className="w-full h-60 object-cover" />
            <div className="px-6 py-4">
              <div className='font-bold text-xl mb-2 text-blue-600'>
              <Typewriter  
                    words={[item_name]} 
                    loop={false} 
                    cursor
                    cursorStyle='_'
                    typeSpeed={100} 
                    deleteSpeed={50} 
                    delaySpeed={2000} 
                    onLoop={() => console.log('Typewriter looped')}
                />
              </div>
                <p className=" text-sm">{short_description}</p> 
                <p className="text-purple-700 text-base mt-2">Category : {subcategory_name}</p>
            </div>
        </div>
        </Link>
      </Fade>
    );
};

export default ArtCraftSection;
