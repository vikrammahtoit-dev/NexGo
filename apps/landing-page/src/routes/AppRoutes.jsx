import { Route, Routes } from "react-router-dom"
import PublicRoutes from "./PublicRoutes"
import DashboardRoutes from "./DashboardRoutes"
import ScrollToTop from "../components/common/ScrollToTop";

const AppRoutes = () => {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/*" element={<PublicRoutes />} />
                <Route path="/dashboard/*" element={<DashboardRoutes />} />
            </Routes>
        </>

    )
};

export default AppRoutes