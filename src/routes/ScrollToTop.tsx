import { useLocation } from "react-router-dom"
import { useEffect } from "react"

interface Props {
    children: JSX.Element;
}

const ScrollToTop = ({children}:Props) => {

    const location = useLocation();

    useEffect(
        () => {
            window.scrollTo(0, 0);
        }, [location]
    )

    return children;
}

export default ScrollToTop
