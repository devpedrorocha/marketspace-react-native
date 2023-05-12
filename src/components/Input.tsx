import { Input as NativeBaseInput, IInputProps, FormControl } from "native-base";

type Props = IInputProps & {
    errorMessage?: string | null;
}

export function Input({ errorMessage, isInvalid, ...rest }: Props) {

    const invalid = !!errorMessage || isInvalid;

    return (
        <FormControl isInvalid={invalid} mb={4}>
            <NativeBaseInput
                color="gray.700"
                bgColor='white'
                borderColor='white'
                placeholderTextColor='gray.400'
                fontSize="md"
                borderRadius={6}
                p='2'
                px={4}
                fontFamily="body"
                isInvalid={invalid}
                _invalid={{
                    borderWidth: 1,
                    borderColor: "red.500"
                }}
                _focus={{
                    borderWidth: 1,
                    borderColor: "blue.300"
                }}
                {...rest}
            />

            <FormControl.ErrorMessage _text={{ color: "red.500" }}>
                {errorMessage}
            </FormControl.ErrorMessage>
        </FormControl>
    )
}