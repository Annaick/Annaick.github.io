'use client'
import { Slide, Bounce } from "react-awesome-reveal"

const list = [
    {
        heading: 'Languages de programmation',
        content: [
            {title: 'Javascript', icon: '/icons/javascript-1.svg'},
            {title: 'Typescript', icon: '/icons/typescript.svg'},
            {title: 'SQL', icon: '/icons/sql.svg'},
            {title: 'Python', icon: '/icons/python-5.svg'},
            {title: 'C++', icon: '/icons/cpp.svg'},
        ]
    },
    {
        heading: 'Technologies web',
        content: [
            {title: 'HTML', icon: '/icons/html-1.svg'},
            {title: 'CSS', icon: '/icons/css-3.svg'},
            {title: 'Sass', icon: '/icons/sass-1.svg'},
            {title: 'Postcss', icon: '/icons/postcss-logo-3.svg'},
        ]
    },
    {
        heading: 'Frameworks et librairies',
        content: [
            {title: 'NextJS', icon: '/icons/nextjs.svg'},
            {title: 'React', icon: '/icons/react-2.svg'},
            {title: 'NodeJS', icon: '/icons/node-js.svg'},
            {title: 'JQuery', icon: '/icons/jquery.svg'},
            {title: 'Tailwind', icon: '/icons/tailwind-css-2.svg'},
            {title: 'AntD', icon: '/icons/antdesign.svg'},
            {title: 'MUI', icon: '/icons/material-ui-1.svg'},
            {title: 'QT', icon: '/icons/qt-1.svg'},
        ]
    },
    {
        heading: 'Outils de dévelopement',
        content: [
            {title: 'MongoDB', icon: '/icons/mongodb-original-wordmark.svg'},
            {title: 'Wordpress', icon: '/icons/wordpress.svg'},
            {title: 'Elementor', icon: '/icons/elementor.svg'},
            {title: 'Git', icon: '/icons/git-icon.svg'},
            {title: 'Github', icon: '/icons/github-icon-1.svg'},
            {title: 'Vite', icon: '/icons/vite.svg'},
            {title: 'Webpack', icon: '/icons/webpack.svg'},
        ]

    },
    {
        heading: 'Outils graphiques',
        content: [
            {title: 'Illustrator', icon: '/icons/illustrator.svg'},
            {title: 'XD', icon: '/icons/xd.svg'},
            {title: 'Photoshop', icon: '/icons/photoshop.svg'},
            {title: 'Figma', icon: '/icons/figma-5.svg'},
            {title: 'SketchUp', icon: '/icons/sketchup.svg'},
            {title: 'V-ray', icon: '/icons/vray.svg'},
        ]
    }
]


export default function Competence (){
    return(
        <section>
            <h1 className="mb-4 md:text-2xl">
                Compétences
            </h1>
            <p className="text-sm mb-10 text-default-600">
                La vie est un apprentissage sans fin. Chaque jour je m&apos;initie et découvre de nouvelles technologies
            </p>
            <ul id="competences" aria-label='liste des compétences' className="md:grid grid-cols-3 align-center">
                {list.map((section, index)=>{
                    return(
                        <li className='mb-6' key={`${section.heading}`}>
                            <h2  className='mb-6 text-sm text-center text-sm underline'>{section.heading}</h2>
                            <Bounce triggerOnce>
                                <ul  className="grid grid-cols-2 items-center gap-x-4 pl-4" aria-label={`liste de ${section.heading}`}>
                                    {section.content.map((tech)=>{
                                        return (
                                            <li className='flex gap-2 mb-4' key={`${tech.title}`}>
                                                <img width={15} src={tech.icon} alt={`${tech.title} logo`} />
                                                <span className='text-xs'>{tech.title}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </Bounce>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}