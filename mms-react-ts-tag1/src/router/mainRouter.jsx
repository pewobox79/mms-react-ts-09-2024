import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import AboutUs from '../pages/AboutUs'
import MainLayout from '../layouts/MainLayout'
import BlogPage from '../pages/BlogPage'
import SingleArticle from '../pages/SingleArticle'


export const mainRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Homepage />} />
            <Route path="aboutme" element={<AboutUs />} />
            <Route path="*" element={<h1>Error page</h1>} />

            <Route path="blog" >
                <Route index element={<BlogPage/> } />
                <Route path=":id" element={<SingleArticle/>} />
            </Route>

        </Route>

    )
)