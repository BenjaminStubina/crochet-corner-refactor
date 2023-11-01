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
            <div className='flex max-w-[320px] gap-4'>
                <img className="h-[50px]" src={basket} alt='basket'/>
                <Link to='/' className='flex align-middle'>
                    <h1 className="text-[28px] self-center font-bold">
                        Corchet Corner
                    </h1>
                </Link>
                <img className="h-[50px]" src={hook} alt='hook'/>
            </div>
        </section>
    )
}

export default Header