import { Routes, Route, Navigate } from "react-router-dom";
import ScreenHQLogin from "./pages/screens/ScreenHQLogin";
import ScreenHQSignup from "./pages/screens/ScreenHQSignup";
import ScreenHQDashboard from "./pages/screens/ScreenHQDashboard";
import ScreenHQSites from "./pages/screens/ScreenHQSites";
import ScreenHQSiteDetail from "./pages/screens/ScreenHQSiteDetail";
import ScreenHQRecords from "./pages/screens/ScreenHQRecords";
import ScreenHQAccount from "./pages/screens/ScreenHQAccount";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/hq/login" replace />} />

      <Route path="/hq/login" element={<ScreenHQLogin />} />
      <Route path="/hq/signup" element={<ScreenHQSignup />} />
      <Route path="/hq/signup/validation" element={<ScreenHQSignup validation />} />
      <Route path="/hq/dashboard" element={<ScreenHQDashboard />} />
      <Route path="/hq/sites" element={<ScreenHQSites />} />
      <Route path="/hq/sites/:siteId" element={<ScreenHQSiteDetail />} />
      <Route path="/hq/records" element={<ScreenHQRecords />} />
      <Route path="/hq/account" element={<ScreenHQAccount />} />

      <Route path="*" element={<Navigate to="/hq/login" replace />} />
    </Routes>
  );
}
