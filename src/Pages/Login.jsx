// import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";

import { useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "../components/SocialLogin";

const Login = () => {


    const { signIn } = UseAuth()
    const location=useLocation()
    const navigate=useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [showPassword, setShowPassword] = useState(false)


    const onSubmit = data => {
        const { email, password } = data;

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                toast.success("Login successful!");

                setTimeout(()=>{
                    navigate(location?.state? location.state:'/')
                },3000)

            })
            .catch(error => {
                console.log(error);
                toast.error(error.message)
            })
    }


    return (
        <div>
        {/* <Helmet>
                <title>HomeSpotter || Login</title>
            </Helmet> */}
         <div className="p-14 my-10" style={{ backgroundImage: `url(https://i.ibb.co/2PdSp86/pexels-nickcollins-3006340.jpg)`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover', }}>
            <div>
                <h2 className="text-center font-bold  text-white text-3xl my-10">Login Now !</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="md:3/4 lg:w-1/2 mx-auto">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="email" placeholder="Email" className="input input-bordered" {...register("email", { required: true })} />
                        {errors.email && <span className='text-red-500'>This field is required</span>}
                    </div>
                   
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                className="input input-bordered w-full pr-10"
                                {...register("password", { required: true })}
                            />
                            <span
                                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                                onClick={() => {
                                    setShowPassword(!showPassword)
                                }}
                            >
                                {
                                    showPassword
                                        ? <FaEyeSlash />
                                        : <FaEye />
                                }
                            </span>
                            {errors.password && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center text-white mt-4">Do not have an Account ? <Link className="font-bold text-blue-600 " to='/register'>Register</Link></p>
               
                <p className="text-white border-b-2 mt-4 text-center pb-2">Sign In with</p>
                <SocialLogin></SocialLogin>
            </div>
            <ToastContainer></ToastContainer>
        </div>
       </div>
    );
};

export default Login;