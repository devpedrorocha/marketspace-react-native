import { useState } from 'react'
import { ScrollView } from 'react-native'
import { VStack, Text, Heading, Center, Icon, Pressable } from 'native-base'
import { Controller, useForm } from 'react-hook-form'

import { useNavigation } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons'

import Logo from './../assets/LogoSvg.svg'

import { AuthNavigatorRoutesProps } from '@routes/auth.routes'

import { Input } from '@components/Input'
import { Button } from '@components/Button'

type FormData = {
    email: string;
    password: string;
}

export function SignIn() {

    const { control, handleSubmit, formState: { errors } } = useForm<FormData>();

    const navigation = useNavigation<AuthNavigatorRoutesProps>();

    function handleNewAccount() {
        navigation.navigate('signUp');
    }

    const [isLoading, setIsLoading] = useState(false);

    const [show, setShow] = useState(false);

    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}

        >
            <VStack flex={1} w='full'>
                <VStack px={10} pb={16} bgColor='gray.200' borderBottomRadius='3xl'>
                    <Center my={24} mb={20}>
                        <Logo />
                        <Heading fontSize={38}>
                            marketspace
                        </Heading>
                        <Text color="gray.500">
                            Seu espaço de compra e venda
                        </Text>
                    </Center>

                    <Center >
                        <Text color="gray.600" fontSize="md" mb={4}>
                            Acesse sua conta
                        </Text>

                        <Controller
                            control={control}
                            name='email'
                            rules={{ required: 'Informe o e-mail' }}
                            render={({ field: { onChange } }) => (
                                <Input
                                    placeholder='E-mail'
                                    onChangeText={onChange}
                                    errorMessage={errors.email?.message}
                                    keyboardType='email-address'
                                    autoCapitalize="none"
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name='password'
                            rules={{ required: 'Informe a senha' }}
                            render={({ field: { onChange } }) => (


                                <Input
                                    placeholder='Senha'
                                    onChangeText={onChange}
                                    errorMessage={errors.password?.message}
                                    autoCapitalize="none"
                                    type={show ? "text" : "password"}
                                    InputRightElement={
                                        <Pressable onPress={() => setShow(!show)}>
                                            <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                                        </Pressable>
                                    }
                                />
                            )}
                        />

                        <Button isLoading={isLoading} title='Entrar' bgColor='blue.300' mt={6} onPress={() => { console.log('oi') }} />
                    </Center>

                </VStack>

                <VStack bgColor='white' px={10} py={6}>
                    <Text textAlign='center' mb={4} color="gray.600">
                        Ainda não tem acesso?
                    </Text>
                    <Button title='Criar uma conta' onPress={handleNewAccount} />
                </VStack>

            </VStack>
        </ScrollView>
    )
}