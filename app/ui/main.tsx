'use client'

import { Card, CardBody, Avatar } from "@nextui-org/react"
import { Icon3dCubeSphere, IconCardsFilled, IconFlagFilled } from "@tabler/icons-react"
import { Slide } from "react-awesome-reveal"

export default function Main (){
    return (
        <>
        <section id="services" className="mb-20 relative">
            <img className="absolute right-[-50px] md:w-[500px] w-[300px]" src="/images/gradient--orange.png" alt="" />
            <h1 className="mb-4 md:text-2xl">Servives</h1>
            <p className="text-sm mb-10 text-default-600">Mes services sont axés sur <span className="text-orange-500">la conception et le developement web</span>, qui comprennent:</p>
            <Slide cascade triggerOnce delay={0} duration={300}>
            <ul aria-label="liste des services">
                <li>
                    <Card className="p-4 mb-4 border-2 border-none bg-default-50/40 backdrop-blur-sm flex-row gap-4">
                        <IconCardsFilled className="border-solid border-white text-cyan-500"></IconCardsFilled>
                        <div>
                            <h2 className="mb-2 text-sm">Création de sites webs</h2>
                            <p className="text-xs text-default-500">
                                Création de site web adaptés à vos besoins, flexible, responsive et accessible.
                            </p>
                        </div>
                    </Card>
                </li>
                <li>
                    <Card className="p-4 mb-4 border-2 border-none bg-default-50/40 backdrop-blur-sm flex-row gap-4">

                        <Icon3dCubeSphere className="border-solid border-white text-cyan-500"></Icon3dCubeSphere>
                        <div>
                            <h2 className="mb-2 text-sm">Création d&apos;applications webs</h2>
                            <p className="text-xs text-default-500">
                                De la modélisation de la base de données à la conception de l&apos;interface jusqu&apos;au produit final.
                            </p>
                        </div>
                    </Card>
                </li>
                <li>
                    <Card className="p-4 mb-4 border-2 border-none bg-default-50/40 backdrop-blur-sm flex-row gap-4">
                        <IconFlagFilled className="border-solid border-white text-cyan-500"></IconFlagFilled>
                        <div>
                            <h2 className="mb-2 text-sm">Maintenance et improvisation</h2>
                            <p className="text-xs text-default-500">
                                Amélioration de l&apos;accesibilité, de l&apos;expérience utilisateur et la performance de votre site web 
                            </p>
                        </div>
                    </Card>
                </li>
                <li>
                    <Card className="p-4 mb-4 border-2 border-none bg-default-50/40 backdrop-blur-sm flex-row gap-4">
                        <IconCardsFilled className="border-solid border-white text-cyan-500"></IconCardsFilled>
                        <div>
                            <h2 className="mb-2 text-sm">Création de sites webs</h2>
                            <p className="text-xs text-default-500">
                                Création de site web adaptés à vos besoins, flexible, responsive et accessible
                            </p>
                        </div>
                    </Card>
                </li>
            </ul>
            </Slide>
        </section>
        </>
    )
}