import noHeart from '../../assets/icons/empty-heart.png'
import redHeart from '../../assets/icons/red-heart.png'

const Stitch = ({ stitch, country }) => {
    
    const favChecker = () => {
        if (stitch.favourite === 'true') {
            return redHeart
        }
        else {
            return noHeart
        }
    }

    const handleClick = () => {
        //Function should send patch request to the DB to update status of favourite
    }

    if (country === 'US') {
        return (
            <article className="flex w-[260px] md:w-[380px] xl:w-[800px] h-[47px] md:h-[75px] xl:h-[100px] text-[12px] md:text-[17px] xl:text-[32px] items-center bg-lightBlue rounded-[4px] shadow-[0_3px_3px_-2px_rgba(0,0,0,0.6)] hover:bg-blue">
                <div className="pl-2 md:pl-4 xl:pl-8">
                    <img src={stitch.diagram} className="h-[35px] md:h-[50px] xl:h-[65px] w-[40px] md:w-[55px] xl:w-[70px]" />
                </div>
                <div className="w-[120px] md:w-[180px] xl:w-[400px] text-center font-bold">
                    {stitch.usName}
                </div>
                <div className='w-[30px] md:w-[45px] xl:w-[100px] text-center font-bold'>
                    {stitch.usCode}
                </div>
                <div className='pl-4 xl:pl-[70px]'>
                    <img onClick={handleClick} src={favChecker()} className='w-[30px] md:w-[45px] xl:w-[65px]' />
                </div>
            </article>
        )
    }
    else {
        return (
            <>
                <article className="flex w-[260px] md:w-[380px] xl:w-[800px] h-[47px] md:h-[75px] xl:h-[100px] text-[12px] md:text-[17px] xl:text-[32px] items-center bg-lightPurple rounded-[4px] shadow-[0_3px_3px_-2px_rgba(0,0,0,0.6)] hover:bg-purple">
                    <div className="pl-2 md:pl-4 xl:pl-8">
                        <img src={stitch.diagram} className="h-[35px] md:h-[50px] xl:h-[65px] w-[40px] md:w-[55px] xl:w-[70px]" />
                    </div>
                    <div className="w-[120px] md:w-[180px] xl:w-[400px] text-center font-bold">
                        {stitch.ukName}
                    </div>
                    <div className='w-[30px] md:w-[45px] xl:w-[100px] text-center font-bold'>
                        {stitch.ukCode}
                    </div>
                    <div className='pl-4 xl:pl-[70px]'>
                        <img onClick={handleClick} src={favChecker()} className='w-[30px] md:w-[45px] xl:w-[65px]' />
                    </div>
                </article>
            </>
        )
    }
    
}

export default Stitch;