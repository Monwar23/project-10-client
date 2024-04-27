import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";


const PrivateRoutes = ({ children }) => {
    const { user, loading } = UseAuth()
    const location = useLocation()
    console.log(location);

    if (loading) {
        return (
            < div className="flex justify-center items-center h-screen" >
                <span className="loading loading-spinner loading-lg"></span>
            </div >

        )
    }

    if (user) {
        return children
    }

    return <Navigate state={location?.pathname || '/'} to="/login"></Navigate>
};

export default PrivateRoutes;