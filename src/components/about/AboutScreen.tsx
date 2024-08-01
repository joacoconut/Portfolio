import Footer from "../home/footer/Footer";
import Header from "../home/header/Header";
import About from "./About";


const AboutScreen = () => {
    
    document.body.classList.remove('no-scroll') 

    return (
        <div>
            <Header />
            <About />
            <Footer />
        </div>
    )
}

export default AboutScreen;
