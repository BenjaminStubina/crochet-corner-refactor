import { Dialog } from "@mui/material";
import portfolio from '../../assets/techIcons/devil-logo.svg'
import github from '../../assets/techIcons/github.png'
import linkedin from '../../assets/techIcons/linkedin.png'
import TechList from "../TechList/TechList";

const Modal = ({ open, handleClose }) => {
    return (
        <Dialog open={open} onClose={handleClose}>
            <section className="flex flex-col p-4">
                <div className="flex flex-col">
                    <p className="text-[24px] md:text-[36px]">
                        About the Project:
                    </p>
                    <p className="md:text-[20px]">
                        This project was developed as my capstone while completing a Software Engineering bootcamp at BrainStation in Toronto, Canada.
                    </p>
                    <p className="mt-2 md:text-[20px]">
                        The project is dedicated to my girlfriend who began to learn to crochet at the time.
                    </p>
                </div>
                <div className="mt-2">
                    <p className="text-[20px] md:text-[28px]">
                        TechStack:
                    </p>
                    <TechList />
                </div>
                <div className="flex flex-col mt-4">
                    <p className="text-[24px] md:text-[36px]">
                        About the Dev:
                    </p>
                    <p className="md:text-[20px]">
                        My name is Benjamin Stubina. I'm a former Materials Science Engineer turned self-taught software developer from Toronto, Canada. I'm currently looking for full-time work!
                    </p>
                    <div className="flex flex-col gap-1 md:gap-3 mt-3">
                        <p className="text-[24px] md:text-[36px]">
                            Contact me:
                        </p>
                        <a className="flex gap-2" href="https://flf-freelance.netlify.app" target="_">
                            <img src={portfolio} className="w-[30px]" />
                            <span className="flex self-center text-[18px] md:text-[20px]">
                                Portfolio Site
                            </span>
                        </a>
                        <a className="flex gap-2" href="https:github.com/BenjaminStubina" target="_">
                            <img src={github} className="w-[30px]" />
                            <span className="flex self-center text-[18px] md:text-[20px]">
                                Github
                            </span>
                        </a>
                        <a className="flex gap-2" href="https:www.linkedin.com/in/benjamin-stubina/" target="_">
                            <img src={linkedin} className="w-[30px]" />
                            <span className="flex self-center text-[18px] md:text-[20px]">
                                LinkedIn
                            </span>
                        </a>
                    </div>
                </div>
            </section>
        </Dialog>
    )
}

export default Modal;