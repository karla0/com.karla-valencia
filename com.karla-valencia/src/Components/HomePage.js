import Header from "./Header";
import BioSection from "./BioSection";
import PortfolioSection from "./PortfolioSection";
import ContactSection from "./ContactSection";



import "./css/HomePage.css";


export default function HomePage() {

    return (
        <>
        <Header />
        <BioSection />
        <PortfolioSection />
        <ContactSection />
        </>
    );
}