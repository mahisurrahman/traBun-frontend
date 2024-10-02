import {
    createBrowserRouter,
} from "react-router-dom";
import HomeLayout from "../layouts/homelayout/HomeLayout";
import LoginPage from "../pages/loginPage/LoginPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
    },
    {
        path: "/login",
        element: <LoginPage />
    }
]);

export default router;