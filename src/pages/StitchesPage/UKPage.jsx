import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import NavButton from "../../components/NavButton/NavButton";
import { useState, useEffect } from "react";
import axios from 'axios';
import StitchList from "../../components/StitchList/StitchList";
import './StitchesPage.scss'

const StitchesPage = () => {

    const [stitches, setStitches] = useState();
    const [refresh, setRefresh] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                let {data} = await axios.get(`http://localhost:8080/?requestQuery=page`)
                setStitches(JSON.parse(data));
            }
            catch {
                console.log('Error fetching data from the DB');
            }
        }
        fetchData();
        console.log(refresh)
    },[refresh])

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
                <p className="text-[20px] md:text-[28px] xl:text-[48px]">
                    List of stitches in UK notation:
                </p>
                <div className="flex flex-col gap-6 md:gap-8 xl:gap-[44px]">
                    <StitchList 
                        country='UK' 
                        stitches={stitches} 
                        setRefresh={setRefresh}
                    />
                </div>
            </section>
        </>
    )
}

export default StitchesPage;