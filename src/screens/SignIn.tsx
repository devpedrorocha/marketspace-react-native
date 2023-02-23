import { Center, Heading, Text, VStack } from 'native-base'
import { Button } from '../components/Button'
import { Input } from '../components/Input'

import LogoSvg from '@assets/logoSvg.svg'

export function SignIn(){
    return (
      <VStack flex={1} bgColor="gray.100">
        <VStack bgColor="gray.200" py={16} px={10} borderBottomRadius={24}>
          <Center mt={24}>
            <LogoSvg />
            <Heading fontSize="xl">marketspace</Heading>
            <Text fontSize="md">Seu espaço de compra e venda</Text>
          </Center>

          <VStack mt={24} roundedBottom={4}>
            <Text alignSelf="center" fontSize="md">
              Acesse sua conta
            </Text>
            <Input
              placeholder="E-mail"
              fontSize="lg"
              bgColor="gray.100"
              p={3}
              mt={4}
            />
            <Input
              placeholder="Senha"
              fontSize="lg"
              bgColor="gray.100"
              p={3}
              mt={4}
            />
            <Button title="Entrar" bgColor="blue.400" rounded="lg" mt={6} />
          </VStack>
        </VStack>

        <VStack py={12} px={10}>
          <Text alignSelf="center">Ainda não tem acesso?</Text>
          <Button title="Criar uma conta" bgColor="gray.300" mt={4} />
        </VStack>
      </VStack>
    );
}