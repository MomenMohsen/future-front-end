import { Route , Routes } from "react-router-dom";
import HomePage from "./pages/home"
import PricingPage from "./pages/pricing"
import HelpPage from "./pages/help"
function RoutesRoot() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/pricing" element={<PricingPage/>}/>
      <Route path="/help" element={<HelpPage/>}/>
    </Routes>
  )
}
export default RoutesRoot
