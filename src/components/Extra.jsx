import { Link } from "react-router-dom";


const Extra = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mt-14 p-4">
            <figure className="">
                <div className="h-96 carousel carousel-vertical rounded-box">
                    <div className="carousel-item h-full w-80">
                        <img src="https://i.ibb.co/M1QNC4K/il-1080x-N-3444718759-6z6p.jpg" />
                    </div>
                    <div className="carousel-item h-full w-80">
                        <img src="https://i.ibb.co/Ht94dNP/Watercolour-Painting-Sunlit-Garden-Views-8df99d93-f34e-40ff-9b0c-3d1f1c6f9b5b.jpg" />
                    </div>
                    <div className="carousel-item h-full w-80">
                        <img src="https://i.ibb.co/QN57WgD/images-q-tbn-ANd9-Gc-Tue-YJ1-F7m-J0-Nx-QYoka-ZHBu-Uxgiy7gm-YFMs4go-LJOBLew-s.jpg" />
                    </div>
                    <div className="carousel-item h-full w-80">
                        <img src="https://i.ibb.co/YXwX5Cd/images-q-tbn-ANd9-Gc-Qnp-IQJ5-B33-Tuq-DTVt-Va4-Ll24qt-Tg-Sjf-Ql4-Hi-Q4-LTw-Ai-Q-s.jpg" />
                    </div>
                </div>
            </figure>
            <div className="card-body grid lg:grid-cols-2 gap-6 w-2/3">
                <Link to="/login" className="flex gap-6">
                    <img className="rounded-lg" src="https://i.ibb.co/q7GnZYv/home-account.png" alt="" />
                    <div className="">
                    <h2 className="text-lg font-bold">Login to your profile</h2>
                    <p>Check your Art and Craft items, view details and modify your item and delete item. Not registered yet? Do it now!</p>
                    </div>
                </Link>
                <Link className="flex gap-6">
                    <img className="rounded-lg" src="https://i.ibb.co/GVLjVxk/home-trovarci.png" alt="" />
                    <div className="">
                    <h2 className="text-lg font-bold">Come to visit us</h2>
                    <p>We are in New York, USA, 10 kms far from New York Airport, Milan and Lake Como. Plan a visit on your next American vacation!</p>
                    </div>
                </Link>
                <Link className="flex gap-6">
                    <img className="rounded-lg" src="https://i.ibb.co/CPb8drT/home-giftcard.png" alt="" />
                    <div className="">
                    <h2 className="text-lg font-bold">Buy a gift card</h2>
                    <p>Not sure what to give? Get a gift card, its valid on all of our products! Available starting from $5.00!</p>
                    </div>
                </Link>
                <Link className="flex gap-6">
                    <img className="rounded-lg" src="https://i.ibb.co/h7r45dF/home-spedizioni.png" alt="" />
                    <div className="">
                    <h2 className="text-lg font-bold">Express deliveries</h2>
                    <p>We ship globally, with the very best shipping forwarders: your order will arrive fast and safely packaged!</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Extra;