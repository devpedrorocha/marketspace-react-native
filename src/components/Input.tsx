import { Input as NativeBaseInput, IInputProps } from "native-base"

type Props = IInputProps & {
    errorMessage?: string | null
}

export function Input({errorMessage, ...rest} : Props){
    return (
        <NativeBaseInput
            bg="gray.500"
            borderWidth={0}
            fontFamily="body"
            placeholderTextColor="gray.300"
            {...rest}
        />
    )
}