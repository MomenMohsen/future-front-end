import "../assets/css/home.css";
import Landing from "../components/landing";
import Footer from "../components/layouts/footer";
import NavBar from "../components/layouts/navbar";
export default function HomePage() {
  return (
    <>
      <NavBar />
      <div className="bg-gray-800">
        <Landing/>
      </div>
      <Footer />
    </>
  );
}
