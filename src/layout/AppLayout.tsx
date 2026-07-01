import { Outlet } from "react-router-dom";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";

export default function AppLayout() {
return (
    <>
    <Topbar />
    <main className="container page">
        <Outlet />
    </main>
    <Footer />
    </>
);
}
