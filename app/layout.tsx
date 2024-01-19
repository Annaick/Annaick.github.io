'use client'
import { useState, useEffect } from 'react'
import { Roboto as Font } from 'next/font/google'
import './globals.css'
import Providers from './ui/provider'
import Header from './ui/header'

const police = Font({subsets: ['latin'], weight: '400'})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [locale] = useState ((): boolean =>{
    if (typeof window != "undefined"){
      let save = localStorage.getItem ('darkMode')
      if (save == null || save == undefined){
        return false
      }
      return JSON.parse(save)
    }
    return false
  })
  const [darkMode, setDarkMode] = useState (locale)
  const [selectedMode, setSelectedMode] = useState<boolean>()



  useEffect (()=>{
    window.localStorage.setItem('darkMode', JSON.stringify(darkMode))
    setSelectedMode(darkMode)
  }, [locale, darkMode])



  return (
    <html lang="fr" className={`${selectedMode? 'dark': 'light'} w-[100vw] overflow-x-hidden`}>
      <body className={`${police.className} w-[100vw] overflow-x-hidden max-w-[1000px] mx-auto md:overflow-visible`}>
        <Providers>
          
            <Header setMode={setDarkMode} mode={darkMode}></Header>
            {children}
          
        </Providers>
      </body>
    </html>
  )
}
