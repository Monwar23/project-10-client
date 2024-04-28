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
import Details from "../Pages/Details";
import Update from "../Pages/Update";
import CategoryData from "../Pages/CategoryData";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader:()=>fetch('http://localhost:5000/craftSection')
            },
            {
                path:"/details/:id",
                element:<PrivateRoutes><Details></Details></PrivateRoutes>,
                loader:({params})=>fetch(`http://localhost:5000/craftSection/${params.id}`)
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
                element: <AllArtCraftItems></AllArtCraftItems>,
                loader:()=>fetch('http://localhost:5000/craftSection')
            },
            {
                path:"/updateCraft/:id",
                element:<PrivateRoutes><Update></Update></PrivateRoutes>,
                loader:({params})=>fetch(`http://localhost:5000/craftSection/${params.id}`)
            },
            {
                path:'/subcategory_name/:subcategory_name',
                element:<CategoryData></CategoryData>
            }

        ]
    },
]);

export default router;