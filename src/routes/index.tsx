import { useTheme, Box } from 'native-base'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { AuthRoutes } from './auth.routes';

// import {useAuth} from '@contexts/'


export function Routes() {

    const { colors } = useTheme();

    // const [user, setUser] = useAuth();

    const theme = DefaultTheme;
    theme.colors.background = colors.white;

    /* if (isLoadingUserStorageData) {
        return <Loading />
    } */

    return (
        <Box flex={1} bg="gray.200">
            <NavigationContainer theme={theme}>
                <AuthRoutes />
            </NavigationContainer>
        </Box>
    )
}