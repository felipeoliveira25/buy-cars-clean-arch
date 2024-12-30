'use client'
import { useForm, SubmitHandler } from "react-hook-form"
import { InputForm } from "../InputForm"
import { ContainerTextToRegister, ContainerTitles, FormContainer, SubTitleForm, TextForgotPassword, TextRedirectToRegister, TitleForm } from "./styles";
import { ButtonSubmit } from "../ButtonSubmit";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from 'zod'
import { TextError } from "../TextError";

interface Inputs{
    email: string;
    password: string;
}

type FormData = zod.infer<typeof schema>

const schema = zod.object({
    email: 
        zod
            .string()
            .nonempty({message:"O email é obrigatório!"})
            .email({ message: "Formato de e-mail inválido"}),
            
    password:
        zod
            .string()
            .nonempty({message: "A senha é obrigatória!"})
            .min(6, { message: "A senha deve ter no mínimo 6 caracteres!"}),
            
})

export const FormLogin = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } =  useForm<FormData>({
        resolver: zodResolver(schema),
      });
      const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
      console.log(watch("email")) 
    return(
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <ContainerTitles>
                <TitleForm>Login</TitleForm>
                <SubTitleForm>to get started</SubTitleForm>
            </ContainerTitles>
            
            <InputForm 
                type="email"
                placeholder="E-mail"
                {...register("email")}
                hasError={errors.email ? true : false}
            />
            {errors.email && <TextError>{errors?.email?.message}</TextError>}
            <InputForm 
                type="password"
                placeholder="Password"
                {...register("password")}
                hasError={errors.password ? true : false}
            />
            {errors.password && <TextError>{errors?.password?.message}</TextError>}

            <TextForgotPassword href="#">Forgot password?</TextForgotPassword>
            <ButtonSubmit>Continue</ButtonSubmit>
            <ContainerTextToRegister>
                <span>New user? <TextRedirectToRegister href="/register">Register</TextRedirectToRegister></span>
            </ContainerTextToRegister>
            
        </FormContainer>
    )
}