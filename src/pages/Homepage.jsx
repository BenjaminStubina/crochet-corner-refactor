import { useState } from "react";
import { Button, ThemeProvider, createTheme } from '@mui/material'
import Header from "../components/Header/Header";
import Modal from "../components/Modal/Modal";
import NavButton from "../components/NavButton/NavButton";

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
            <section className="flex flex-col font-bold gap-6 my-4">
                <h2 className="flex justify-center self-center w-[280px] text-center text-[24px]">
                    Welcome to the Crochet Corner!
                </h2>
                <p className="flex justify-center self-center text-[16px] w-[80%] text-center">
                    Crochet Corner was developed as a hub for crochet enthutiast of all skill levels.
                </p>
                <p className="flex justify-center self-center text-[16px] w-[80%] text-center">
                    Use the site to learn more about the different types of crochet stitches and how to differentiate between US & UK notations!
                </p>
                <p className="flex justify-center self-center text-[16px] w-[80%] text-center">
                    Use the buttons below to navigate the site!
                </p>
                <ThemeProvider theme={theme}>
                    <Button className='flex w-[260px] self-center' variant='contained' size='medium' onClick={handleClick}>
                        About the Project
                    </Button>
                </ThemeProvider>  
                <div className="flex flex-col items-center gap-6">
                    <NavButton style='US'/>
                    <NavButton style='UK'/>
                    <NavButton style='fav'/>
                </div>
            </section>
            <Modal open={open} handleClose={handleClose}/>
        </>
    )
}

export default Homepage;