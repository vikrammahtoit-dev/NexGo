
import { Route, Routes } from "react-router-dom";
import Home from "../pages/public/Home/Home";
import PrivacyPolicy from "../pages/public/PrivacyPolicy/PrivacyPolicy";
import TermsService from "../pages/public/TermsofService/TermsServices";
import RefundCancellationPolicy from "../pages/public/Refund&Cancellation/RefundCancellation";
import CookiePolicy from "../pages/public/CookiePolicy/CookiePolicy";

const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms-services" element={<TermsService />} />
            <Route path="refund-policy" element={<RefundCancellationPolicy />} />
            <Route path="cookie-policy" element={<CookiePolicy />} />
        </Routes>
    )
};

export default PublicRoutes;