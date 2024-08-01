import Header from "./header/Header";
import Hero from './hero/Hero';
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import MoreAboutMe from './contact/MoreAboutMe';
import Footer from "./footer/Footer";
import Contact from '../contact/Contact';

const HomeScreen = () => {

    document.body.classList.remove('no-scroll') 

    return (
        <>
            <Header />
            <Hero />
            <Skills />
            <Projects />
            <MoreAboutMe />
            <Contact />
            <Footer />
        </>
    )
}

export default HomeScreen;
