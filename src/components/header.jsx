import {Dropdown, Button, Flex, Typography, Space, Anchor} from 'antd'
import { ContactsOutlined, BookOutlined, ProjectOutlined, CustomerServiceOutlined, PhoneOutlined, DownloadOutlined, HomeOutlined, ReadOutlined  } from '@ant-design/icons'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { LinearGradient } from 'react-text-gradients'
import Hamburger from 'hamburger-react'
import { useState } from 'react'
import Headroom from 'react-headroom'

const {Title, Paragraph, Text} = Typography
const items = [
    {
        key: '1',
        label: (<Anchor style={{width: '100%'}} affix={false} items={[
            {key: 'about', href: '#about', title: (<Flex gap={8}><ContactsOutlined className='anchors'></ContactsOutlined> <Text className='anchors'>About me</Text> </Flex>)},
            {key: 'services', href: '#services', title: (<Flex gap={8}><CustomerServiceOutlined className='anchors'></CustomerServiceOutlined> <Text className='anchors'>Services</Text> </Flex>)},
            {key: 'skills', href: '#skills', title: (<Flex gap={8}><BookOutlined className='anchors'></BookOutlined> <Text className='anchors'>Skills</Text> </Flex>)},
            {key: 'projects', href: '#projects', title: (<Flex gap={8}><ProjectOutlined className='anchors'></ProjectOutlined> <Text className='anchors'>Projects</Text> </Flex>)},
            {key: 'contact', href: '#contact', title: (<Flex gap={8}><PhoneOutlined className='anchors'></PhoneOutlined> <Text className='anchors'>Contact</Text> </Flex>)},
        ]}></Anchor>),
    },
]

export default function Header(){
    const [open, SetOpen]= useState (false)
    const [message] = useTypewriter({
        words: ['Hello, world!', 'How are you?', 'I am'],
    })
    return (<>
        <Headroom>
            <nav>
                <Flex justify='space-between' align='center' style={{height: '100%'}}>
                    <Dropdown  menu={{items}} open={open} onOpenChange={e=>SetOpen(!open)} trigger={'click'}>
                        <Button className='center' aria-label='Navigation menu'  type='text' icon={<Hamburger toggled={open} direction='right' hideOutline label='Open navigation menu' rounded  size={20} color='rgb(62, 78, 92)'></Hamburger>}></Button>
                    </Dropdown>
                    <img src="/annaick__logo.svg " className='icon logo' alt="annaick logo" />
                </Flex>
            </nav>
        </Headroom>
        <div >
            <Flex className='header-presentation' vertical justify='center' align='center'>
                <p className='header-presentation__name-before'>{message}</p>
                <p className='header-presentation__name'><LinearGradient gradient={["to right", "#00afff, #00ff8f"]}>ANNAICK</LinearGradient></p>
                <p className='header-presentation__name-after'>TIANA</p>
                <Title style={{fontSize: '1rem', color: 'rgb(62, 78, 92)', marginBottom: '30px'}}>Front-end developer & UI/UX Designer</Title>
                <Button icon={<DownloadOutlined></DownloadOutlined>} href='/annaick__CV.pdf' download classNames='fluent' type='primary' aria-label='click to download cv'>DOWNLOAD CV</Button>
                <img src="/pngtree__photo1.png" alt="web development illustration" className='background' />
            </Flex>
        </div>
        <div className='info'>
            <Flex justify='space-around'>
                <Space className='lightText'><HomeOutlined></HomeOutlined> <Text className='lightText'>Fianarantsoa/Madagascar</Text></Space>
                <Space className='lightText'><ReadOutlined></ReadOutlined> <Text className='lightText'>Student at ENI</Text></Space>
            </Flex>
        </div>
        <summary>
            
            <Title className='sectionHeading' id='about'><LinearGradient gradient={["to right", "#00afff, #00ff8f"]}>ABOUT ME</LinearGradient></Title>
            <Paragraph className='paragraph' style={{textAlign: 'justify', fontFamily: 'dana light, sans-serif'}}>I am a 19-year-old <em>computer science student</em>. I am passionate about <em>web design and development</em>, and I always bring a touch of innovation to my projects for my own satisfaction and for my clients' satisfaction.</Paragraph>
        </summary>
    </>)
}