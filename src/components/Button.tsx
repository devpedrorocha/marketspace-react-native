import {Button as NativeBaseButton, IButtonProps} from 'native-base'

type Props = IButtonProps & {
    title: string;
    bgColor: string;
}

export function Button({title, bgColor, ...rest} : Props){
    return(
        <NativeBaseButton
        bgColor={bgColor}
        size="lg"
        {...rest}
        >
            {title}
        </NativeBaseButton>
    )
}