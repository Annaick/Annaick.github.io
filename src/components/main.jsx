import { Typography, Space, Card, Avatar, List, Carousel, Image, Flex, Button} from "antd"
import { ToolOutlined, EditOutlined, WeiboCircleOutlined, UpCircleOutlined, CodeSandboxOutlined, MessageOutlined, WhatsAppOutlined, LinkedinOutlined, CodeOutlined, EyeOutlined, EditFilled} from "@ant-design/icons"
import { LinearGradient } from 'react-text-gradients'

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

const {Title, Paragraph, Text, Link} = Typography
export default function Main(){
    return (<>
        <section className="services" style={{marginBottom: '100px'}}>
            <Title id="services"><LinearGradient gradient={["to right", "#00afff, #00ff8f"]}>SERVICES</LinearGradient></Title>
            <Space direction="vertical">
                <Space>
                    <Card className="dark">
                        <Space direction="vertical">
                            <Avatar shape="square" size='large' className="green" icon={<ToolOutlined></ToolOutlined>}></Avatar>
                            <Title style={{color: 'white', fontSize: '1rem'}} level={2}>Web page creation</Title>
                            <Paragraph style={{fontSize: '0.8rem', color: 'white', textAlign: 'justify', wordBreak: 'break-all', hyphens: 'auto', lineBreak:'auto', fontFamily: 'dana light, sans-serif'}}>
                                Customized and adapted web pages.
                            </Paragraph>
                        </Space>
                    </Card>
                    <Card className="dark">
                        <Space direction="vertical">
                            <Avatar shape="square" size='large' className="green" icon={<UpCircleOutlined></UpCircleOutlined>}></Avatar>
                            <Title style={{color: 'white', fontSize: '1rem'}} level={2}>Website maintenance</Title>
                            <Paragraph style={{fontSize: '0.8rem', color: 'white', textAlign: 'justify', wordBreak: 'break-all', hyphens: 'auto', lineBreak:'auto', fontFamily: 'dana light, sans-serif'}}>
                                Maintenance and improvement of your website.
                            </Paragraph>
                        </Space>
                    </Card>
                </Space>
                <Space>
                    <Card className="dark">
                        <Space direction="vertical">
                            <Avatar shape="square" size='large' className="green" icon={<EditOutlined></EditOutlined>}></Avatar>
                            <Title style={{color: 'white', fontSize: '1rem'}} level={2}>UI Design</Title>
                            <Paragraph style={{fontSize: '0.8rem', color: 'white', textAlign: 'justify', wordBreak: 'break-all', hyphens: 'auto', lineBreak:'auto', fontFamily: 'dana light, sans-serif'}}>
                            I design ergonomic, intuitive and aesthetic application interfaces.
                            </Paragraph>
                        </Space>
                    </Card>
                    <Card className="dark">
                        <Space direction="vertical">
                            <Avatar shape="square" size='large' className="green" icon={<CodeSandboxOutlined></CodeSandboxOutlined>}></Avatar>
                            <Title style={{color: 'white', fontSize: '1rem'}} level={2}>3D design</Title>
                            <Paragraph style={{fontSize: '0.8rem', color: 'white', textAlign: 'justify', wordBreak: 'break-all', hyphens: 'auto', lineBreak:'auto', fontFamily: 'dana light, sans-serif'}}>
                                3D plan models, respecting the technical and artistic constraints.
                            </Paragraph>
                        </Space>
                    </Card>
                </Space>
            </Space>
        </section>
        <section className="skills">
            <Title id="skills" style={{margin: '0px'}}><LinearGradient gradient={["to right", "#00afff, #00ff8f"]}>SKILLS</LinearGradient></Title>
            <List dataSource={list} renderItem={(item)=>{
                 return (<List.Item>
                    <List grid={{column: 2, gutter: 50}} itemLayout="horizontal" header={<h3>{item.heading}</h3>} dataSource={item.content} renderItem={(tech)=>{
                        return (<List.Item style={{height: '3rem'}}>
                            <List.Item.Meta style={{display: 'flex', alignItems: 'center', width: '100%'}} avatar={<img src={tech.icon} className="icon"></img>} title={tech.title}></List.Item.Meta>
                        </List.Item>)
                    }} />
                 </List.Item>)
            }}>
            </List>
        </section>
        <section className="projects" style={{marginBottom: '50px'}}>
            <Title id="projects"><LinearGradient gradient={["to right", "#00afff, #00ff8f"]}>Projects</LinearGradient></Title>
            <Flex style={{padding: '1rem 3rem'}} align="center" gap={12}><WeiboCircleOutlined></WeiboCircleOutlined><Title level={2} style={{color: 'rgb(62, 78, 92)', fontSize: '1.2rem', textAlign: 'left', margin: '0px'}}> Web </Title></Flex>
            <Paragraph style={{padding: '1rem', textAlign: 'left'}}>Here are a few excerpts from my front-end projects. Most of the time, I use <em>react</em> for my applications. It allows great flexibility in the development process.</Paragraph>
            <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className="mySwiper">
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
            <Flex style={{padding: '1rem 3rem'}} align="center" gap={12}><EditFilled></EditFilled><Title level={2} style={{color: 'rgb(62, 78, 92)', fontSize: '1.2rem', textAlign: 'left', margin: '0px'}}> Design </Title></Flex>
            <Paragraph style={{padding: '1rem', textAlign: 'left'}}>I'm first and foremost a <em>front developer</em>, but I think a good front-end developer needs to know about design. And so I design all my projects and take inspiration from everywhere</Paragraph>
            <Carousel  style={{height: '180px', margin: '0rem 1rem', borderRadius: '1rem 1rem'}} autoplay>
                <div className="carousel__container"><Image loading="lazy" className="slider-img" src="/MirrorLogin-01.jpg" alt="Mirror login page design" /></div>
                <div className="carousel__container"><Image loading="lazy" className="slider-img" src="/coffee-01.jpg" alt="coffee shop website design" /></div>
                <div className="carousel__container"><Image loading="lazy" className="slider-img" src="/nike-01.jpg" alt="Nike card design" /></div>
                <div className="carousel__container"><Image loading="lazy" className="slider-img" src="/todo-01.jpg" alt="Todo app design" /></div>
            </Carousel>
        </section>
    </>)
}