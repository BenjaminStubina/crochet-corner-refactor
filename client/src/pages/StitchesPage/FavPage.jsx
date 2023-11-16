import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import NavButton from "../../components/NavButton/NavButton";
import { useEffect } from "react";
import axios from 'axios';
import StitchList from "../../components/StitchList/StitchList";
import './StitchesPage.scss'

const FavPage = ({ error, loading, favStitches, stitches, setStitches, setActiveStitch }) => {

    if (error || loading) {
        return (
            <>
                <Header color='Fav'/>
                <div className='absolute left-[calc(50%-75px)] top-[50%]'>
                    <span className="loader">
                        <span className="loader-inner"></span>
                    </span>
                </div>
                <section className="flex flex-col items-center gap-6 my-6">
                    <Link to='/'>
                        <NavButton style='home'/>   
                    </Link>
                </section>
            </>
        )
    }

    if (!favStitches?.length > 0) {
        return (
            <>
                <Header color='Fav'/>
                <section className="flex flex-col items-center gap-6 my-6">
                    <Link to='/'>
                        <NavButton style='home'/>   
                    </Link>
                    <p className="text-[20px] md:text-[28px] xl:text-[48px]">
                        You have no stitches favourited yet!
                    </p>
                    <p className="text-[20px] md:text-[28px] xl:text-[48px]">
                        Go checkout some of the stitches:
                    </p>
                    <Link to='/US'>
                        <NavButton style='US'/>   
                    </Link>
                    <Link to='/UK'>
                        <NavButton style='UK'/>   
                    </Link>
                </section>
            </>
        )
    }

    return (
        <>
            <Header color='Fav'/>
            <section className="flex flex-col items-center gap-6 my-6">
                <Link to='/'>
                    <NavButton style='home'/>   
                </Link>
                <p className="text-[20px] md:text-[28px] xl:text-[48px]">
                    List of stitches currently favourited:
                </p>
                <div className="flex flex-col gap-6 md:gap-8 xl:gap-[44px]">
                    <StitchList 
                        list='fav'
                        favStitches={favStitches} 
                        setStitches={setStitches}
                        setActiveStitch={setActiveStitch}
                        stitches={stitches}
                    />
                </div>
            </section>
        </>
    )
}

export default FavPage;