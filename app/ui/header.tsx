'use client'

import Image from "next/image";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, Avatar, Button, NavbarMenuToggle, Link } from "@nextui-org/react";
import { IconBrandGithubFilled, IconSunFilled, IconMoonFilled } from "@tabler/icons-react";
import { useState } from "react";




export default function Header (props: any){
    const [isMenuOpen, setIsMenuOpen] = useState (false)

    const menuItems = [
        {link: '/documents/annaick__CV--2024.pdf', label: 'Download CV'},
        {link: '#presentation', label: 'Presentation'},
        {link: '#aPropos', label: 'A propos'},
        {link: '#services', label: 'Services'},
        {link: '#competences', label: 'Compétences'},
        {link: '#projets', label: 'Projets'},
        {link: '#contact', label: 'Contact'},
    ]
    return(
        <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
            <NavbarBrand className="gap-4">
                <Avatar name="A" radius="sm" src="/icons/annaick__logo.svg" size="sm" className="bg-transparent p-1"></Avatar>
            </NavbarBrand>
            <NavbarContent className="justify-end">
                <NavbarItem className="ml-auto">
                    <Link href="https://github.com/Annaick" isExternal>
                        <Button type="button" variant="light" aria-label="Go to github" isIconOnly>
                            <IconBrandGithubFilled>
                            </IconBrandGithubFilled>
                        </Button>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Button onClick={()=>{props.setMode(!props.mode)}} variant="light" type="button" aria-label="Switch theme mode" isIconOnly>
                        {!props.mode?<IconMoonFilled></IconMoonFilled> :<IconSunFilled></IconSunFilled>}
                    </Button>
                </NavbarItem>  
                <NavbarItem className="hidden md:block">
                    <Link download href="/annaick__CV--2024.pdf">
                        <Button variant="bordered">Télécharger CV</Button>
                    </Link>
                </NavbarItem> 
            </NavbarContent>
            
        </Navbar>
    )
}