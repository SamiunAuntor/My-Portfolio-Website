import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import LenisSmoothScroll from "../Components/LenisSmoothScroll";

const HomeLayout = () => {
    return (
        <div className="min-h-screen flex flex-col overflow-x-hidden w-full">
            <LenisSmoothScroll />
            <NavBar></NavBar>
            <main className="flex-grow w-full overflow-x-hidden">
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;

