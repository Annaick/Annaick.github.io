'use client'

import Loader from "./ui/loader"

import { lazy, useEffect, useState } from "react"

const Presentation = lazy(()=>import ("./ui/presentation"))
const Summary = lazy(()=>import ("./ui/summary"))
const Main = lazy(()=>import ("./ui/main"))
const Competence = lazy(()=>import ("./ui/competence"))
const Projet = lazy(()=>import ("./ui/projets"))
const Contact = lazy(()=>import ("./ui/contact"))
const Footer = lazy(()=>import ("./ui/footer"))



export default function Home() {
  const [isReady, setIsReady] = useState (false)
  useEffect(()=>{
    setTimeout (()=>{
      setIsReady (true)
    }, 2000)
  }, [])

  if (!isReady){
    return (
      <Loader></Loader>
    )
  }
  return (
    <main className="p-4">
        <Presentation></Presentation>
        <Summary></Summary>
        <Main></Main>
        <Competence></Competence>
        <Projet></Projet>
        <Contact></Contact>
        <Footer></Footer>
    </main>
  )
}
