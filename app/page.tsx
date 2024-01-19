'use client'

import Loader from "./ui/loader"
//import  Presentation  from "./ui/presentation"
//import  Summary  from "./ui/summary"
//import Main from "./ui/main"
//import  Competence  from "./ui/competence"
//import  Projet  from "./ui/projets"
//import  Contact  from "./ui/contact"
//import  Footer  from "./ui/footer"
import { lazy, Suspense, useEffect, useState } from "react"

const Presentation = lazy(()=>import ("./ui/presentation"))
const Summary = lazy(()=>import ("./ui/summary"))
const Main = lazy(()=>import ("./ui/main"))
const Competence = lazy(()=>import ("./ui/competence"))
const Projet = lazy(()=>import ("./ui/projets"))
const Contact = lazy(()=>import ("./ui/contact"))
const Footer = lazy(()=>import ("./ui/footer"))



export default function Home() {
  return (
    <main className="p-4">
      <Suspense fallback={<Loader></Loader>}>
        <Presentation></Presentation>
        <Summary></Summary>
        <Main></Main>
        <Competence></Competence>
        <Projet></Projet>
        <Contact></Contact>
        <Footer></Footer>
      </Suspense>
    </main>
  )
}
