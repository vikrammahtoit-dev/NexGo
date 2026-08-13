import { Route, Routes } from "react-router-dom"
import PublicRoutes from "./PublicRoutes"
import DashboardRoutes from "./DashboardRoutes"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<PublicRoutes />} />
            <Route path="/dashboard/*" element={<DashboardRoutes />} />
        </Routes>

    )
};

export default AppRoutes