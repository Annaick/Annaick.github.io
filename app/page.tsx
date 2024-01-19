'use server'

import Home from "./app"
import { Metadata } from "next"

export const metadata: Metadata ={
  title: 'Tiana Annaick - Développeur web Full stack - MERN',
  description: 'Je suis un développeur web indépendant avec 3 années d\'expériences. Je me passione pour le language Javascript et ses frameworks',
  creator: 'Tiana Annaick',
  openGraph:{
    title: 'Tiana Annaick - Développeur web full stack MERN',
    description: 'Je suis un développeur web indépendant avec 3 années d\'expériences. Je me passione pour le language Javascript et ses frameworks'
  }
}

export default function Page(){
  return(
    <Home></Home>
  )
}