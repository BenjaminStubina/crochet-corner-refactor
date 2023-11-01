import Header from "../components/Header";

const Homepage = () => {
    return (
        <>
            <Header color='Home' />
            <section className="flex flex-col font-bold gap-4 my-4">
                <h2 className="flex justify-center self-center w-[280px] text-center text-[24px]">
                    Welcome to the Crochet Corner!
                </h2>
                <p className="flex justify-center self-center text-[16px] w-[80%] text-center">
                    Crochet Corner was developed as a hub for crochet enthutiast of all skill levels.
                </p>
                <p className="flex justify-center self-center text-[16px] w-[80%] text-center">
                    Use the site to learn more about the different types of crochet stitches and how to differentiate between US & UK notations!
                </p>
            </section>
        </>
    )
}

export default Homepage;