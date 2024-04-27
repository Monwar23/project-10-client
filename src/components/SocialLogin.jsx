import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UseAuth from "../Hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {

        const { googleLogin,gitHubLogin } = UseAuth()
        const navigate = useNavigate();
        const location = useLocation();
    
        const from = location?.state || "/";
    
    
        const handleSocialSignIn = (socialProvider) => {
            socialProvider()
                .then(result => {
                    console.log(result.user);
                    toast.success("Login successful!");
                    setTimeout(()=>{
                        navigate(from)
                    },3000)
                   
                })
                .catch(error => {
                    console.error(error);
                    toast.error(error.message)
                })
        }
    

    return (
        <div>
           <div className="flex gap-4 justify-center mt-4">
           <p><button onClick={()=>handleSocialSignIn(googleLogin)} className="btn text-white bg-blue-600 border-none text-2xl"><FaGoogle /></button></p>
           <p><button onClick={()=>handleSocialSignIn(gitHubLogin)} className="btn  bg-blue-600 border-none text-white text-2xl"><FaGithub></FaGithub></button></p>
           </div>
        <ToastContainer></ToastContainer>
        </div>
    );
};

export default SocialLogin;