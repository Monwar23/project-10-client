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
                element: <AddCraftItem></AddCraftItem>
            },
            {
                path: '/myArtCraftList',
                element: <MyArtCraftLists></MyArtCraftLists>
            },
            {
                path: '/allArtCraftItems',
                element: <AllArtCraftItems></AllArtCraftItems>
            },

        ]
    },
]);

export default router