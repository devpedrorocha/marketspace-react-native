import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base'

import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'
import { THEME } from './src/theme';

import { Loading } from './src/components/Loading';
import { SignIn } from './src/screens/SignIn';

export default function App() {

  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })

  return (
    <NativeBaseProvider theme={THEME} >
      <StatusBar
      barStyle="light-content"
      backgroundColor='transparent'
      translucent
      />
      {fontsLoaded ? <SignIn /> : <Loading/>}

    </NativeBaseProvider>
    
  );
}

