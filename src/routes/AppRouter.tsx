import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AboutScreen from "../components/about/AboutScreen"
import HomeScreen from "../components/home/HomeScreen"
import ProjectsScreen from "../components/projects/ProjectsScreen"
import ScrollToTop from "./ScrollToTop"

const AppRouter = () => {
    return (

        <Router>
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="about" element={<AboutScreen />} />
                    <Route path="projects" element={<ProjectsScreen />} />
                </Routes>
            </ScrollToTop>
        </Router>
    )
}

export default AppRouter
