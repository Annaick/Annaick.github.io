import { Avatar, Chip } from "@nextui-org/react"
import { IconCircleCheckFilled, IconEggFilled, IconLocationFilled, IconMan, IconPhotoFilled, IconUserFilled } from "@tabler/icons-react"
import { IconCircleKeyFilled } from "@tabler/icons-react"

export default function Summary (){
    const date = new Date()
    return(
        <>
        <section className="relative mb-16" aria-label="Resumé de ma personne">
            <img src="/images/gradient--blue.png" alt="" className="absolute top-[-50px] left-0 md:w-[500px] w-[300px]" />
            <div className="flex flex-wrap gap-4 justify-center">
                <Chip startContent={<IconCircleCheckFilled className="text-green-500"></IconCircleCheckFilled>} className="shadow-lg bg-default-50/70 backdrop-blur-md text-xs">0{date.getFullYear() - 2021} années d&apos;expériences</Chip>
                <Chip startContent={<IconEggFilled className="text-indigo-500"></IconEggFilled>} className="shadow-lg bg-default-50/70 backdrop-blur-md text-xs">{date.getFullYear() - 2004} ans</Chip>
                <Chip startContent={<IconCircleKeyFilled className="text-orange-500"></IconCircleKeyFilled>} className="shadow-lg bg-default-50/70 backdrop-blur-md text-xs">Etudiant en data science - ENI</Chip>
                <Chip startContent={<IconLocationFilled className="text-cyan-500"></IconLocationFilled>} className="shadow-lg bg-default-50/70 backdrop-blur-md text-xs">Fianarantsoa - Madagascar</Chip>
                <Chip startContent={<IconUserFilled className="text-red-500"></IconUserFilled>} className="shadow-lg bg-default-50/70 backdrop-blur-md text-xs">Homme</Chip>
            </div>
            
        </section>
        <section id="aPropos" className="mb-16">
            <h1 className="mb-4 md:text-2xl">A propos</h1>
            <p className="text-sm text-default-600">Je suis un développeur web indépendant se spécialisant autour du language <span className="text-blue-500">Javascript et ses Frameworks. </span> 
                Etant à l&apos;aise avec la partie <span className="text-orange-500">front end</span> aussi bien que la partie <span className="text-orange-500">back end</span>,
                J&apos;ai les compétences nécessaires pour gérer un projet, seul ou en équipe. <br /> <br />
                Se passionant pour les <span className="text-blue-500">nouvelles technologies</span>, je m&apos;interesse aux technologies les plus récentes et les plus utilisées pour garantir <span className="text-blue-500">la qualité et l&apos;efficacité</span> du travail.
            </p>

        </section>
        </>
    )
}