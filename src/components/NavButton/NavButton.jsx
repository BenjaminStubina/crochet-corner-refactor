import US from '../../assets/icons/united-states.png'
import UK from '../../assets/icons/united-kingdom.png'
import fav from '../../assets/icons/red-heart.png'

const NavButton = ({ style }) => {

    const buttonStyle = {
        US: 'flex items-center justify-between px-6 bg-lightBlue hover:bg-blue w-[260px] h-[47px] text-[20px] font-[500] rounded-[4px] tracking-[0.5714px] shadow-[0_3px_3px_-2px_rgba(0,0,0,0.6)]',
        UK: 'flex items-center justify-between px-6 bg-lightPurple hover:bg-purple w-[260px] h-[47px] text-[20px] font-[500] rounded-[4px] tracking-[0.5714px] shadow-[0_3px_3px_-2px_rgba(0,0,0,0.6)]',
        fav:'flex items-center justify-between px-6 bg-lightGreen hover:bg-green w-[260px] h-[47px] text-[20px] font-[500] rounded-[4px] tracking-[0.5714px] shadow-[0_3px_3px_-2px_rgba(0,0,0,0.6)]'
    }

    const buttonText = {
        US: 'US STITCHES',
        UK: 'UK STITCHES',
        fav:'FAVOURITE STITCHES'
    }

    const buttonImage = {
        US: US,
        UK: UK,
        fav: fav
    }

    return (
        <button className={`${buttonStyle[style]}`}>
            <p>
                {buttonText[style]}
            </p>
            <img className='h-[35px]' src={buttonImage[style]}/>
        </button>
    )
}

export default NavButton;