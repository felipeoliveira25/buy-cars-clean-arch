'use client'
import { useForm, SubmitHandler } from "react-hook-form"
import { InputForm } from "../InputForm"
import { ContainerTextToRegister, ContainerTitles, FormContainer, SubTitleForm, TextRedirectToLogin, TitleForm } from "./styles";
import { ButtonSubmit } from "../ButtonSubmit";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from 'zod'
import { TextError } from "../TextError";

interface Inputs{
    name: string;
    email: string;
    password: string;
}

type FormData = zod.infer<typeof schema>

const schema = zod.object({
    name: 
        zod
            .string()
            .nonempty({message: "O nome é obrigatório!"})
            .min(3, { message: "O nome precisa ter mais de 3 letras"}),
            
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

export const FormRegister = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } =  useForm<FormData>({
        resolver: zodResolver(schema),
      });
      const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
      console.log("name:", watch("name"))
      console.log("email:", watch("email"));
      console.log("password", watch("password")) 
    return(
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <ContainerTitles>
                <TitleForm>Register</TitleForm>
                <SubTitleForm>to get started</SubTitleForm>
            </ContainerTitles>
            
            <InputForm 
                type="text"
                placeholder="Username"
                {...register("name")}
                hasError={errors.name ? true : false}
            />
            {errors?.name && <TextError>{errors?.name?.message}</TextError>}
            <InputForm 
                type="email"
                placeholder="E-mail"
                {...register("email")}
                hasError={errors.email ? true : false}
            />
            {errors?.email && <TextError>{errors?.email?.message}</TextError>}
            <InputForm 
                type="password"
                placeholder="Password"
                {...register("password")}
                hasError={errors.password ? true : false}
            />
            {errors?.password && <TextError>{errors?.password?.message}</TextError>}

            <ButtonSubmit>Continue</ButtonSubmit>
            <ContainerTextToRegister>
                <span>Already registered? <TextRedirectToLogin href="/login">Login</TextRedirectToLogin></span>
            </ContainerTextToRegister>
            
        </FormContainer>
    )
}