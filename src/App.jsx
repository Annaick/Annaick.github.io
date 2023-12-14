import { useEffect, useState } from 'react'
import { ConfigProvider , Skeleton, Space } from 'antd'
import   Headroom  from 'react-headroom'
import './App.css'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'

function App() {
  const [loading, setLoading] = useState (true)
  useEffect (()=>{setLoading(false)}, [])
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
        <Header />
        <Main />
        <Footer />
      </Skeleton>
      <Skeleton title active loading={loading} style={{padding: '2rem'}}></Skeleton>
      <Skeleton title active loading={loading} style={{padding: '2rem'}}></Skeleton>
      <Skeleton title active loading={loading} style={{padding: '2rem'}}></Skeleton>
      <Skeleton title active loading={loading} style={{padding: '2rem'}}></Skeleton>
      <Skeleton title active loading={loading} style={{padding: '2rem'}}></Skeleton>
      </ConfigProvider>
    </>
  )
}

export default App
