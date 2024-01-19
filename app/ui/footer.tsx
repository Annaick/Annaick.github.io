import { Divider, Link } from "@nextui-org/react"

export default function Footer (){
    return (
        <div>
            <Divider className="mb-4"></Divider>
            <footer className="flex text-xs justify-between">
            
                <nav>
                    <ul aria-label="Les sections de la page web list-disc">
                        <li className="mb-1">
                            <Link className="text-default-700 dark:text-default-500 text-xs" href="/documents/annaick__CV--2024.pdf">Download CV</Link>
                        </li>
                        <li className="mb-1">
                            <Link className="text-default-700 dark:text-default-500 text-xs" href="#presentation">Presentation</Link>
                        </li>
                        <li className="mb-1">
                            <Link className="text-default-700 dark:text-default-500 text-xs" href="#aPropos">A propos</Link>
                        </li>
                        <li className="mb-1">
                            <Link className="text-default-700 dark:text-default-500 text-xs" href="#services">Services</Link>
                        </li>
                        <li className="mb-1">
                            <Link className="text-default-700 dark:text-default-500 text-xs" href="#competences">Compétences</Link>
                        </li>
                        <li className="mb-1">
                            <Link className="text-default-700 dark:text-default-500 text-xs" href="#projets">Projets</Link>
                        </li>
                    </ul>
                </nav>
                <ul aria-label="Liste de mes coordonnées">
                    <li className="mb-1">
                        <Link className="text-xs" href="mailto:annaick.tiana@gmail.com">annaick.tiana@gmail.com</Link>
                    </li>
                    <li>
                        <Link className="text-xs" href="phone:+261344344107">+261 34 43 441 07</Link>
                    </li>
                </ul>
            </footer>
        </div>
    )
}