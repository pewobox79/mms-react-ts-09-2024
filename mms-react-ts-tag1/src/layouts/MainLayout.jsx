import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {

    //Outlet ist eine react-router-dom componente die nichts mit der children struktur von React-Core zu tun hat.

    return <>
        <Header />
        <main>
            <Outlet/>
        </main>
        <Footer />
    </>
}