const Tech = ({ tech }) => {
    return (
        <img src={tech.image} title={tech.title} alt={tech.title} className="w-[30px] md:w-[50px] xl:w-[70px]" />
    )
}

export default Tech;