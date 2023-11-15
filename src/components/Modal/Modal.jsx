import { Dialog } from "@mui/material";
import portfolio from '../../assets/techIcons/devil-logo.svg'
import github from '../../assets/techIcons/github.png'
import linkedin from '../../assets/techIcons/linkedin.png'
import TechList from "../TechList/TechList";
import './Modal.scss' 

const Modal = ({ open, handleClose }) => {
    return (
        <Dialog sx={{
            "& .MuiDialog-container": {
                "& .MuiPaper-root": {
                    width: "100%",
                    maxWidth: "1200px",
                },
            },
        }} open={open} onClose={handleClose}>
            <section className="flex flex-col p-4">
                <div className="flex flex-col">
                    <p className="underline text-[24px] md:text-[36px] xl:text-[48px]">
                        About the Project:
                    </p>
                    <p className="md:text-[20px] xl:text-[24px]">
                        This project was developed as my capstone while completing a Software Engineering bootcamp at BrainStation in Toronto, Canada.
                    </p>
                    <p className="mt-2 md:text-[20px] xl:text-[24px]">
                        The project is dedicated to my girlfriend who began to learn to crochet at the time.
                    </p>
                </div>
                <div className="mt-2">
                    <p className="underline text-[24px] md:text-[36px] xl:text-[48px] mt-2 md:mt-3 md:mb-1">
                        TechStack:
                    </p>
                    <TechList />
                </div>
                <div className="flex flex-col mt-4 md:mt-6 xl:mt-8">
                    <p className="underline text-[24px] md:text-[36px] xl:text-[48px]">
                        About the Dev:
                    </p>
                    <p className="md:text-[20px] xl:text-[24px]">
                        My name is Benjamin Stubina. I'm a former Materials Science Engineer turned self-taught software developer from Toronto, Canada.
                    </p>
                    <p className="md:text-[20px] xl:text-[24px] mt-2">
                        I'm currently looking for full-time work!
                    </p>
                    <div className="flex flex-col mt-3 md:mt-4">
                        <p className="underline text-[24px] md:text-[36px] xl:text-[48px]">
                            Contact me:
                        </p>
                        <div className="flex flex-col gap-1 md:gap-2">
                            <a className="cursor-pointer flex gap-2 md:gap-4 xl:gap-6" href="https://flf-freelance.netlify.app" target="_">
                                <img src={portfolio} className="w-[24px] md:w-[30px] xl:w-[40px]" />
                                <span className="flex self-center text-[18px] md:text-[20px] xl:text-[28px]">
                                    Portfolio Site
                                </span>
                            </a>
                            <a className="cursor-pointer flex gap-2 md:gap-4 xl:gap-6" href="https:github.com/BenjaminStubina" target="_">
                                <img src={github} className="w-[24px] md:w-[30px] xl:w-[40px]" />
                                <span className="flex self-center text-[18px] md:text-[20px] xl:text-[28px]">
                                    Github
                                </span>
                            </a>
                            <a className="cursor-pointer flex gap-2 md:gap-4 xl:gap-6" href="https:www.linkedin.com/in/benjamin-stubina/" target="_">
                                <img src={linkedin} className="w-[24px] md:w-[30px] xl:w-[40px]" />
                                <span className="flex self-center text-[18px] md:text-[20px] xl:text-[28px]">
                                    LinkedIn
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </Dialog>
    )
}

export default Modal;