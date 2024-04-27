// import { Helmet } from 'react-helmet';
import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {

    const {createUser}= UseAuth()
    const location=useLocation()
    const navigate=useNavigate()


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [showPassword, setShowPassword] = useState(false)

    const onSubmit = data => {
        const { email, password, } = data;

        if (
            !/(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password)
        ) {
            toast.error(
                "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
            );
            return;
        }

        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success("Registration successful!");

                setTimeout(()=>{
                    navigate(location?.state? location.state:'/')
                },3000)

                    
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message);
            })

    }

    return (
        <div>
            {/* <Helmet>
                <title>ArtHive || Register</title>
            </Helmet> */}
            <div className="relative overflow-hidden bg-gray-900 rounded-lg shadow-lg p-14 my-10">
                <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(https://i.ibb.co/2PdSp86/pexels-nickcollins-3006340.jpg)` }}></div>
                <div className="hero-overlay absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10">
                    <h2 className="text-white font-bold text-center text-3xl mb-8">Register Now !</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
                        <div className="mb-4">
                            <label className="text-white">Name</label>
                            <input type="text" placeholder="Name" className="input input-bordered w-full" {...register("Name", { required: true })} />
                            {errors.Name && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="mb-4">
                            <label className="text-white">Photo URL</label>
                            <input type="text" placeholder="Photo URL" className="input input-bordered w-full" {...register("image", { required: true })} />
                            {errors.image && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="mb-4">
                            <label className="text-white">Email</label>
                            <input type="email" placeholder="Email" className="input input-bordered w-full" {...register("email", { required: true })} />
                            {errors.email && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="mb-4 relative">
                            <label className="text-white">Password</label>
                            <input type={showPassword ? "text" : "password"} placeholder="Password" className="input input-bordered w-full pr-10" {...register("password", { required: true })} />
                            <button className="absolute inset-y-12 right-0 flex items-center pr-3 focus:outline-none" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEyeSlash className="text-black" /> : <FaEye className="text-black" />}
                            </button>
                            {errors.password && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="mb-4 mt-10">
                            <button type="submit" className="btn btn-primary w-full">Register</button>
                        </div>
                    </form>
                    <p className="text-center text-white">Already have an account? <Link to='/login' className="text-blue-500 font-bold">Login </Link></p>
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </div>

    );
};

export default Register;