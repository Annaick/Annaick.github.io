import { useEffect, useState } from 'react'
import { ConfigProvider , Skeleton, Space } from 'antd'
import   Headroom  from 'react-headroom'
import './App.css'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'



function App() {

  return (
    <>

      <ConfigProvider
      theme={{
        token:{
          colorPrimary: '#08dd81',
          colorLink: 'rgb(62, 78, 92)',
          colorTextHeading: '#00afff',
          fontSizeHeading1: '1.8rem'
        },
        components:{
        }
      }}>
        <Header logo={logoSrc} bg = {bgSrc} />
        <Main />
        <Footer />
      </ConfigProvider>
    </>
  )
}

export default App
