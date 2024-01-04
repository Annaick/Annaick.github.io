import { Typography, Space, Card, Avatar, List, Carousel, Image, Flex, Button} from "antd"
import { ToolOutlined, EditOutlined, WeiboCircleOutlined, UpCircleOutlined, CodeSandboxOutlined, MessageOutlined, WhatsAppOutlined, LinkedinOutlined, CodeOutlined, EyeOutlined, EditFilled} from "@ant-design/icons"
import { LinearGradient } from 'react-text-gradients'
import { Slide, Fade } from "react-awesome-reveal"

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-cards'

import { EffectCards } from 'swiper/modules'

//web
import html from '/html-1.svg'
import css from '/css-3.svg'
import js from '/javascript-1.svg'
import sass from '/sass-1.svg'
import less from '/less.svg'
import postcss from '/postcss-logo-3.svg'
 
//languages
import c from '/c.svg'
import cpp from '/cpp.svg'
import sql from '/sql.svg'
import python from '/python-5.svg'
import arduino from '/arduino.svg'

//Framework
import bootstrap from '/bootstrap.svg'
import tailwind from '/tailwind-css-2.svg'
import react from '/react-2.svg'
import jquery from '/jquery.svg'
import antdesign from '/antdesign.svg'
import mui from '/material-ui-1.svg'
import qt from '/qt-1.svg'

//build tool
import npm from '/npm.svg'
import vite from '/vite.svg'
import webpack from '/webpack.svg'
import git from '/git-icon.svg'
import github from '/github-icon-1.svg'

//design
import illustrator from '/illustrator.svg'
import photoshop from '/photoshop.svg'
import xd from '/xd.svg'
import figma from '/figma-5.svg'
import sketchup from '/sketchup.svg'
import vray from '/vray.svg'



const list = [
    {
        heading: 'Programming languages',
        content: [
            {title: 'C', icon: c},
            {title: 'C++', icon: cpp},
            {title: 'SQL', icon: sql},
            {title: 'Python', icon: python},
            {title: 'Arduino', icon: arduino},
        ]
    },
    {
        heading: 'Web technologies',
        content: [
            {title: 'HTML', icon: html},
            {title: 'CSS', icon: css},
            {title: 'Javascript', icon: js},
            {title: 'Sass', icon: sass},
            {title: 'Less', icon: less},
            {title: 'Postcss', icon: postcss},
        ]
    },
    {
        heading: 'Frameworks and librairies',
        content: [
            {title: 'React', icon: react},
            {title: 'JQuery', icon: jquery},
            {title: 'Tailwind', icon: tailwind},
            {title: 'Bootstrap', icon: bootstrap},
            {title: 'AntD', icon: antdesign},
            {title: 'MUI', icon: mui},
            {title: 'QT', icon: qt},
        ]
    },
    {
        heading: 'Development tools',
        content: [
            {title: 'npm', icon: npm},
            {title: 'Vite', icon: vite},
            {title: 'Webpack', icon: webpack},
            {title: 'Git', icon: git},
            {title: 'Github', icon: github},
        ]
    },
    {
        heading: 'Graphic design software',
        content: [
            {title: 'Illustrator', icon: illustrator},
            {title: 'XD', icon: xd},
            {title: 'Photoshop', icon: photoshop},
            {title: 'Figma', icon: figma},
            {title: 'SketchUp', icon: sketchup},
            {title: 'V-ray', icon: vray},
        ]
    }
]

const services = [
    {icon: <ToolOutlined></ToolOutlined>, heading: 'Web page creation', content: 'Customized and adapted web pages.'},
    {icon: <UpCircleOutlined></UpCircleOutlined>, heading: 'Website maintenance', content: 'Maintenance and improvement of your website'},
    {icon: <EditOutlined></EditOutlined>, heading: 'UI/UX Design', content: 'I design ergonomic, intuitive and aesthetic application interfaces.'},
    {icon: <CodeSandboxOutlined></CodeSandboxOutlined>, heading: '3D design', content: '3D plan models, respecting the technical and artistic constraints.'},
]



