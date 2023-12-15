import { useEffect, useState } from 'react'
import { ConfigProvider , Skeleton, Space } from 'antd'
import   Headroom  from 'react-headroom'
import './App.css'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'



function App() {
  const [loading, setLoading] = useState (true)
  useEffect (()=>{setTimeout(()=>setLoading(false), 3000)}, [])
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
        <Header setLoading={setLoading} />
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
