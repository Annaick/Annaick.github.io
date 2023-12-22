import { Typography, Flex, Space } from "antd"
import { LinearGradient } from 'react-text-gradients'
import { MessageOutlined, WhatsAppOutlined, LinkedinOutlined } from "@ant-design/icons"

const {Title, Text, Link} = Typography
export default function Footer(){
    return (<>
        <section id="contact" className="contact">
            <div className="container">
            <Title className="sectionHeading"><LinearGradient gradient={["to right", "#00afff, #00ff8f"]}>CONTACT ME</LinearGradient></Title>
            <Flex gap={20} vertical>
                <div><Flex gap={8} align="center" justify="center">
                    <MessageOutlined></MessageOutlined>
                    <Title className="paragraph" level={5} style={{margin: '0px', color: '#fff'}}>Email</Title>
                </Flex>
                <Link title="Email" copyable underline className="lightText paragraph" >annaick.tiana@gmail.com</Link></div>
                <div>
                <Flex gap={8} align="center" justify="center">
                    <WhatsAppOutlined></WhatsAppOutlined>
                    <Title className="lightText paragraph" level={5} style={{margin: '0px', color: '#fff'}}>WhatsApp</Title>
                </Flex>
                <Text className="lightText paragraph" style={{color: 'rgb(62, 78, 92)', textAlign: 'left'}} title="Email" copyable>+261 34 43 441 07</Text>
                </div>
                <div>
                <Flex gap={8} align="center" justify="center">
                    <LinkedinOutlined></LinkedinOutlined>
                    <Title className="paragraph" level={5} style={{margin: '0px', color: '#fff'}}>LinkedIn</Title>
                </Flex>
                <Text className="lightText paragraph" style={{color: 'rgb(62, 78, 92)', textAlign: 'left'}} title="Email">Visit my <Link target="_blank" rel="norefer noopener"  href="https://www.linkedin.com/in/tiana-anna%C3%AFck-b21914285" className="lightText" underline style={{textDecoration: 'underline'}}  >profil</Link></Text>      </div>     
            </Flex>
            </div>
        </section>
    </>)
}