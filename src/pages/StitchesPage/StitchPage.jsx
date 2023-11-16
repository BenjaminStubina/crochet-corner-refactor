import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import NavButton from "../../components/NavButton/NavButton";

const StitchPage = ({ activeStitch }) => {

    if (!activeStitch) {
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

    return (
        <>
            <Header color='Fav'/>
            <section className="flex flex-col items-center gap-6 my-6">
                <Link to='/'>
                    <NavButton style='home'/>   
                </Link>
                <section className="flex flex-col gap-4 md:gap-6 xl:gap-[20px]">
                <img src={activeStitch.image} className="h-[260px] md:h-[380px md:my-2 self-center" />
                    <div className="flex flex-col xl:flex-row gap-4 xl:gap-0 text-[16px] md:text-[20px] xl:text-[24px] font-semibold w-[260px] md:w-[380px] xl:w-[800px] items-center">
                        <div className="flex flex-col md:w-[50%] gap-2 text-center">
                            <p>
                                US Name: {activeStitch.usName}
                            </p>
                            <p>
                                US Code: {activeStitch.usCode}
                            </p>
                        </div>
                        <div className="flex w-[260px] md:w-[190px] xl:w-[400px] flex-col gap-2 text-center">
                            <p>
                                UK Name: {activeStitch.ukName}
                            </p>
                            <p>
                                UK Code: {activeStitch.ukCode}
                            </p>
                        </div>
                    </div>
                    <div className="text-center text-[16px] md:text-[20px] xl:text-[28px] w-[260px] md:w-[380px] xl:w-[800px]">
                        {activeStitch.description}
                    </div>
                    <iframe src={activeStitch.tutorial} className="aspect-video w-[260px] md:w-[380px] xl:w-[800px]" title='Embedded YouTube Tutorial' />
                </section>
            </section>
        </>
    )
}

export default StitchPage;