import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base'

import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';

import { SignIn } from './src/screens/SignIn';


import { Loading } from '@components/Loading';
import { THEME } from './src/theme';
import { Routes } from '@routes/index';

export default function App() {

  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar barStyle="light-content"
        backgroundColor="transparent"
        translucent />

      {fontsLoaded ? <Routes /> : <Loading />}

    </NativeBaseProvider>

  );
}

