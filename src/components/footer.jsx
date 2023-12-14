import { Typography, Flex, Space } from "antd"
import { LinearGradient } from 'react-text-gradients'
import { MessageOutlined, WhatsAppOutlined, LinkedinOutlined } from "@ant-design/icons"

const {Title, Text, Link} = Typography
export default function Footer(){
    return (<>
        <section id="contact" className="contact">
            <Title><LinearGradient gradient={["to right", "#00afff, #00ff8f"]}>Contact me</LinearGradient></Title>
            <Space direction="vertical" align="start">
                <Flex gap={8} align="center">
                    <MessageOutlined></MessageOutlined>
                    <Title level={5} style={{margin: '0px', color: '#fff'}}>Email</Title>
                </Flex>
                <Link title="Email" copyable underline className="lightText" >annaick.tiana@gmail.com</Link>
                <Flex gap={8} align="center">
                    <WhatsAppOutlined></WhatsAppOutlined>
                    <Title className="lightText" level={5} style={{margin: '0px', color: '#fff'}}>WhatsApp</Title>
                </Flex>
                <Text className="lightText" style={{color: 'rgb(62, 78, 92)', textAlign: 'left'}} title="Email" copyable>+261 34 43 441 07</Text>
                <Flex gap={8} align="center">
                    <LinkedinOutlined></LinkedinOutlined>
                    <Title level={5} style={{margin: '0px', color: '#fff'}}>LinkedIn</Title>
                </Flex>
                <Text className="lightText" style={{color: 'rgb(62, 78, 92)', textAlign: 'left'}} title="Email">Visit my <Link target="_blank" rel="norefer noopener"  href="https://www.linkedin.com/in/tiana-anna%C3%AFck-b21914285" className="lightText" underline style={{textDecoration: 'underline'}}  >profil</Link></Text>           
            </Space>
        </section>
    </>)
}