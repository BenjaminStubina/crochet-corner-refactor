import US from '../../assets/icons/united-states.png'
import UK from '../../assets/icons/united-kingdom.png'
import fav from '../../assets/icons/red-heart.png'
import home from '../../assets/icons/home.png'

const NavButton = ({ style }) => {

    const buttonStyle = {
        US: 'flex items-center justify-between px-6 md:px-8 xl:px-[100px] bg-lightBlue hover:bg-blue w-[260px] md:w-[380px] xl:w-[800px] h-[47px] md:h-[75px] xl:h-[100px] text-[20px] md:text-[26px] xl:text-[36px] font-[500] rounded-[4px] tracking-[0.5714px] shadow-[0_3px_3px_-2px_rgba(0,0,0,0.6)]',
        UK: 'flex items-center justify-between px-6 md:px-8 xl:px-[100px] bg-lightPurple hover:bg-purple w-[260px] md:w-[380px] xl:w-[800px] h-[47px] md:h-[75px] xl:h-[100px] text-[20px] md:text-[26px] xl:text-[36px] font-[500] rounded-[4px] tracking-[0.5714px] shadow-[0_3px_3px_-2px_rgba(0,0,0,0.6)]',
        fav:'flex items-center justify-between px-6 md:px-8 xl:px-[100px] bg-lightGreen hover:bg-green w-[260px] md:w-[380px] xl:w-[800px] h-[47px] md:h-[75px] xl:h-[100px] text-[20px] md:text-[26px] xl:text-[36px] font-[500] rounded-[4px] tracking-[0.5714px] shadow-[0_3px_3px_-2px_rgba(0,0,0,0.6)]',
        home:'flex items-center justify-between px-6 md:px-8 xl:px-[100px] bg-lightYellow hover:bg-yellow w-[260px] md:w-[380px] xl:w-[800px] h-[47px] md:h-[75px] xl:h-[100px] text-[20px] md:text-[26px] xl:text-[36px] font-[500] rounded-[4px] tracking-[0.5714px] shadow-[0_3px_3px_-2px_rgba(0,0,0,0.6)]'
    }

    const buttonText = {
        US: 'US STITCHES',
        UK: 'UK STITCHES',
        fav:'FAVOURITE STITCHES',
        home: 'HOMEPAGE'
    }

    const buttonImage = {
        US: US,
        UK: UK,
        fav: fav,
        home: home
    }

    return (
        <button className={`${buttonStyle[style]}`}>
            <p>
                {buttonText[style]}
            </p>
            <img className='h-[35px] md:h-[50px] xl:h-[65px]' src={buttonImage[style]}/>
        </button>
    )
}

export default NavButton;