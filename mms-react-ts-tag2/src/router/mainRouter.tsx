import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";
import BlogPage from "../pages/BlogPage";
import SinglePost from "../pages/SinglePost";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<Homepage/>}/>
            <Route path="login" element={<LoginPage/>}/>
            <Route path="blog">
                <Route index element={<BlogPage/>}/>
                <Route path=":id" element={<SinglePost/>}/>
            </Route>
            <Route path="*" element={<ErrorPage/>   }/>
        </Route>
    )
)