import "../assets/css/home.css";
import Help from "../components/help";
import Footer from "../components/layouts/footer";
import NavBar from "../components/layouts/navbar";
export default function HomePage() {
  return (
    <>
      <NavBar />
        <Help/>
      <Footer />
    </>
  );
}
