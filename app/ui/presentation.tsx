'use client'
import { Button, Avatar, Link } from "@nextui-org/react"
import { TextLoop } from "react-text-loop-ts"

export default function Presentation(){

   return(
   <main className="font-bold pt-[30px] p-4 mb-10 md:mt-10 text-center relative">
        <div className="md:flex md:flex-row-reverse justify-between">
            <div className="mb-10 relative md:mb-0 z-10 flex justify-center">
                <Avatar src="/images/annaick__img.png" size="lg" name="A" 
                className="border-2 w-[90px] h-[90px] md:w-[180px] md:h-[180px] border-solid border-indigo-500 pl-1 pb-1 bg-black"></Avatar>
            </div>
            <div className="md:text-start">
                <p className="text-xl md:text-3xl">Bonjour, je suis</p>
                <h1 id="presentation" className="text-2xl md:text-4xl font-bolder mb-4">ANNAICK<br />TIANA</h1>
                <h1 className="text-gray-500 font-light md:text-xl">Développeur web full stack - MERN</h1>
            </div>
        </div>
        <div className="flex justify-center gap-2 pr-10  md:justify-start mb-10">
            <p className="font-light  text-gray-500 text-center md:text-xl">Je me spécialise en: </p>
            <div className="border-b-2 border-white border-solid">
                <span className="text-gray-500 ">
                    <TextLoop texts={['MongoDB', 'NextJS', 'NodeJS', 'Typescript', 'WordPress']}></TextLoop>
                </span>
            </div>
        </div>
        <div className="md:flex">
            <Link download href="/documents/annaick__CV--2024.pdf" >
                <Button className="bg-gradient-to-r from-purple-500 to-cyan-700 text-white">Télécharger CV</Button>
            </Link>
        </div>
        <img src="/images/gradient--purple.png" alt=""  className="absolute top-0 md:top-[-50px] md:right-[-100px] right-[-50px] z-0 w-[300px] md:w-[500px]" />
   </main>) 
}