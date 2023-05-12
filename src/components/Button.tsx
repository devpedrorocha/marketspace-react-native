import { Button as NativeBaseButton, IButtonProps, Text } from 'native-base'


type Props = IButtonProps & {
    title: string
    bgColor?: string
}

export function Button({ title, bgColor = 'gray.300', ...rest }: Props) {
    return (
        <NativeBaseButton
            w="full"
            h={12}
            bg={bgColor}
            rounded='sm'
            _pressed={{
                bg: bgColor == 'blue.300' ? 'blue.400' : 'gray.400'
            }}
            {...rest}
        >
            <Text color={bgColor === 'gray.300' ? 'gray.600' : 'white'} fontFamily="heading">
                {title}
            </Text>
        </NativeBaseButton>
    )
}