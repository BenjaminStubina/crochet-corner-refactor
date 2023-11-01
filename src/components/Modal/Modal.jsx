import { Dialog } from "@mui/material";
import JS from '../../assets/techIcons/js.png'
import React from '../../assets/techIcons/react.png'
import HTML from '../../assets/techIcons/html.png'
import SASS from '../../assets/techIcons/sass.png'
import Tailwind from '../../assets/techIcons/tailwind-css.svg'
import Mongo from '../../assets/techIcons/modonDB.png'
import Node from '../../assets/techIcons/nodejs.png'
import Express from '../../assets/techIcons/express.png'
import portfolio from '../../assets/techIcons/devil-logo.svg'
import github from '../../assets/techIcons/github.png'
import linkedin from '../../assets/techIcons/linkedin.png'

const Modal = ({ open, handleClose }) => {
    return (
        <Dialog open={open} onClose={handleClose}>
            <section className="flex flex-col p-4">
                <div className="flex flex-col">
                    <p className="text-[24px]">
                        About the Project:
                    </p>
                    <p>
                        This project was developed as my capstone while completing a Software Engineering bootcamp at BrainStation in Toronto, Canada.
                    </p>
                    <p className="mt-2">
                        The project is dedicated to my girlfriend who began to learn to crochet at the time.
                    </p>
                </div>
                <div className="mt-4">
                    <p className="text-[20px]">
                        TechStack:
                    </p>
                    <div className="flex flex-wrap gap-1">
                        <img src={JS} className="w-[30px]" title='JavaScript' alt='JavaScript'/>
                        <img src={React} className="w-[30px]" title='React' alt='React'/>
                        <img src={HTML} className="w-[30px]" title='HTML' alt='HTML'/>
                        <img src={SASS} className="w-[30px]" title='SASS' alt='SASS'/>
                        <img src={Tailwind} className="w-[30px]" title='TailwindCSS' alt='TailwindCSS'/>
                        <img src={Mongo} className="w-[30px]" title='MongoDB' alt='MongoDB'/>
                        <img src={Node} className="w-[30px]" title='NodeJS' alt='NodeJS'/>
                        <img src={Express} className="w-[30px]" title='Express' alt='Express'/>
                    </div>
                </div>
                <div className="flex flex-col mt-4">
                    <p className="text-[24px]">
                        About the Dev:
                    </p>
                    <p>
                        My name is Benjamin Stubina. I'm a former Materials Science Engineer turned self-taught software developer from Toronto, Canada. I'm currently looking for full-time work!
                    </p>
                    <div className="flex flex-col gap-1 mt-3">
                        <p className="text-[24px]">
                            Contact me:
                        </p>
                        <a className="flex gap-2" href="https://flf-freelance.netlify.app" target="_">
                            <img src={portfolio} className="w-[30px]" />
                            <span className="flex self-center text-[18px]">
                                Portfolio Site
                            </span>
                        </a>
                        <a className="flex gap-2" href="https:github.com/BenjaminStubina" target="_">
                            <img src={github} className="w-[30px]" />
                            <span className="flex self-center text-[18px]">
                                Github
                            </span>
                        </a>
                        <a className="flex gap-2" href="https:www.linkedin.com/in/benjamin-stubina/" target="_">
                            <img src={linkedin} className="w-[30px]" />
                            <span className="flex self-center text-[18px]">
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