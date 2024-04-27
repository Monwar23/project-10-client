import {
    createBrowserRouter,

} from "react-router-dom";
import Root from "../components/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddCraftItem from "../Pages/AddCraftItem";
import MyArtCraftLists from "../Pages/MyArtCraftLists";
import AllArtCraftItems from "../Pages/AllArtCraftItems";
import PrivateRoutes from "../Private/PrivateRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addCraftItem',
                element: <PrivateRoutes><AddCraftItem></AddCraftItem></PrivateRoutes>
            },
            {
                path: '/myArtCraftList',
                element: <PrivateRoutes><MyArtCraftLists></MyArtCraftLists></PrivateRoutes>
            },
            {
                path: '/allArtCraftItems',
                element: <AllArtCraftItems></AllArtCraftItems>
            },

        ]
    },
]);

export default router