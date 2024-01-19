'use client'

import { Button, Card, CardHeader, CardBody, CardFooter, Link } from "@nextui-org/react"
import { useState } from "react"
import Image from "next/image"
import { IconArrowDown, IconEyeFilled } from "@tabler/icons-react"
import {JackInTheBox as Flip } from "react-awesome-reveal"
import { link } from "fs"

const list = [
    {
        title: 'Site web pour le startup Romula',
        content: 'Création d\'site web pour l\'entreprise nouvellement créee et basée à Fianarantsoa afin de gagner en visibilité',
        image: '/projects/romula.png',
        link: 'https://romula.vercel.app'
    },
    {
        title: 'Todo',
        content: 'Une application pour gérer de manière simple vos tâches sauvegardées localement dans le navigateur',
        image: '/projects/todo.png',
        link: 'https://Annaick.github.io/toDo'
    },
    {
        title: 'Photocave',
        content: 'Une plateforme simple pour télécharger des images gratuitement en différentes tailles disponibles, avec plus de 5 millions d\'images',
        image: '/projects/photocave.png',
        link: 'https://photocave.vercel.app'
    },
    {
        title: 'Shopee',
        content: 'Un prototype de site vitrine basée sur un API imitateur où vous pouvez acheter des produits avec de l\'argent imaginaire',
        image: '/projects/shopee.png',
        link: 'https://Annaick.github.io/Shopee'
    },
    {
        title: 'Dashboard',
        content: 'Une plateforme pour gérer les clients d\'une entreprise à partir d\'une base de donnéees distante et intégrant un système d\'authentification',
        image: '/projects/dashboard.png',
        link: 'https://dashboard-next3.vercel.app'
    },
    {
        title: 'Wakanda',
        content: 'Un site web dedié à l\'univers de wakanda écris en vanilla Javascript(animations, transitions...)',
        image: '/projects/wakanda.png',
        link: 'https://Annaick.github.io/wakanda'
    },
    {
        title: 'Batman',
        content: 'Un site web pour le grand chevalier noir! comprenant toutes les informations de son univers et un quizz pour tester vos connaissances',
        image: '/projects/batman.png',
        link: 'https://Annaick.github.io/batman'
    },
    {
        title: 'Login Page',
        content: 'Un fomulaire interactif et animé pour ajouter du fun aux affaires. Super cool non?',
        image: '/projects/loginpage.png',
        link:'https://Annaick.github.io/loginPage'
    },
    {
        title: 'Gevis',
        content: 'Un application de bureau écrit en Javascipt pour gérer les visiteurs des sites touristiques, utilisant une base de données embarquéé',
        image: '/projects/gevis.png',
        link: 'https://github.com/Annaick/GeVis'
    },
]


export default function Projet (){
    const [projects, setprojects] = useState (list.slice(0, 3))
    const [show, setShow] = useState (false)

    return(
        <section className="mt-16 mb-16">
            <h1 id="projets" className="mb-4 ">Projets</h1>
            <ul aria-label="liste des projets" className="flex flex-col items-center md:grid md:grid-cols-3">
                {projects.map((projet, inde)=>{
                    return(
                        <li key={projet.title} className="flex justify-center">
                            <Flip triggerOnce>
                            <Card className="mb-4 max-w-[300px]">
                                <CardHeader>
                                    <img className="rounded-lg " alt={`${projet.title} photo`} src={projet.image}></img>
                                </CardHeader>
                                <CardBody className="h-[6rem]">
                                    <h2 className="mb-2">{projet.title}</h2>
                                    <p className="text-xs text-default-500">{projet.content}</p>
                                </CardBody>
                                <CardFooter className="flex-row justify-center">
                                    <div className="flex justify-center">
                                        <Link isExternal href={projet.link}>
                                            <Button variant="light" startContent={<IconEyeFilled></IconEyeFilled>}>Voir</Button>
                                        </Link>
                                    </div>
                                </CardFooter>
                            </Card>
                            </Flip>                           
                        </li>
                    )
                })}
            </ul>
            {!show && <div className="flex justify-center"><Button variant="bordered" endContent={<IconArrowDown></IconArrowDown> }
            onClick={()=>{setShow(true); setprojects(list)}}
             aria-label="afficher plus de projets">Afficher plus</Button></div>}
        </section>
    )
}