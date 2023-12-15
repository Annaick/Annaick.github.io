import { useEffect, useState } from 'react'
import { ConfigProvider , Skeleton, Space } from 'antd'
import   Headroom  from 'react-headroom'
import './App.css'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'



function App() {
  const [logoSrc, setLogoSrc] = useState (null)
  const [bgSrc, setBgSrc] = useState (null)

  const [lgLoaded, setLgLoaded] = useState (false)
  const [bgLoaded, setBgLoaded] = useState (false)


  useEffect (()=>{
    const logo = new Image();
    const bg = new Image();

    logo.src = '/annaick__logo.svg'
    bg.src = '/pngtree__photo1.png'

    logo.onload = ()=> {
      setLogoSrc (logo.src)
      setLgLoaded (true)
    }

    bg.onload = ()=>{
      setBgSrc (bg.src)
      setBgLoaded (true)
    }
    
  })

  useEffect (()=>{
    if (lgLoaded && bgLoaded){
      setLoading (false)
    }
  }, [lgLoaded, bgLoaded])



  const [loading, setLoading] = useState (true)
  useEffect (()=>{setTimeout(()=>setLoading(false), 3000)})
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
      <Skeleton style={{padding: '2rem'}} active paragraph={{rows: 6}}  loading={loading}>
        <Header logo={logoSrc} bg = {bgSrc} />
        <Main />
        <Footer />
      </Skeleton>
      <Skeleton title active loading={loading} style={{padding: '2rem'}}></Skeleton>
      <Skeleton.Image title active loading={loading} style={{padding: '2rem', width: '300px', height: '300px'}}></Skeleton.Image>
      <Skeleton title active loading={loading} paragraph={{rows: 20}} style={{padding: '2rem'}}></Skeleton>
      </ConfigProvider>
    </>
  )
}

export default App
