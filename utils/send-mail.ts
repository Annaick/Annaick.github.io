'use server'

import { Data } from '@/app/ui/contact';

import nodemailer from 'nodemailer'
import Mail from "nodemailer/lib/mailer";

export async function sendEmail (data: Data){
    const {email, name, message} =  data

    const mailOptions: Mail.Options ={
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: `Message venant de ${name} (${email})`,
        text: message,
    }
    
    
    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    })
    console.log ('Message options set...')
    
    const sendEmailPromise = ()=>{
        return new Promise ((resolve, reject)=>{
            transport.sendMail(mailOptions, function (err){
                if (!err){
                    resolve ('message sent')
                }else{
                    reject (err.message)
                }
            })
        })
    }

    console.log ('sending message')
    
    try{
        await sendEmailPromise()
        console.log ('Message sent')
    }catch (e){
        throw new Error ('Error while sending email')
    }
}