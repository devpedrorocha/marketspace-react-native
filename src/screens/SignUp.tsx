import { useState } from 'react'
import { Center, Heading, ScrollView, Text, VStack, View } from "native-base";

import { useForm, Controller } from 'react-hook-form'
import { PencilSimpleLine } from "phosphor-react-native";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";

import LogoSvg from '@assets/LogoSvg.svg'

import { UserPhoto } from "@components/UserPhoto";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";


type FormDataProps = {
    name: string;
    email: string;
    telephone: string;
    password: string;
    password_confirmation: string;
}

const signUpSchema = yup.object({
    name: yup.string().required('Informe o nome.'),
    email: yup.string().required('Informe o e-mail.').email('E-mail inválido.'),
    telephone: yup.string().required('Informe seu telefone.').matches(/^ [\+] ? [(] ? [0 - 9]{ 3}[)]?[-\s\.]?[0 - 9]{ 3}[-\s\.]?[0 - 9]{ 4, 6}$/, 'Formato de número inválido'),
    password: yup.string().required('Informe a senha').min(6, 'A senha deve ter pelo menos 6 dígitos.'),
    password_confirm: yup.string().required('Confirme a senha.').oneOf([yup.ref('password')], 'A confirmação da senha não confere.')
})

export function SignUp() {

    const [isLoading, setIsLoading] = useState(false);

    const navigation = useNavigation();

    const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
        resolver: yupResolver(signUpSchema)
    })

    async function handleSignUp({ name, email, password }: FormDataProps) {
        try {
            setIsLoading(true);
            

        } catch (error) {

        } finally {
            setIsLoading(false);
        }
    }

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={true} bgColor='gray.200' >
            <VStack flex={1} px={8} py={12}>
                <VStack>
                    <Center>
                        <LogoSvg height={40} />
                        <Heading fontSize={20} mb={2} mt={4}>
                            Boas vindas!
                        </Heading>
                        <Text color='gray.600' textAlign='center'>
                            Crie sua conta e use o espaço para comprar itens variados e vender seus produtos
                        </Text>
                    </Center>
                </VStack>

                <VStack pt={8}>
                    <Center px={4}>
                        <View position="relative">
                            <UserPhoto
                                src="https://i.uai.com.br/qazBJOhdsp6-juD_bgVhGXalazI=/750x0/imgsapp2.uai.com.br/app/noticia_133890394703/2023/02/24/318756/pikachu-e-o-pokemon-mais-famoso_1_36331.jpg"
                                size={24}
                                mb={6}
                                alt="user photo"
                            />
                            <View rounded='full' bgColor='blue.300' p={4} position="absolute" bottom={15} right={-10}>
                                <PencilSimpleLine size={16} color="white" />
                            </View>
                        </View>
                        <Controller control={control} name="name" render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder="Nome"
                                onChangeText={onChange}
                                value={value}
                                errorMessage={errors.name?.message}
                            />
                        )} />

                        <Controller control={control} name="email" render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder="E-mail"
                                onChangeText={onChange}
                                value={value}
                                errorMessage={errors.email?.message}
                            />
                        )} />


                        <Controller control={control} name="telephone" render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder="Telefone"
                                onChangeText={onChange}
                                value={value}
                                errorMessage={errors.telephone?.message}
                            />
                        )} />

                        <Controller control={control} name="name" render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder="Senha"
                                onChangeText={onChange}
                                value={value}
                                errorMessage={errors.password?.message}
                            />
                        )} />


                        <Controller control={control} name="name" render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder="Confirmar senha"
                                onChangeText={onChange}
                                secureTextEntry
                                value={value}
                                onSubmitEditing={handleSubmit(handleSignUp)}
                                returnKeyType="send"
                                errorMessage={errors.password_confirmation?.message}
                                mb={4}
                            />
                        )} />

                        <Button
                            title="Criar"
                            bgColor="gray.700"
                            onPress={handleSubmit(handleSignUp)}
                            mb={8}
                        />

                        <Text mb={4}>
                            Já tem uma conta?
                        </Text>
                        <Button title="Ir para o login" onPress={handleGoBack} />
                    </Center>
                </VStack>
            </VStack>
        </ScrollView>
    )
}