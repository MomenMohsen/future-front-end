import { Route , Routes } from "react-router-dom";
import HomePage from "./pages/home"
import PricingPage from "./pages/pricing"
function RoutesRoot() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/pricing" element={<PricingPage/>}/>
    </Routes>
  )
}
export default RoutesRoot
