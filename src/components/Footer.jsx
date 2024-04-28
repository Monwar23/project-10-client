import { Fade } from "react-awesome-reveal";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdDraw } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer py-10 px-20 bg-blue-200 text-base-content mt-20">
            <aside>
                <MdDraw className="text-6xl text-blue-600"></MdDraw>
                <Link to="/" className="text-xl font-medium text-black"><span className="font-bold text-blue-600">Art</span>Hive</Link>
                <div className="flex gap-2 mt-10">
                    <FaFacebookF className="text-lg text-black"></FaFacebookF>
                    <FaTwitter className="text-lg text-black"></FaTwitter>
                    <FaInstagram className="text-lg text-black"></FaInstagram>
                    <FaLinkedin className="text-lg text-black"></FaLinkedin>
                </div> 
    <p className="mt-6 text-black"><Fade>Copyright © 2024 - All right reserved</Fade></p>
            </aside>
            <nav className="text-black">
                <h6 className="footer-title">SERVICES</h6>
                <a className="link link-hover">Add Craft Item</a>
                <a className="link link-hover">All Art & Craft Items</a>
                <a className="link link-hover">My Art & Craft List</a>
            </nav>
            <nav className="text-black">
                <h6 className="footer-title">THE MARKETPLACE</h6>
                <a className="link link-hover">ArtHub</a>
                <a className="link link-hover">ArtHub Canada</a>
                <a className="link link-hover">ForDraw</a>
                <a className="link link-hover">ForPaint</a>
                <a className="link link-hover">Art & Craft</a>
            </nav>
            <nav className="text-black">
                <h6 className="footer-title">CONTACT US</h6>
                <a className="link link-hover text-lg">ArtHub@Paint.com</a>
                <a className="link link-hover">+61 0481 224 883</a>
                <a className="link link-hover">12 Houseton Street,New-York,<br />CA 9020,USA</a>
            </nav>
        </footer>
    );
};

export default Footer;
