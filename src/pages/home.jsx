import "../assets/css/home.css";
import NavBar from "../components/layouts/navbar";
import Footer from "../components/layouts/footer";
export default function HomePage() {
  return (
    <>
      <NavBar />
        <div className="text-xl">Hello world</div>
      <Footer />
    </>
  );
}
