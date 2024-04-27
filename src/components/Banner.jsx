
const Banner = () => {
    return (
        <div className=" carousel w-full h-96 my-10">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/pdh33qT/pexels-curiosophotography-288100.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide7" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
          <div className="absolute bottom-14 left-0 right-0 text-center text-white">
            <p className="font-bold text-3xl mb-4 uppercase">Discover Tranquility Amidst Nature</p>
            <p>Escape the hustle and bustle of city life and immerse yourself in the serene beauty of our mountain retreats.</p>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/hM41M3h/pexels-jessef11-732548.jpg
" className="w-full"/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
          <div className="absolute bottom-14 left-0 right-0 text-center text-white">
            <p className="font-bold text-3xl mb-4 uppercase">Explore the World of Abstract Expressionism</p>
            <p>Unleash your creativity and immerse yourself in the captivating world of artistry with our exclusive collection of workshops and classes.</p>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/v4zHGNP/pexels-lum3n-44775-167699.jpg
" className="w-full"/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
          <div className="absolute bottom-14 left-0 right-0 text-center text-white">
            <p className="font-bold text-3xl mb-4 uppercase">Discover the Magic of Mixed Media</p>
            <p>Dive into the exciting realm of mixed media artistry where you can experiment with a variety of materials and techniques to create stunning .</p>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/2gqD4HQ/pexels-troy-squillaci-1303476-4842909.jpg
" className="w-full"/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide5" className="btn btn-circle">❯</a>
          </div>
          <div className="absolute bottom-14 left-0 right-0 text-center text-white">
            <p className="font-bold text-3xl mb-4 uppercase">Master the Art of Watercolor</p>
            <p>Embark on a watercolor adventure and learn the techniques and skills needed to bring your visions to life with fluidity and grace.</p>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src="
https://i.ibb.co/bzYpS6G/pexels-maria-argiroudaki-838140423-19780613.jpg" className="w-full"/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide6" className="btn btn-circle">❯</a>
          </div>
          <div className="absolute bottom-14 left-0 right-0 text-center text-white">
            <p className="font-bold text-3xl mb-4 uppercase">Express Yourself Through Abstract Art</p>
            <p> Break free from traditional constraints and embrace the liberating world of abstract art. Explore unconventional methods of expression and discover the joy of creating artwork that speaks to the soul.</p>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/vHxsmPg/pexels-pok-rie-33563-1045850.jpg
" className="w-full"/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide5" className="btn btn-circle">❮</a>
            <a href="#slide7" className="btn btn-circle">❯</a>
          </div>
          <div className="absolute bottom-14 left-0 right-0 text-center text-white">
            <p className="font-bold text-3xl mb-4 uppercase">Elevate Your Skills with Advanced Oil Painting Techniques</p>
            <p>Take your oil painting skills to new heights with our advanced techniques workshops. Explore the richness and depth of oil paints as you delve into concepts such as impasto, glazing, and alla prima. </p>
          </div>
        </div>
        <div id="slide7" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/yqfrGrP/pexels-philippe-serrand-337910945-19789717.jpg" className="w-full"/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide6" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
          <div className="absolute bottom-14 left-0 right-0 text-center text-white">
            <p className="font-bold text-3xl mb-4 uppercase">Master the Art of Scenic Painting</p>
            <p>Immerse yourself in the beauty of the natural world and learn to capture its majesty on canvas. From rolling hills to picturesque sunsets.</p>
          </div>
        </div>
      </div>
    );
};

export default Banner;