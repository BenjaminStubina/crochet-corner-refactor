import TECHSTACK from "../../constants/techstack";
import Tech from "../Tech/Tech";

const TechList = () => {
    return (
        <section className="flex flex-wrap gap-1 md:gap-6">
            {TECHSTACK.map((tech) => {
                return (
                    <Tech 
                        key={tech.tech}
                        tech={tech}
                    />
                )
            })}
        </section>
    )
}

export default TechList