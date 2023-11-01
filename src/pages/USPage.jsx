import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import NavButton from "../components/NavButton/NavButton";
import { useEffect } from "react";

const USPage = () => {

    return (
        <>
            <Header color='US'/>
            <section className="flex flex-col items-center gap-6 my-6">
                <Link to='/'>
                    <NavButton style='home'/>   
                </Link>
                <p className="text-[20px]">
                    List of stitches in US notation:
                </p>
                {/* <StitchList country='US'/> */}
            </section>
        </>
    )
}

export default USPage;