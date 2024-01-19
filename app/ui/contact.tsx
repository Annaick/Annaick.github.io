'use client'

import { Input, Button, Textarea } from "@nextui-org/react"
import { Slide } from "react-awesome-reveal"
import { useForm } from "react-hook-form"
import { sendEmail } from "@/utils/send-mail"
import { useState, useEffect } from "react"
import toast, {Toaster} from "react-hot-toast"

export type Data = {
    name: string;
    email: string;
    message: string;
}

export default function Contact (){
    const {register, handleSubmit, formState: {errors}} = useForm<Data>()
    const [isLoading, setIsLoading] = useState (false)

    const [nameError, setNameError] = useState (false)
    const [emailError, setEmailError] = useState (false)
    const [messageError, setMessageError] = useState (false)

    useEffect (()=>{
        console.log ('email error')
        if (errors.email){
            setEmailError(true)
        }else{
            setEmailError (false)
        }
    }, [errors.email])
    useEffect (()=>{
        console.log ('name error')
        if (errors.name){
            setNameError(true)
        }else{
            setNameError (false)
        }
    }, [errors.name])
    useEffect (()=>{
        console.log ('message error')
        if (errors.message){
            setMessageError(true)
        }else{
            setMessageError (false)
        }
    }, [errors.message])

    async function onSubmit (data: Data){
        setIsLoading (true)
        try{
            await sendEmail(data)
            toast.success('Message Envoyé')
        }catch {
            toast.error ('Un erreur est survenu. Veuillez ressayer')
        }
        setIsLoading (false)
    }

    return (
        <section className="mb-10 relative">
            <img src="/images/gradient--purple.png" alt=""  className="absolute top-0 md:top-[-50px] md:right-[-100px] right-[-50px] z-0 w-[300px] md:w-[500px]" />
            <Toaster toastOptions={
                {
                    className: 'dark:bg-gray-900 dark:text-white'
                }
            } position="bottom-center"></Toaster>
            <h1 className="mb-2 md:text-2xl">Contact</h1>
            <p className="text-sm mb-4 text-default-600">Pour me saluer où demander plus d&apos;informations, n&apos;hesitez pas à m&apos;envoyer un message</p>
            
            <div className="flex justify-center">
                <Slide>
                <form onSubmit={handleSubmit(onSubmit)} id="contact" className="max-w-[500px] w-[90vw] bg-gradient-to-r from-purple-500 to-cyan-700 p-4 rounded-lg">
                    <h2 className="text-white mb-4">Contactez-moi</h2>
                    <Input isInvalid={nameError } errorMessage={nameError? 'Veuillez entrer votre nom': ''}  aria-label="Entrez votre nom" className="mb-4" label='nom' {...register('name', {required: true})}></Input>
                    <Input isInvalid={emailError} errorMessage={emailError?'Veuillez entrer une adresse email valide': ''} aria-label="Entrez votre adresse email" className="mb-4" label='Adresse email' {...register('email'
                    ,{required: true,
                    validate:{
                        matchPattern: (v)=> /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v),
                    }})}></Input>
                    <Textarea isInvalid={messageError} errorMessage={messageError? 'Veuillez nous laisser un message': ''} aria-label="laissez un message" className="mb-6"  label='Message' {...register('message', {required: true})}></Textarea>
                    <div className="flex justify-end">
                        <Button isLoading={isLoading} variant="bordered" className="border-white text-white" type="submit">Envoyer</Button>
                    </div>
                </form>
                </Slide>
            </div>
        </section>
    )

}