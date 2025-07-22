import Navbar from "../Navbar";
import Header from "../components/header-component/Header";
import Hero from "../components/hero-component/Hero";
import Feature from "../components/feature-component/Feature";
import Destination from "../components/destination-component/Destination";
import Experience from "../components/experience-component/Experience";
import Gallery from "../components/gallery-component/Gallery";
import Offer from "../components/offer-component/Offer";
import Footer from "../components/footer-component/Footer";
import './Home.css';



const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Hero />
      <Feature />
      <Destination />
      <Experience />
      <Gallery />
      <Offer />
      <Footer/>
    </div>
  );
};

export default Home;
