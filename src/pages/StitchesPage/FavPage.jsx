import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import NavButton from "../../components/NavButton/NavButton";
import { useState, useEffect, useMemo } from "react";
import axios from 'axios';
import StitchList from "../../components/StitchList/StitchList";
import './StitchesPage.scss'

const FavPage = () => {

    const [stitches, setStitches] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const favedStitches = useMemo(() => {return stitches.filter(stitch => stitch.favourite === 'true')}, [stitches])

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                let {data} = await axios.get(`http://localhost:8080/?requestQuery=fav`)
                setStitches(JSON.parse(data));
            }
            catch {
                console.log('Error fetching data from the DB');
                setError(true);
            }
            setLoading(false);
        }
        fetchData();
    },[])

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

    if (!favedStitches?.length > 0) {
        return (
            <>
                <Header color='Fav'/>
                <section className="flex flex-col items-center gap-6 my-6">
                    <Link to='/'>
                        <NavButton style='home'/>   
                    </Link>
                    <p className="text-[20px] md:text-[28px] xl:text-[48px]">
                        You have no stitches favourited yet! Go checkout some of the stitches:
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
                        stitches={favedStitches} 
                        setStitches={setStitches}
                    />
                </div>
            </section>
        </>
    )
}

export default FavPage;