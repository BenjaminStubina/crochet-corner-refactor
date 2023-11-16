import basket from '../../assets/icons/yarn-hook.png';
import hook from '../../assets/icons/crochet-hook-2.png';
import { Link } from 'react-router-dom';

const Header = ({ color }) => {

    const headerColor = {
        Home: 'flex py-4 bg-lightYellow justify-around',
        US: 'flex py-4 bg-lightBlue justify-around',
        UK: 'flex py-4 bg-lightPurple justify-around',
        Fav: 'flex py-4 bg-lightGreen justify-around',
        Stitch: 'flex py-4 bg-lightOrange justify-around'
    }

    return (
        <section className={`${headerColor[color]}`}>
            <div className='cursor-pointer flex justify-center max-w-[350px] md:max-w-[600px] md:w-[600px] xl:max-w-[1000px] xl:w-[1000px] gap-4 md:gap-[50px] xl:gap-[100px]'>
                <img className="h-[50px] md:h-[75px] xl:h-[100px] self-center" src={basket} alt='basket'/>
                <Link to='/' className='flex align-middle'>
                    <h1 className="text-[28px] md:text-[46px] xl:text-[72px] self-center md:font-bold">
                        Crochet Corner
                    </h1>
                </Link>
                <img className="h-[50px] md:h-[75px] xl:h-[100px] self-center" src={hook} alt='hook'/>
            </div>
        </section>
    )
}

export default Header