import "../assets/css/home.css";
import Pricing from "../components/pricing/index";
import Footer from "../components/layouts/footer";
import NavBar from "../components/layouts/navbar";
export default function HomePage() {
  return (
    <>
      <NavBar />
        <Pricing/>
      <Footer />
    </>
  );
}
