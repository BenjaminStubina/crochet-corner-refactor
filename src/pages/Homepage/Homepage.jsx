import { useState } from "react";
import { Button, ThemeProvider, createTheme } from '@mui/material';
import Modal from "../../components/Modal/Modal";
import Header from "../../components/Header/Header";
import NavButton from "../../components/NavButton/NavButton";
import { Link } from "react-router-dom";
import modal from '../../assets/icons/about.png';
import gif1 from '../../assets/icons/giphy.gif';
import gif2 from '../../assets/icons/knit-knitting.gif';

const Homepage = () => {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const theme = createTheme({
        palette: {
            primary: {
                main: '#FFF0AD',
                light: '#FFE985',
                dark:'#FFE985', 
                contrastText: 'black'
            },
        },
        typography: {
            button: {
                fontSize: 20,
                fontFamily: 'Fresca',
            }
        }
    })

    return (
        <>
            <Header color='Home' />
            <div className="relative">
                <section className="flex flex-col font-[500] self-center items-center gap-6 md:gap-8 xl:gap-[40px] my-4 md:my-8 xl:my-[48px]">
                    <h2 className="flex justify-center font-bold self-center w-[280px] md:w-[500px] xl:w-[1000px] text-center text-[24px] md:text-[36px] xl:text-[48px]">
                        Welcome to the Crochet Corner!
                    </h2>
                    <p className="flex md:w-[500px] xl:w-[1000px] justify-center self-center text-[16px] md:text-[24px] xl:text-[32px] w-[80%] text-center">
                        Crochet Corner was developed as a hub for crochet enthutiast of all skill levels.
                    </p>
                    <p className="flex md:w-[500px] xl:w-[1000px] justify-center self-center text-[16px] md:text-[24px] xl:text-[32px] w-[80%] text-center">
                        Use the site to learn more about the different types of crochet stitches and how to differentiate between US & UK notations!
                    </p>
                    <p className="flex md:w-[500px] xl:w-[1000px] justify-center self-center text-[16px] md:text-[24px] xl:text-[32px] w-[80%] text-center">
                        Use the buttons below to navigate the site:
                    </p>
                    <ThemeProvider theme={theme}>
                        <Button className='flex w-[260px] md:w-[380px] xl:w-[800px] md:h-[75px] xl:h-[100px] self-center' variant='contained' size='medium' onClick={handleClick}>
                            <div className="flex gap-[17px] md:gap-[58px] xl:gap-[250px]">
                                <p className="self-center md:text-[26px] xl:text-[36px]">
                                    About the Project
                                </p>
                                <img src={modal} className="h-[35px] md:h-[50px] xl:h-[65px]" />
                            </div>
                        </Button>
                    </ThemeProvider>  
                    <div className="flex flex-col items-center gap-6 md:gap-8 xl:gap-[44px]">
                        <Link to='/US'>
                            <NavButton style='US'/>
                        </Link>
                        <Link to='/UK'>
                            <NavButton style='UK'/>
                        </Link>
                        <Link to='/fav'>
                            <NavButton style='fav'/>
                        </Link>
                    </div>
                </section>
                <img src={gif1} className="absolute w-[150px] md:w-[250px] xl:w-[350px] left-[calc(50%-85px)] md:left-[calc(50%-135px)] xl:left-[calc(50%-175px)] b-0 lg:top-[550px] xl:top-[100%] 2xl:top-[690px] lg:left-[calc(50%+200px)] 2xl:left-[calc(50%+520px)]" />
                <img src={gif2} className="absolute invisible lg:visible w-[200px] xl:invisible 2xl:visible 2xl:w-[350px] left-[calc(50%-450px)] 2xl:left-[calc(50%-900px)] top-[400px] 2xl:top-[450px]" />
            </div>
            <Modal open={open} handleClose={handleClose}/>
        </>
    )
}

export default Homepage;