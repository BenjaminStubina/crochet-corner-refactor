import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import NavButton from "../../components/NavButton/NavButton";
import { useState } from "react";
import StitchList from "../../components/StitchList/StitchList";
import './StitchesPage.scss'

const StitchesPage = () => {

    const [stitches, setStitches] = useState();

    if (!stitches) {
        return (
            <>
                <Header color='UK'/>
                <div className='absolute left-[calc(50%-75px)] top-[50%]'>
                    <span className="loader">
                        <span className="loader-inner"></span>
                    </span>
                </div>
            </>
        )
    }

    return (
        <>
            <Header color='UK'/>
            <section className="flex flex-col items-center gap-6 my-6">
                <Link to='/'>
                    <NavButton style='home'/>   
                </Link>
                <p className="text-[20px]">
                    List of stitches in UK notation:
                </p>
                <div className="flex flex-col self-center items-center">
                    <StitchList 
                        country='UK' 
                        setStitches={setStitches} 
                        stitches={stitches} 
                    />
                </div>
            </section>
        </>
    )
}

export default StitchesPage;