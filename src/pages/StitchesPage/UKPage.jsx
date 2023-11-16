import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import NavButton from "../../components/NavButton/NavButton";
import StitchList from "../../components/StitchList/StitchList";
import './StitchesPage.scss'

const StitchesPage = ({stitches, error, loading, setStitches, setActiveStitch}) => {

    if (error || loading) {
        return (
            <>
                <Header color='UK'/>
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

    return (
        <>
            <Header color='UK'/>
            <section className="flex flex-col items-center gap-6 my-6">
                <Link to='/'>
                    <NavButton style='home'/>   
                </Link>
                <p className="text-[20px] md:text-[28px] xl:text-[48px]">
                    List of stitches in UK notation:
                </p>
                <div className="flex flex-col gap-6 md:gap-8 xl:gap-[44px]">
                    <StitchList 
                        country='UK' 
                        stitches={stitches} 
                        setStitches={setStitches}
                        setActiveStitch={setActiveStitch}
                    />
                </div>
            </section>
        </>
    )
}

export default StitchesPage;