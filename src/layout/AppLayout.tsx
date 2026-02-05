    import { Outlet } from "react-router-dom";
    import Topbar from "../components/Topbar";

    export default function AppLayout() {
    return (
        <div style={{ paddingTop: 64 }}>
        <Topbar brandText="Victor Barbosa" />
        <main className="container page">
            <Outlet />
        </main>
        </div>
    );
    }
