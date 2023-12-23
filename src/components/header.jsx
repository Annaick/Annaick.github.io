import {Dropdown, Button, Flex, Typography, Space, Anchor, Spin} from 'antd'
import { ContactsOutlined, BookOutlined, ProjectOutlined, CustomerServiceOutlined, PhoneOutlined, DownloadOutlined, HomeOutlined, ReadOutlined  } from '@ant-design/icons'
import { useTypewriter } from 'react-simple-typewriter'
import { LinearGradient } from 'react-text-gradients'
import Hamburger from 'hamburger-react'
import { useState, Suspense } from 'react'
import { Img, resource } from 'react-suspense-img'
import Headroom from 'react-headroom'
import { Slide, Fade } from "react-awesome-reveal"
import Goo from 'gooey-react'

const {Title, Paragraph, Text} = Typography
const items = [
    {
        key: '1',
        label: (<Anchor style={{width: '100%'}} affix={false} items={[
            {key: 'about', href: '#about', title: (<Flex gap={8}><ContactsOutlined className='anchors'></ContactsOutlined> <p className='anchors'>About me</p> </Flex>)},
            {key: 'services', href: '#services', title: (<Flex gap={8}><CustomerServiceOutlined className='anchors'></CustomerServiceOutlined> <p className='anchors'>Services</p> </Flex>)},
            {key: 'skills', href: '#skills', title: (<Flex gap={8}><BookOutlined className='anchors'></BookOutlined> <p className='anchors'>Skills</p> </Flex>)},
            {key: 'projects', href: '#projects', title: (<Flex gap={8}><ProjectOutlined className='anchors'></ProjectOutlined> <p className='anchors'>Projects</p> </Flex>)},
            {key: 'contact', href: '#contact', title: (<Flex gap={8}><PhoneOutlined className='anchors'></PhoneOutlined> <p className='anchors'>Contact</p> </Flex>)},
        ]}></Anchor>),
    },
]


resource.preloadImage('/annaick__logo.svg')
resource.preloadImage ('/pngtree__photo1.png')
resource.preloadImage('/annaick__photo--sm.jpg')


export default function Header(prop){
    const [open, SetOpen]= useState (false)
    const [message] = useTypewriter({
        words: ['Hello, world!', 'How are you?', 'I am'],
    })
    return (<>
        <Headroom>
            <nav>
                <Flex justify='space-between' align='center' style={{height: '100%'}}>
                    <Dropdown  menu={{items}} open={open} onOpenChange={e=>SetOpen(!open)} trigger={'click'}>
                        <Button className='center' aria-label='Navigation menu'  type='text' icon={<Hamburger toggled={open} direction='right' hideOutline label='Open navigation menu' rounded  size={20} color='rgb(183, 190, 197)'></Hamburger>}></Button>
                    </Dropdown>
                    <Img src='/annaick__logo.svg' alt='Annaick Logo' className='icon logo'></Img>
                </Flex>
            </nav>
        </Headroom>
        <div >
            <Flex className='header-presentation' vertical justify='center' align='center'>
                <p className='header-presentation__name-before'>{message}</p>
                <p className='header-presentation__name'><LinearGradient gradient={["to right", "#00afff, #00ff8f"]}>ANNAICK</LinearGradient></p>
                <p className='header-presentation__name-after'>TIANA</p>
                <Title className='lightText' style={{fontSize: '1rem', marginBottom: '30px', marginTop: '10px'}}>Front-end react eveloper & UI/UX Designer</Title>
                <Button className='download' icon={<DownloadOutlined></DownloadOutlined>} href='/annaick__CV.pdf' download classNames='fluent' type='primary' aria-label='click to download cv'>DOWNLOAD CV</Button>
                <div className='background' style={{position: 'relative'}}>
                <Goo>
                <svg className='background'>
                    <g style={{animation: 'left 5s linear infinite'}}>
                        <circle style={{animation: 'right 3s linear infinite'}} cx="40%" cy="40%" fill='#7b2dac' r='20%' />
                        <circle cx="55%" cy="55%" fill='#3b2dac' r='23%'/>
                        <circle cx="40%" cy="40%" fill='#2d5eac' r='20%'/>
                    </g>
                </svg>
                </Goo>
                <section className="profil">
                    <Suspense fallback={<Spin></Spin>}>
                        <img src="/annaick__photo--sm.jpg" alt="Annaick profil pic" />
                    </Suspense>
                </section>
                </div>
                {/*<Suspense fallback={<Skeleton.Image active style={{width:'100vw', height:'350px', marginTop: '50px'}}></Skeleton.Image>}>
                    <Img src='/pngtree__photo1.png' alt='Web development illustration' className='background'></Img>
                </Suspense>*/}
            </Flex>
        </div>
        <div className='info'>
            <Flex style={{marginLeft: 'auto', marginRight: 'auto'}} justify='space-around' vertical align='center'>
                <Space className='lightText'><HomeOutlined></HomeOutlined> <Text className='lightText paragraph'>Fianarantsoa/Madagascar</Text></Space>
                <Space className='lightText'><ReadOutlined></ReadOutlined> <Text className='lightText paragraph'>Student at ENI</Text></Space>
                <Space><Text className='lightText paragraph'>He/Him - 19 years old</Text></Space>
            </Flex>
        </div>
        <summary>    
            <Title className='sectionHeading' id='about'><LinearGradient gradient={["to right", "#00afff, #00ff8f"]}>ABOUT ME</LinearGradient></Title>
            <Fade triggerOnce>
                <p className='paragraph lightText' style={{textAlign: 'justify'}}>I am a <em>computer science student</em>. I am passionate about <em>web design and development</em>, and I always bring a touch of innovation to my projects for my own satisfaction and for my clients' satisfaction.</p>
            </Fade>

        </summary>
    </>)
}