const {Title, Paragraph, Text, Link} = Typography
export default function Main(){
    return (<>
        <section className="services" style={{marginBottom: '100px'}}>
            <Title id="services" className="sectionHeading"><LinearGradient gradient={["to right", "#00afff, #00ff8f"]}>SERVICES</LinearGradient></Title>
            <List className="servicesList" style={{padding: '1rem'}} grid={{column: 2, md: 4, lg: 4, xl: 4, xxl: 4, gutter: 15}} dataSource={services} renderItem={(item)=>{
                return (
                    <List.Item>
                    <Card size="small" className="dark service gradient">
                        <Space direction="vertical">
                            <Avatar shape="square" size='large' className="service__icon" icon={item.icon}></Avatar>
                            <Title className="service__heading" style={{color: 'white', fontSize: '1rem'}} level={2}>{item.heading}</Title>
                            <Paragraph className="service__content" style={{fontSize: '0.8rem', color: 'white', textAlign: 'justify', wordBreak: 'break-all', hyphens: 'auto', lineBreak:'auto', fontFamily: 'dana light, sans-serif'}}>
                                {item.content}
                            </Paragraph>
                        </Space>
                    </Card>
                </List.Item>
                )
            }}>
            </List>
        </section>
        <section className="skills">
            <Title className="sectionHeading" id="skills" style={{margin: '0px'}}><LinearGradient gradient={["to right", "#00afff, #00ff8f"]}>SKILLS</LinearGradient></Title>
            <List className="skillsList" itemLayout="horizontal" dataSource={list} renderItem={(item)=>{
                 return (
                    <Fade triggerOnce>
                    <List.Item>
                    <List style={{width: '100%'}} grid={{column: 2, gutter: 100, sm: 4, md: 4, lg: 4, xl: 4, xxl: 4}} itemLayout="horizontal" header={<h3>{item.heading}</h3>} dataSource={item.content} renderItem={(tech)=>{
                        return (<List.Item style={{height: '3rem'}}>
                            <List.Item.Meta style={{display: 'flex', alignItems: 'center', width: '100%'}} avatar={<img src={tech.icon} className="icon"></img>} title={<p>{tech.title}</p>}></List.Item.Meta>
                        </List.Item>)
                    }} />
                 </List.Item>
                    </Fade>
                 )
            }}>
            </List>
        </section>
        <section className="projects" style={{marginBottom: '50px'}}>
            <Title className="sectionHeading" id="projects"><LinearGradient gradient={["to right", "#00afff, #00ff8f"]}>PROJECTS</LinearGradient></Title>
            <Fade triggerOnce>
                <Flex style={{padding: '1rem 3rem'}} align="center" gap={12}><WeiboCircleOutlined></WeiboCircleOutlined><Title level={2} style={{color: 'rgb(62, 78, 92)', fontSize: '1.2rem', textAlign: 'left', margin: '0px'}}> Web </Title></Flex>
                <Paragraph className="paragraph" style={{padding: '1rem', textAlign: 'left' ,marginBottom: '50px', color:'rgb(189, 202, 197)'}}>Here are a few excerpts from my front-end projects. Most of the time, I use <em>react</em> for my applications. It allows great flexibility in the development process.</Paragraph>
            </Fade>
            <Swiper style={{marginBottom: '5rem'}} effect={"cards"} grabCursor={true} modules={[EffectCards]} className="mySwiper">
                <SwiperSlide>
                    <Card actions={[<Button type="link" icon={<EyeOutlined></EyeOutlined>} target="_blank" style={{color: 'black'}} href="https://romula.vercel.app">Preview</Button>]}
                     className="project" cover={<img className="cover" src="/romula.png" alt="Romula company website pic"></img>}>
                        <Card.Meta title='Website for romula company' description={'I was commissioned to create a website for the company ROMULA to increase their visibility'}></Card.Meta>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card actions={[<Button type="link" icon={<EyeOutlined></EyeOutlined>} target="_blank" style={{color: 'black'}} href="https://Annaick.github.io/toDo">Preview</Button>, <Button style={{color: 'black'}} target="_blank" type="link" icon={<CodeOutlined></CodeOutlined>} href="https://github.com/Annaick/toDo">Code</Button>]}
                     className="project" cover={<img className="cover" src="/todo.png" alt="Todo application pic"></img>}>
                        <Card.Meta title='ToDo' description={'A todo application for managing tasks. All CRUD operations are included and tasks are stored using the web storage API.'}></Card.Meta>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card  actions={[<Button type="link" icon={<EyeOutlined></EyeOutlined>} target="_blank" style={{color: 'black'}} href="https://Annaick.github.io/wakanda">Preview</Button>, <Button style={{color: 'black'}} target="_blank" type="link" icon={<CodeOutlined></CodeOutlined>} href="https://github.com/Annaick/wakanda">Code</Button>]} className="project" cover={<img className="cover" src="/wakanda.png" alt="Wakanda application pic"></img>}>
                        <Card.Meta title='Wakanda' description='A complete website dedicated to the world of Wakanda. You will find storybooks, character info and videos, plus a quiz for the more adventurous. All presented with animations and transitions to make the experience fluid and unforgettable. '></Card.Meta>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card  actions={[<Button type="link" icon={<EyeOutlined></EyeOutlined>} target="_blank" style={{color: 'black'}} href="https://Annaick.github.io/Shopee">Preview</Button>, <Button style={{color: 'black'}} target="_blank" type="link" icon={<CodeOutlined></CodeOutlined>} href="https://github.com/Annaick/Shopee">Code</Button>]} className="project" cover={<img src="/shopee.png" className="cover" alt="Shopee application pic"></img>}>
                        <Card.Meta title='Shopee' description='A react-based e-commerce prototype, using fakestore API. Users can browse the catalog, add products to shopping cart and make a payment.'></Card.Meta>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card  actions={[<Button type="link" icon={<EyeOutlined></EyeOutlined>} target="_blank" style={{color: 'black'}} href="https://Annaick.github.io/loginPage">Preview</Button>, <Button style={{color: 'black'}} target="_blank" type="link" icon={<CodeOutlined></CodeOutlined>} href="https://github.com/Annaick/loginPage">Code</Button>]} className="project" cover={<img src="/loginpage.png" className="cover" alt="LoginPage pic"></img>}>
                        <Card.Meta title='Login page' description={'An interactive and animated login page to add a touch of fun to your business and entertain your users. Pretty cool isn\'t it?'}></Card.Meta>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card  actions={[<Button type="link" icon={<EyeOutlined></EyeOutlined>} target="_blank" style={{color: 'black'}} href="https://Annaick.github.io/batman">Preview</Button>, <Button style={{color: 'black'}} target="_blank" type="link" icon={<CodeOutlined></CodeOutlined>} href="https://github.com/Annaick/batman">Code</Button>]} className="project" cover={<img src="/batman.png" className="cover" alt="Batman application pic"></img>}>
                        <Card.Meta title='Batman' description='My first project. An complete application dedicated to the world of the Dark Knight, it lists all  informations and stories about Batman. A quiz is included for those who want to test their fan skills.'></Card.Meta>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card  actions={[<Button style={{color: 'black'}} target="_blank" type="link" icon={<CodeOutlined></CodeOutlined>} href="https://github.com/Annaick/GeVis">Code</Button>]} className="project" cover={<img src="/gevis.png" className="cover" alt="GevIs application pic"></img>}>
                        <Card.Meta title='ToDo' description='A desktop application for managing visitors to tourist sites, based on Qt Quick and SQLite as a database management system, it enables CRUD operations and efficient management of visitors and all the information concerning them.'></Card.Meta>
                    </Card>
                </SwiperSlide>
            </Swiper>
            <Fade triggerOnce>
                <Flex style={{padding: '1rem 3rem'}} align="center" gap={12}><EditFilled></EditFilled><Title level={2} style={{color: 'rgb(62, 78, 92)', fontSize: '1.2rem', textAlign: 'left', margin: '0px'}}> Design </Title></Flex>
                <Paragraph className="paragraph" style={{padding: '1rem', textAlign: 'left', marginBottom: '5rem', color:'rgb(189, 202, 197)'}}>I'm first and foremost a <em>front developer</em>, but I think a good front developer needs to know about design. And so I design all my projects and take inspiration from everywhere</Paragraph>
            </Fade>
            <Flex justify="center">
            <Carousel  style={{ margin: '0rem 1rem', borderRadius: '1rem 1rem', maxWidth: '600px'}} autoplay>
                <Image loading="lazy" className="slider-img" src="/MirrorLogin-01.jpg" alt="Mirror login page design" />
                <Image loading="lazy" className="slider-img" src="/coffee-01.png" alt="coffee shop website design" />
                <Image loading="lazy" className="slider-img" src="/nike-01.png" alt="Nike card design" />
                <Image loading="lazy" className="slider-img" src="/todo-01.png" alt="Todo app design" />
            </Carousel>
            </Flex>
        </section>
    </>)
}