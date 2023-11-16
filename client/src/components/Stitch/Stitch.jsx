import { Link } from 'react-router-dom';
import noHeart from '../../assets/icons/empty-heart.png'
import redHeart from '../../assets/icons/red-heart.png'
import axios from 'axios';
import { useMemo } from 'react';

const Stitch = ({ stitch, stitches, country, setStitches, setActiveStitch }) => {

    let id = stitch.stitch_id
    
    const isHeartImage = useMemo(() => {
        if(stitch.favourite === 'true') return redHeart
        
        return noHeart
    }, [stitch])

    const handleSelect = () => {
        setActiveStitch(stitch)
    }

    async function handleClick() {
        //Function should send patch request to the DB to update status of favourite and then refresh the original axios call by updating state of Refresh
        if (stitch.favourite === "true") {
            try {
                await axios.patch("https://crochet-corner-server.onrender.com/",
                {
                    stitch_id: stitch.stitch_id,
                    favourite: "false"
                })
                setStitches(stitches.map((item) => {
                    if (item.stitch_id === stitch.stitch_id) {
                        return {...item, favourite: "false"}
                    }
                    return item
                }))
            }
            catch {
                console.log("Error updating favourite status")
            }
        }
        else {
            try {
                await axios.patch("https://crochet-corner-server.onrender.com/",
                {
                    stitch_id: stitch.stitch_id,
                    favourite: "true"
                })
                setStitches(stitches.map((item) => {
                    if (item.stitch_id === stitch.stitch_id) {
                        return {...item, favourite: "true"}
                    }
                    return item
                }))
            }
            catch {
                console.log("Error updating favourite status")
            }
        }
    }

    if (country === 'US') {
        return (
            <article className="flex w-[260px] md:w-[380px] xl:w-[800px] h-[47px] md:h-[75px] xl:h-[100px] text-[12px] md:text-[17px] xl:text-[32px] items-center bg-lightBlue rounded-[4px] shadow-[0_3px_3px_-2px_rgba(0,0,0,0.6)] hover:bg-blue">
                <Link className='flex items-center' onClick={handleSelect} to={`/stitch/${id}`}>
                    <div className="pl-2 md:pl-4 xl:pl-8">
                        <img src={stitch.diagram} className="h-[35px] md:h-[50px] xl:h-[65px] w-[40px] md:w-[55px] xl:w-[70px]" />
                    </div>
                    <div className="w-[120px] md:w-[180px] xl:w-[400px] text-center font-bold">
                        {stitch.usName}
                    </div>
                    <div className='w-[30px] md:w-[45px] xl:w-[100px] text-center font-bold'>
                        {stitch.usCode}
                    </div>
                </Link>
                <div className='pl-4 xl:pl-[70px]'>
                    <img onClick={handleClick} src={isHeartImage} className='w-[30px] md:w-[45px] xl:w-[65px]' />
                </div>
            </article>
        )
    }
    else if (country === 'UK') {
        return (
            <article className="flex w-[260px] md:w-[380px] xl:w-[800px] h-[47px] md:h-[75px] xl:h-[100px] text-[12px] md:text-[17px] xl:text-[32px] items-center bg-lightPurple rounded-[4px] shadow-[0_3px_3px_-2px_rgba(0,0,0,0.6)] hover:bg-purple">
                <Link className='flex items-center' onClick={handleSelect} to={`/stitch/${id}`}>
                    <div className="pl-2 md:pl-4 xl:pl-8">
                        <img src={stitch.diagram} className="h-[35px] md:h-[50px] xl:h-[65px] w-[40px] md:w-[55px] xl:w-[70px]" />
                    </div>
                    <div className="w-[120px] md:w-[180px] xl:w-[400px] text-center font-bold">
                        {stitch.usName}
                    </div>
                    <div className='w-[30px] md:w-[45px] xl:w-[100px] text-center font-bold'>
                        {stitch.usCode}
                    </div>
                </Link>
                <div className='pl-4 xl:pl-[70px]'>
                    <img onClick={handleClick} src={isHeartImage} className='w-[30px] md:w-[45px] xl:w-[65px]' />
                </div>
            </article>
        )
    }
    else {
        return (
            <>
                <article className="flex w-[260px] md:w-[380px] xl:w-[800px] h-[47px] md:h-[75px] xl:h-[125px] text-[12px] md:text-[17px] xl:text-[32px] items-center bg-lightGreen rounded-[4px] shadow-[0_3px_3px_-2px_rgba(0,0,0,0.6)] hover:bg-green">
                <Link className='flex items-center' onClick={handleSelect} to={`/stitch/${id}`}>
                    <div className="pl-2 md:pl-4 xl:pl-8">
                        <img src={stitch.diagram} className="h-[35px] md:h-[50px] xl:h-[85px] w-[40px] md:w-[55px] xl:w-[90px]" />
                    </div>
                    <div className='flex flex-col'>
                        <div className="w-[120px] md:w-[180px] xl:w-[400px] text-center font-bold">
                            (US) {stitch.usName}
                        </div>
                        <div className="w-[120px] md:w-[180px] xl:w-[400px] text-center font-bold">
                            (UK) {stitch.ukName}
                        </div>
                    </div>
                    <div className='flex flex-col w-[50px]'>
                        <div className="text-center font-bold">
                            {stitch.usCode}
                        </div>
                        <div className="text-center font-bold">
                            {stitch.ukCode}
                        </div>
                    </div>
                </Link>
                    <div className='md:pl-4 xl:pl-[120px]'>
                        <img onClick={handleClick} src={isHeartImage} className='w-[30px] md:w-[45px] xl:w-[65px]' />
                    </div>
                </article>
            </>
        )
    }
    
}

export default Stitch;